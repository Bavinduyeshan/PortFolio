import React from 'react'
import hosimg from '../../assets/Untitled-1.png'
import weatherWEb from '../../assets/weatherc.jpg'
import eims from '../../assets/eimsc.jpg'
import railway2 from '../../assets/railwayc.jpg'
import chatbot from '../../assets/chatbotc.jpg'
import chatbotcshrape from '../../assets/cht.jpg'
import unist from '../../assets/unist.jpeg'
import weatherf from '../../assets/weatherappf.jpeg'


const projects = [
    {
      id: 1,
      title: "Hospital Management System",
      description: "A desktop application for managing hospital operations.",
      image: hosimg,
      github: "https://github.com/Bavinduyeshan/Hospital-Management-system.git",
    },
    {
      id: 2,
      title: "Weather App",
      description: "A Weather app created using HTML,CSS,JS",
      image: weatherWEb,
      github: "https://github.com/Bavinduyeshan/Weather-App.git",
    },
    {
      id: 3,
      title: "Educational Institute Management System",
      description: "A Java Swing-based EIMS ",
      image: eims,
      github: "https://github.com/Bavinduyeshan/Educational-Institute-Management-System.git",
    },
    {
        id: 4,
        title: "Railway Management System",
        description: "A C# winForms project created to manage railway system",
        image: railway2,
        github: "https://github.com/Bavinduyeshan/Railway-mangement-system.git",
      },
      {
        id: 5,
        title: "Chatbot",
        description: "A Python Chatbot Activated with voice ",
        image: chatbot,
        github: "https://github.com/Bavinduyeshan/Chatbot-with-Voice.git",
      },
     
      {
        id: 6,
        title: "Weather App",
        description: "A Weather app created using Python",
        image: weatherWEb,
        github: "https://github.com/Bavinduyeshan/Weather-App-Python.git",
      },
      {
        id: 7,
        title: "Chatbot",
        description: "A C# winforms  Chatbot   that made for hospital management system project",
        image: chatbotcshrape,
        github: "https://github.com/Bavinduyeshan/Chatbot_HMS.git",
      },
      {
        id: 8,
        title: "University Student Management System",
        description: "A C# winforms University Student Management System   that made for automate uni student managements",
        image: unist,
        github: "https://github.com/Bavinduyeshan/UniversityStudentManagementSystem.git",
      },
      {
        id: 9,
        title: "Flutter Weather App",
        description: "A simple weather app created using Flutter ",
        image: weatherf,
        github: "https://github.com/yourusername/library-management-system",
      },
    // Add more projects here
  ];

export default function Projects() {
  return (
     <section id="projects" className="py-16 ">
      <div  data-aos='fade-up' data-aos-delay='300' className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div  data-aos='fade-up' data-aos-delay='800' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div  data-aos='fade-up'  className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white font-semibold py-2 px-1 rounded hover:bg-blue-600"
                >
                  View Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
