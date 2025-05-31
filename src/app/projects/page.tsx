import { Navigation } from "@/components/navigation"
import Image from "next/image"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Project 1",
      description: "Description du projet 1",
      technologies: ["Next.js", "React", "TailwindCSS"],
      image: "/images/project1.jpg"
    },
    // Add more projects
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <Navigation />
      <main className="container mx-auto px-6 md:px-8 lg:px-12 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Mes Projets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-pink-500/20 rounded-full text-pink-300 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}