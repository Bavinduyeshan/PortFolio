export const site = {
  name: "Bavindu Yeshan",
  firstName: "Bavindu",
  role: "Software Engineering Undergraduate",
  location: "Colombo, Sri Lanka",
  institution: "National Institute of Business Management",
  institutionShort: "NIBM",
  email: "bavinduyeshan18@gmail.com",
  url: "https://bavinduyeshan-web.netlify.app",
  github: "https://github.com/Bavinduyeshan",
  linkedin: "https://www.linkedin.com/in/bavindu-yeshan-3a26052a7/",
  portrait: "/images/portrait.jpg",
  title: "Bavindu Yeshan | Software Developer in Sri Lanka",
  description:
    "Meet Bavindu Yeshan, a software engineering undergraduate in Sri Lanka building web, mobile, and desktop applications with React, Java, Spring Boot, and Flutter.",
};

export const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  {
    number: "01",
    title: "Frontend development",
    icon: "web",
    description:
      "Component-based interfaces, responsive web layouts, and browser application development.",
    items: ["React", "JavaScript", "HTML", "CSS", "Vite"],
  },
  {
    number: "02",
    title: "Backend & applications",
    icon: "code",
    description:
      "Backend services, object-oriented programming, desktop applications, and API integration.",
    items: ["Java", "Spring Boot", "C#", "Python", "REST APIs"],
  },
  {
    number: "03",
    title: "Mobile & data",
    icon: "mobile",
    description:
      "Cross-platform and native mobile development, relational data, and application tooling.",
    items: ["Flutter", "Dart", "Swift", "MySQL", "Firebase", "Postman"],
  },
];

