import { Navigation } from "@/components/navigation"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <Navigation />
      <main className="container mx-auto px-6 md:px-8 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Contact</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 space-y-6">
              <h2 className="text-2xl font-semibold text-pink-300">Contactez-moi</h2>
              <div className="space-y-4">
                <a href="mailto:mohamedyahyalazar@gmail.com" className="flex items-center space-x-3 text-gray-200 hover:text-pink-300 transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>mohamedyahyalazar@gmail.com</span>
                </a>
                <a href="tel:+212691844523" className="flex items-center space-x-3 text-gray-200 hover:text-pink-300 transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>+212 691 844 523</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-200">
                  <MapPin className="h-5 w-5" />
                  <span>Maroc</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 space-y-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-200 mb-2">Nom</label>
                  <input type="text" className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-pink-500" />
                </div>
                <div>
                  <label className="block text-gray-200 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-pink-500" />
                </div>
                <div>
                  <label className="block text-gray-200 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-pink-500"></textarea>
                </div>
                <button className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}