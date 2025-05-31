import { Navigation } from "./navigation"
import { Download, Github, Linkedin, Mail, Phone, MapPin, Calendar, Code, Database, Wrench } from "lucide-react"
import Image from 'next/image'

export default function PortfolioNavigation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <main className="container mx-auto px-6 md:px-8 lg:px-12 py-20 relative">
        <section className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8 text-left animate-slide-in-left lg:pl-4">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium text-white border border-white/20">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              Disponible pour de nouveaux projets
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Mohamed Yahya Lazar
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-purple-200">Développeur Full Stack Web</p>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Passionné par les technologies modernes, je développe des applications web performantes et intuitives.
              Spécialisé en <span className="text-pink-300 font-semibold">Next.js</span>,
              <span className="text-pink-300 font-semibold"> ReactJS</span>,
              <span className="text-pink-300 font-semibold"> Laravel</span> et
              <span className="text-pink-300 font-semibold"> MySQL</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
               <a href="/projects">Découvrir Mes Projets</a> 
              </button>
              <a
                href="/cv-mohammed-yahya-lazar.pdf"
                download="CV-Mohammed-Yahya-Lazar.pdf"
                className="px-8 py-4 border-2 border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center group text-white"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Télécharger CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              {[
                { icon: Github, href: "https://github.com/Yahyalazar" },
                { icon: Linkedin, href: "https://linkedin.com/in/med-yahya-lazar" },
                { icon: Mail, href: "mailto:mohamedyahyalazar@gmail.com" },
                { icon: Phone, href: "tel:+212691844523" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 text-white transition-all duration-300 group"
                >
                  <social.icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] mt-8 lg:mt-0 animate-slide-in-right lg:pr-4">
            <Image
              src="/images/coding.png"
              alt="Developer Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </section>

        {/* Experience Section */}
        <section className="mt-32 space-y-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Expérience Professionnelle</h2>
            <p className="text-gray-300 text-lg">Mon parcours dans le développement web</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "SkillsnSmart - Développeur Frontend",
                date: "Oct. 2024 - Avr. 2025",
                description: "Développement de la plateforme Sport Management pour la FRMF.",
                tech: ["Next.js", "Spring Boot", "MySQL", "Java"],
                icon: Code,
                iconBg: "pink"
              },
              {
                title: "IRMH - Développeur Full Stack",
                date: "Avril 2024",
                description: "Développement d'un site e-commerce pour la vente de caftans modernes.",
                tech: ["Laravel", "PHP", "MySQL", "CRUD"],
                icon: Database,
                iconBg: "purple"
              }
            ].map((job, index) => (
              <div key={index} className="group p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 bg-${job.iconBg}-500/20 rounded-xl`}>
                    <job.icon className={`h-6 w-6 text-${job.iconBg}-400`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-white mb-2">{job.title}</h3>
                    <div className="flex items-center text-gray-400 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{job.date}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 text-purple-200 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-32 space-y-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Compétences Techniques</h2>
            <p className="text-gray-300 text-lg">Technologies que je maîtrise</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                icon: Code,
                color: "blue",
                skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "ReactJS", "Next.js", "Tailwind CSS", "Bootstrap"]
              },
              {
                title: "Backend",
                icon: Database,
                color: "green",
                skills: ["PHP", "Laravel", "Node.js", "MySQL", "MongoDB", "SQL", "API REST", "Spring Boot"]
              },
              {
                title: "Outils",
                icon: Wrench,
                color: "purple",
                skills: ["Git", "Docker", "AWS", "Figma", "VS Code", "IntelliJ", "Postman", "Swagger"]
              }
            ].map((category, index) => (
              <div key={index} className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-${category.color}-500/20 rounded-xl mr-4`}>
                    <category.icon className={`h-6 w-6 text-${category.color}-400`} />
                  </div>
                  <h3 className="font-bold text-xl text-white">{category.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="p-3 bg-white/5 rounded-lg text-center text-sm font-medium text-gray-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-32">
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-600/10 backdrop-blur-sm p-12 rounded-3xl border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">Restons en Contact</h2>
              <p className="text-gray-300 text-lg">
                N'hésitez pas à me contacter pour discuter de vos projets
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Phone,
                  title: "Téléphone",
                  value: "+212 06 91 84 45 23",
                  href: "tel:+212691844523"
                },
                {
                  icon: Mail,
                  title: "Email",
                  value: "mohamedyahyalazar@gmail.com",
                  href: "mailto:mohamedyahyalazar@gmail.com"
                },
                {
                  icon: Github,
                  title: "GitHub",
                  value: "github.com/Yahyalazar",
                  href: "https://github.com/Yahyalazar"
                },
                {
                  icon: MapPin,
                  title: "Localisation",
                  value: "Settat - Casablanca, Maroc",
                  href: "#"
                }
              ].map((contact, index) => (
                <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:shadow-lg transition-all duration-300">
                  <contact.icon className="h-8 w-8 text-pink-400 mx-auto mb-3" />
                  <p className="font-semibold text-white mb-1">{contact.title}</p>
                  <a
                    href={contact.href}
                    className="text-gray-300 hover:text-pink-300 transition-colors text-sm"
                  >
                    {contact.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 border-t border-white/20 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Mohamed Yahya Lazar. Tous droits réservés.
              </div>
              <div className="flex space-x-6">
                {[
                  { label: "GitHub", href: "https://github.com/Yahyalazar" },
                  { label: "LinkedIn", href: "https://linkedin.com/in/med-yahya-lazar" },
                  { label: "Contact", href: "mailto:mohamedyahyalazar@gmail.com" }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-pink-300 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