export const projects = [
  {
    id: "patient-records",
    overview:
      "A React frontend connects to Spring Boot microservices through REST APIs. The application focuses on organizing patient medical records in a web-based system.",
    name: "Patient Medical Records",
    category: "web",
    categoryLabel: "Web application",
    image: "/images/patient-records.jpg",
    description:
      "A patient-record management platform connecting a React interface with Spring Boot microservices.",
    tech: ["React", "Spring Boot", "REST API"],
    github: null,
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:activity:7322837235370729473/",
    color: "blue",
  },
  {
    id: "hospital-management",
    overview:
      "Built with C# and Windows Forms, with MySQL for application data. The system brings together patient records, appointment scheduling, and billing workflows.",
    name: "Hospital Management System",
    category: "desktop",
    categoryLabel: "Desktop application",
    image: "/images/hospital-management.jpg",
    description:
      "A desktop system bringing hospital operations, patient records, appointments, and billing into one place.",
    tech: ["C#", "WinForms", "MySQL"],
    github: "https://github.com/Bavinduyeshan/Hospital-Management-system",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:ugcPost:7266091865416839169",
    color: "mint",
  },
  {
    id: "flutter-weather",
    overview:
      "A cross-platform application built with Flutter and Dart, using OpenWeather for weather information. The project applies mobile interface development and external API integration.",
    name: "Flutter Weather App",
    category: "mobile",
    categoryLabel: "Mobile application",
    image: "/images/flutter-weather.jpg",
    description:
      "A Flutter weather app that puts forecasts and everyday weather information within reach.",
    tech: ["Flutter", "Dart", "OpenWeather"],
    github: "https://github.com/Bavinduyeshan/Flutter-Weather-App",
    linkedin:
      "https://www.linkedin.com/posts/bavindu-yeshan-3a26052a7_flutter-dart-mobileapp-activity-7285670784084144128-P5t1",
    color: "peach",
  },
  {
    id: "medi-guide",
    overview:
      "A React web interface is paired with a Spring Boot backend and medicine information in JSON format. The project focuses on searching for medicines and presenting their details.",
    name: "Medi-Guide",
    category: "web",
    categoryLabel: "Web application",
    image: "/images/medi-guide.jpg",
    description:
      "A medicine-information platform exploring a simpler way to search and discover medicine details.",
    tech: ["React", "Spring Boot", "CSS"],
    github: null,
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:activity:7329592696581292033/",
    color: "lavender",
  },
  {
    id: "voice-chatbot",
    overview:
      "A Python application combining voice input, speech recognition, and conversational interaction. The project explores how speech interfaces can support a chatbot experience.",
    name: "Voice-Activated Chatbot",
    category: "ai",
    categoryLabel: "AI & experimentation",
    image: "/images/voice-chatbot.jpg",
    description:
      "A voice-activated Python chatbot exploring speech recognition and conversational interaction.",
    tech: ["Python", "Speech API", "AI"],
    github: "https://github.com/Bavinduyeshan/Chatbot-with-Voice",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:ugcPost:7275227024758059008",
    color: "sand",
  },
  {
    id: "education-management",
    overview:
      "A Java Swing desktop application using MySQL. It organizes student enrollments, course scheduling, and academic records through a desktop interface.",
    name: "Educational Institute Management System",
    category: "desktop",
    categoryLabel: "Desktop application",
    image: "/images/education-management.jpg",
    description:
      "A Java Swing application for student enrollment, course scheduling, and academic records.",
    tech: ["Java", "Swing", "MySQL"],
    github:
      "https://github.com/Bavinduyeshan/Educational-Institute-Management-System",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:ugcPost:7282806142282440704",
    color: "mint",
  },
  {
    id: "weather-web",
    overview:
      "A browser-based weather application built with HTML, CSS, and JavaScript. The project applies web layout, scripting, and weather information presentation.",
    name: "JavaScript Weather App",
    category: "web",
    categoryLabel: "Web application",
    image: "/images/weather-web.jpg",
    description: "A weather application built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Bavinduyeshan/Weather-App",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:share:7252038693815738371",
    color: "blue",
  },
  {
    id: "railway-management",
    overview:
      "A Windows Forms application written in C# and backed by SQL Server. The project focuses on managing information and workflows for railway operations.",
    name: "Railway Management System",
    category: "desktop",
    categoryLabel: "Desktop application",
    image: "/images/railway-management.jpg",
    description:
      "A C# WinForms project designed to organize railway operations.",
    tech: ["C#", "WinForms", "SQL Server"],
    github: "https://github.com/Bavinduyeshan/Railway-mangement-system",
    linkedin:
      "https://www.linkedin.com/posts/bavindu-yeshan-3a26052a7_managementsystem-activity-7176607728205803520-wWgy",
    color: "sand",
  },
  {
    id: "python-weather",
    overview:
      "A Python desktop application using Tkinter for the interface and Requests for data retrieval. It presents weather information in a dedicated desktop window.",
    name: "Python Weather App",
    category: "desktop",
    categoryLabel: "Desktop application",
    image: "/images/weather-web.jpg",
    description:
      "A desktop weather application built with Python, Tkinter, and the Requests library.",
    tech: ["Python", "Tkinter", "Requests"],
    github: "https://github.com/Bavinduyeshan/Weather-App-Python",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:share:7208151037424123904",
    color: "peach",
  },
  {
    id: "hospital-chatbot",
    overview:
      "A C# Windows Forms chatbot associated with a hospital management system. The project explores natural language interaction within a desktop application.",
    name: "Hospital Chatbot",
    category: "ai",
    categoryLabel: "AI & experimentation",
    image: "/images/hospital-chatbot.jpg",
    description:
      "A conversational interface built in C# WinForms for a hospital management system.",
    tech: ["C#", "WinForms", "NLP"],
    github: "https://github.com/Bavinduyeshan/Chatbot_HMS",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:share:7267264105005146113",
    color: "lavender",
  },
  {
    id: "student-management",
    overview:
      "A C# Windows Forms application with MySQL. It supports the organization and automation of university student management tasks.",
    name: "University Student Management",
    category: "desktop",
    categoryLabel: "Desktop application",
    image: "/images/student-management.jpg",
    description:
      "A C# WinForms application for organizing and automating university student management.",
    tech: ["C#", "WinForms", "MySQL"],
    github:
      "https://github.com/Bavinduyeshan/UniversityStudentManagementSystem",
    linkedin:
      "https://www.linkedin.com/posts/bavindu-yeshan-3a26052a7_sql-softwaredevelopment-studentmanagementsystem-activity-7247354873631907842-lhhI",
    color: "mint",
  },
  {
    id: "swift-game",
    overview:
      "A native iOS implementation of Tic Tac Toe built with Swift and SwiftUI. The project applies native mobile interface development to a familiar interactive game.",
    name: "Swift iOS Tic Tac Toe",
    category: "mobile",
    categoryLabel: "Mobile application",
    image: "/images/swift-game.jpg",
    description:
      "A classic game, reimagined as a simple native iOS app built with Swift and SwiftUI.",
    tech: ["Swift", "SwiftUI", "iOS"],
    github: null,
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:activity:7336467861994991619/",
    color: "peach",
  },
];
