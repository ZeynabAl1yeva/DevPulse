let level = "Hamısı"
let category = "Hamısı"
let query = ""
let toastTimer
let favs = JSON.parse(localStorage.getItem("dp-favs")||"[]")
document.getElementById("burger").addEventListener("click", function() {
  document.getElementById("menu").classList.toggle("open")
})

document.getElementById("menu").addEventListener("click", function(){
  document.getElementById("menu").classList.remove("open")
})

function savefavs(){
  localStorage.setItem("dp-favs",JSON.stringify(favs))
}

function getcourse(id){
  return COURSES.find(course=>course.id===id)
}
function settheme(theme){
  document.documentElement.dataset.theme = theme
  localStorage.setItem("dp-theme",theme)
}
document.getElementById("themeBtn").addEventListener("click",function(){
  const now = document.documentElement.dataset.theme
  if (now ==="dark"){
    settheme("light")
  }
  else {
    settheme("dark")
  }
})

function toast(message){
  const box = document.getElementById("toast")
  box.textContent = message
  box.classList.add("show")
  clearTimeout(toastTimer)
  toastTimer = setTimeout(()=>{
    box.classList.remove("show")
  },3000)
}

function runcounters(){
  const courses = COURSES.length
  const modules = COURSES.reduce((total, course) => total + course.modules,0)
  const categories = new Set(COURSES.map(course => course.category)).size
  const technologies = new Set(COURSES.flatMap(course => course.tech)).size
  const numbers = {
    courses: courses,
    modules: modules,
    categories: categories,
    techs: technologies
  }
document.querySelectorAll("[data-key]").forEach(function(element){
  const target =numbers[element.dataset.key]
  let number = 0
  const timer = setInterval(()=>{
    number++
    element.textContent = number
    if (number >= target){
      clearInterval(timer)
    }
  },1200/target)
  })
}
// burda ai istifade etdim :( ...new Set bu ifade ancaq ferqli olanlara komek edir yoxsa hamsi cixir
function createcategories(){
  const categories=["Hamısı",...new Set(COURSES.map(course=>course.category))]
  document.getElementById("pills").innerHTML =
    categories.map(function(category){
      return `<button class="pill" data-cat="${category}">${category}</button>`}).join("")
  updatecategories()
}
function updatecategories(){
  document.querySelectorAll(".pill").forEach(function(button){
      if (button.dataset.cat === category){button.classList.add("active")}
      else button.classList.remove("active")
    })
}

function getilteredcourses(){
  return COURSES.filter(function(course){
    const text =(course.title+" " +course.tech.join(" ")).toLowerCase()
    const searchOk =text.includes(query.toLowerCase())
    const categoryOk=category ==="Hamısı"||course.category===category
    const levelOk=level =="Hamısı"||course.level ===level
    return (searchOk&&categoryOk &&levelOk)
  })
}
function createcard(course){
  const favorite = favs.includes(course.id)
  return`
    <div class="card">
    <div class="card-top">
    <div class="ico">${course.icon}</div>
    <button class="heart ${favorite ? "on" : ""}" data-fav="${course.id}" aria-label="Yadda saxla">
      ${favorite ? "♥" : "♡"}
    </button>
    </div>
    <div class="tags">
      <span class="tag">${course.category}</span>
      <span class="tag lvl-${course.level}">${course.level}</span>
    </div>
    <h3>${course.title}</h3>
    <p>${course.description}</p>
    <div class="techs">${course.tech.map(tech=>`<span>${tech}</span>`).join("")}</div>
    <div class="card-foot">
    <span class="mods">${course.modules} modul</span>
    <button class="link-btn" data-open="${course.id}">Ətraflı bax</button>
    </div>
    </div>`
}

function showskeleton() {
  document.getElementById("grid").innerHTML=
  `
    <div class="card skel">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
    <div class="card skel">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
    <div class="card skel">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
    <div class="card skel">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
    <div class="card skel">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
    <div class="card skel">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
  `
}
function updatebadge(){
  document.getElementById("favCount").textContent=favs.length
}
function render(){
  const courses =getilteredcourses()
  document.getElementById("grid").innerHTML=courses.map(course=>createcard(course)).join("")
  document.getElementById("empty").hidden =courses.length!==0
  document.getElementById("resultInfo").textContent=courses.length +" kurs tapıldı"
}

