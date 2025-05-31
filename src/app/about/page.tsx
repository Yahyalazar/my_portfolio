import { Navigation } from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <Navigation />
      <main className="container mx-auto px-6 md:px-8 lg:px-12 py-20">
        <section className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">À Propos de Moi</h1>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 text-gray-200 space-y-6">
            <p className="text-lg leading-relaxed">
              Passionné par le développement web depuis plusieurs années, je suis spécialisé dans la création d'applications web modernes et performantes.
            </p>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-pink-300">Formation</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Diplôme d'Ingénieur en Informatique</li>
                <li>Certifications en développement web</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}