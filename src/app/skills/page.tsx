import { Navigation } from "@/components/navigation"

export default function SkillsPage() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TailwindCSS", "TypeScript"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Laravel", "Express", "MySQL"]
    },
    {
      category: "Outils",
      items: ["Git", "Docker", "VS Code", "Figma"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <Navigation />
      <main className="container mx-auto px-6 md:px-8 lg:px-12 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Compétences</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-pink-300">{skillGroup.category}</h2>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 rounded-xl text-gray-200 hover:bg-pink-500/20 hover:text-pink-300 transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}