function togglefavorite(id){
  if (favs.includes(id)){
    favs = favs.filter(i=>i!==id)
    toast("Yadda saxlananlardan silindi")
  }
  else{
    favs.push(id)
    toast("Yadda saxlandı")
  }
  savefavs()
  updatebadge()
  render()
  renderdrawer()
}
function renderdrawer(){
  const box =document.getElementById("drawerList")
  if (favs.length === 0){
    box.innerHTML=`<p class="muted">Hələ heç nə saxlamamısan.</p>`
    return
  }
  box.innerHTML = favs.map(id =>{
      const course =getcourse(id)
      return `
        <div class="mini">
          <span class="ico">${course.icon}</span>
          <div>
            <strong>${course.title}</strong>
            <small>${course.category} ·${course.level}</small>
          </div>
          <button data-open="${course.id}">↗</button>
          <button data-fav="${course.id}">✕</button>
        </div>
      `
    }).join("")
}
function openmodal(id) {
  const course =getcourse(id)
  closeall()
  document.getElementById("modalBody").innerHTML = `
    <div class="big-ico">${course.icon}</div>
    <div class="tags">
      <span class="tag">${course.category}</span>
      <span class="tag">${course.level}</span>
      <span class="tag">${course.modules} modul</span>
    </div>
    <h3>${course.title}</h3>
    <p class="muted">${course.description}</p>
    <h4>Mərhələli plan</h4>
    <ol class="plan">${course.plan.map(item => `<li>${item}</li>`).join("")}</ol>
    <h4>Sənədlər</h4>
    <div class="doc-list">
      ${course.docs.map(doc => `<a href="${doc.url}" target="_blank" rel="noopener">${doc.label}</a>`).join("")}
    </div>
    <div class="modal-actions">
      <button class="btn primary" data-apply="${course.id}">Müraciət et</button>
      <button class="btn ghost" data-close>Bağla</button>
    </div>
  `
  document.getElementById("overlay").hidden =false
  document.getElementById("modal").hidden =false
}

function closeall() {
  document.getElementById("overlay").hidden =true
  document.getElementById("modal").hidden =true
  document.getElementById("drawer").classList.remove("open")
}
function opendrawer(){
  closeall()
  renderdrawer();
  document.getElementById("overlay").hidden=false
  document.getElementById("drawer").classList.add("open")
}

document.addEventListener("click",function(e){
    const button =e.target.closest("button, #overlay")
    if (!button) return
    if (button.dataset.fav){
      togglefavorite(Number(button.dataset.fav))
    }
    else if(button.dataset.open){
      openmodal(Number(button.dataset.open))
    }
    else if(button.dataset.cat){
      category =button.dataset.cat
      updatecategories()
      render()
    }
    else if(button.dataset.apply){
      document.getElementById("course").value =button.dataset.apply
      closeall()
      document.getElementById("apply").scrollIntoView()
      document.getElementById("fname").focus()
    }
    else if (button.hasAttribute("data-close")||button.id ==="overlay"){
      closeall()
    }
  }
)
document.getElementById("favBtn").addEventListener("click",opendrawer)
document.getElementById("search").addEventListener("input",function(e) {
  query =e.target.value
  render()
}
)
document.getElementById("levelFilter").addEventListener("change",function(e){
  level =e.target.value;
  render();
}
)
document.getElementById("resetBtn").addEventListener("click",function(){
  query = ""
  category = "Hamısı"
  level = "Hamısı";
  document.getElementById("search").value =""
  document.getElementById("levelFilter").value ="Hamısı"
  updatecategories()
  render()
  }
)
function fillcourseselect(){
  document.getElementById("course").innerHTML = `
    <option value="">Seçin</option>
    ${COURSES.map(course => `<option value="${course.id}">${course.title}</option>`).join("")}
  `
}
function seterror(input,message){
  const field =input.closest(".field")
  field.classList.toggle("invalid",message !== "")
  field.querySelector(".err").textContent =message
  return message === ""
}
function validateform() {
  const form =document.getElementById("form")
  const email =form.email.value
  const emailcorrect =/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
  const namecorrect =form.fname.value.length>=2
  const surnamecorrect =form.lname.value.length>= 2
  const coursecorrect =form.course.value !== ""
  const levelcorrect =form.level.value !== ""
  const results = [seterror(form.fname,namecorrect ? "": "Ad ən azı 2 hərf olmalıdır"),
    seterror(form.lname,surnamecorrect? "": "Soyad ən azı 2 hərf olmalıdır"),
    seterror(form.email,emailcorrect? "": "Düzgün e-poçt daxil edin"),
    seterror(form.course,coursecorrect? "": "Kurs seçin"),
    seterror(form.level,levelcorrect? "": "Səviyyə seçin")]
  return results.every(result => result)
}
document.getElementById("form").addEventListener("submit",function(e) {
  e.preventDefault()
  if (!validateform()) {return}
  const name =e.target.fname.value
  toast("Təşəkkür, " +name +"! Müraciətin qəbul edildi.")
  e.target.reset()
})

document.getElementById("form").addEventListener("input",function(e){seterror(e.target,"")})
document.getElementById("year").textContent =new Date().getFullYear()
createcategories()
fillcourseselect()
updatebadge()
showskeleton()
setTimeout(function(){render()}, 700)
runcounters()