const COURSES = [
  {
    id: 1, title: "Node.js Backend Ustası", category: "Backend", level: "Orta", icon: "🟢", modules: 7,
    tech: ["Node.js", "Express"],
    description: "Sıfırdan REST API qurun: marşrutlar, middleware, autentifikasiya və verilənlər bazası ilə işləmək.",
    plan: ["Node.js və npm əsasları", "Express ilə marşrutlaşdırma", "Middleware və xəta idarəsi", "JWT ilə autentifikasiya", "MongoDB inteqrasiyası", "Test yazmaq", "Deploy"],
    docs: [{ label: "Node.js sənədləri", url: "https://nodejs.org/docs/latest/api/" }, { label: "Express", url: "https://expressjs.com" }]
  },
  {
    id: 2, title: "React ilə Müasir Frontend", category: "Frontend", level: "Orta", icon: "⚛️", modules: 8,
    tech: ["React", "Hooks", "Vite"],
    description: "Komponentlər, state idarəsi, hook-lar və real layihə üzərində müasir interfeys qurmaq.",
    plan: ["JSX və komponentlər", "Props və state", "useEffect və yan təsirlər", "Formalar", "Routing", "Global state", "Performans", "Layihə"],
    docs: [{ label: "React sənədləri", url: "https://react.dev" }, { label: "Vite", url: "https://vite.dev" }]
  },
  {
    id: 3, title: "HTML və CSS Əsasları", category: "Frontend", level: "Başlanğıc", icon: "🎨", modules: 5,
    tech: ["HTML5", "CSS3", "Flexbox", "Grid"],
    description: "Semantik markup, düzən sistemləri və responsiv dizaynla ilk veb səhifənizi hazırlayın.",
    plan: ["Semantik HTML", "CSS seçiciləri və box model", "Flexbox", "Grid", "Responsiv dizayn"],
    docs: [{ label: "MDN HTML", url: "https://developer.mozilla.org/docs/Web/HTML" }, { label: "MDN CSS", url: "https://developer.mozilla.org/docs/Web/CSS" }]
  },
  {
    id: 4, title: "Python ilə Data Analizi", category: "Data", level: "Başlanğıc", icon: "🐍", modules: 6,
    tech: ["Python", "Pandas", "Matplotlib"],
    description: "Məlumatı təmizləyin, analiz edin və qrafiklərlə izah edin. Real data dəstləri ilə praktika.",
    plan: ["Python əsasları", "NumPy massivləri", "Pandas ilə cədvəllər", "Data təmizləmə", "Vizuallaşdırma", "Mini layihə"],
    docs: [{ label: "Python", url: "https://docs.python.org/3/" }, { label: "Pandas", url: "https://pandas.pydata.org/docs/" }]
  },
  {
    id: 5, title: "Docker və CI/CD", category: "DevOps", level: "İrəli", icon: "🐳", modules: 6,
    tech: ["Docker", "GitHub Actions", "Linux"],
    description: "Tətbiqi konteynerə salın, avtomatik test və deploy xətti qurun.",
    plan: ["Konteyner anlayışı", "Dockerfile yazmaq", "Docker Compose", "GitHub Actions", "Avtomatik deploy", "Monitorinq"],
    docs: [{ label: "Docker", url: "https://docs.docker.com" }, { label: "GitHub Actions", url: "https://docs.github.com/actions" }]
  },
  {
    id: 6, title: "Flutter ilə Mobil Tətbiqlər", category: "Mobil", level: "Orta", icon: "📱", modules: 7,
    tech: ["Flutter", "Dart"],
    description: "Bir kod bazası ilə həm Android, həm iOS üçün tətbiq hazırlayın.",
    plan: ["Dart dili", "Widget-lər", "Naviqasiya", "State idarəsi", "API ilə işləmək", "Lokal yaddaş", "Publish"],
    docs: [{ label: "Flutter", url: "https://docs.flutter.dev" }, { label: "Dart", url: "https://dart.dev/guides" }]
  },
  {
    id: 7, title: "SQL və Verilənlər Bazası", category: "Backend", level: "Başlanğıc", icon: "🗄️", modules: 5,
    tech: ["SQL", "PostgreSQL"],
    description: "Cədvəllər, sorğular, əlaqələr və indekslər. Hər backend developerin bilməli olduğu baza.",
    plan: ["Əsas sorğular", "Filtr və sıralama", "JOIN-lər", "Qruplaşdırma", "İndeks və normalizasiya"],
    docs: [{ label: "PostgreSQL", url: "https://www.postgresql.org/docs/" }, { label: "SQLBolt", url: "https://sqlbolt.com" }]
  },
  {
    id: 8, title: "TypeScript Dərin Dalış", category: "Frontend", level: "İrəli", icon: "🔷", modules: 6,
    tech: ["TypeScript", "Generics"],
    description: "Tip sistemi, generic-lər və böyük layihələrdə təhlükəsiz kod yazmaq.",
    plan: ["Tiplər və interfeyslər", "Union və intersection", "Generics", "Utility tiplər", "tsconfig", "Mövcud layihəni miqrasiya"],
    docs: [{ label: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/" }]
  }
];
