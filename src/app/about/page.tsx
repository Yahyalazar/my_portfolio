"use client"
import { Navigation } from "@/components/navigation"
import { Briefcase, GraduationCap, User, Languages } from "lucide-react"
import { useInView } from 'react-intersection-observer'

export default function AboutPage() {
    const [experienceRef, experienceInView] = useInView({ threshold: 0.2, triggerOnce: true })
    const [educationRef, educationInView] = useInView({ threshold: 0.2, triggerOnce: true })
    const [skillsRef, skillsInView] = useInView({ threshold: 0.2, triggerOnce: true })

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
            <Navigation />
            <main className="container mx-auto px-6 md:px-8 lg:px-12 py-20">
                <section className="max-w-5xl mx-auto space-y-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-center animate-fade-in">À Propos de Moi</h1>

                    {/* Experience Section */}
                    <div 
                        ref={experienceRef}
                        className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-gray-200 space-y-6 border border-white/20 hover:bg-white/15 transition-all transform ${experienceInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-1000`}
                    >
                        <h2 className="text-3xl font-semibold text-pink-400 flex items-center gap-2">
                            <Briefcase className="w-8 h-8" />
                            Expérience Professionnelle
                        </h2>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-semibold text-white">SkillsnSmart - Développeur Frontend</h3>
                                    <span className="text-pink-400">Oct. 2024 - Avr. 2025</span>
                                </div>
                                <div className="text-gray-300">
                                    Projet : Sport Management (FRMF)
                                    <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                                        <li>Stack front-end : Next.js</li>
                                        <li>Back-end : Spring Boot (Java), MySQL</li>
                                        <li>Tests : Postman, Swagger</li>
                                        <li>Modules IA : Python</li>
                                        <li>Gestion : clubs, matchs, joueurs, blessures, arbitres, médecins, etc.</li>
                                    </ul>
                                </div>
                            </div>


                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-semibold text-white">IRMH | Développeur Full Stack</h3>
                                    <span className="text-pink-400">Avril 2024</span>
                                </div>
                                <div className="text-gray-300">
                                    <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                                        <li>Site de vente de caftans modernes</li>
                                        <li>Gestion des produits et tests d'API</li>
                                        <li>Développement d'une application CRUD de gestion des commandes avec export Excel</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Education Section */}
                    <div 
                        ref={educationRef}
                        className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-gray-200 space-y-6 border border-white/20 hover:bg-white/15 transition-all transform ${educationInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-1000 delay-200`}
                    >
                        <h2 className="text-3xl font-semibold text-pink-400 flex items-center gap-2">
                            <GraduationCap className="w-8 h-8" />
                            Éducation
                        </h2>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-semibold text-white">Diplôme en Développement Digital - Option Full Stack</h3>
                                    <span className="text-pink-400">2022 – 2024</span>
                                </div>
                                <div className="text-gray-300">
                                
                                    Office de Formation Professionnel et Promotion du Travail Settat
                                    <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                                        <li>Formation spécialisée front-end / back-end avec méthodes agiles</li>
                                        <li>Modélisation UML, cloud computing</li>
                                        <li>Projet : E GADGET - Site e-commerce pour produits électroniques (ReactJS, Laravel, MySQL)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-semibold text-white">Attestation Du Baccalauréat – Sciences Exprimentales</h3>
                                    <span className="text-pink-400">2021 – 2022</span>
                                </div>
                                <div className="text-gray-300">
                                    Institut Al oula Settat
                                    <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                                        <li>Filière Internationale des Sciences physiques</li>
                                        <li>Mention Passable</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div 
                        ref={skillsRef}
                        className={`grid md:grid-cols-2 gap-6 transition-all transform ${skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-1000 delay-400`}
                    >
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-gray-200 space-y-4 border border-white/20 hover:bg-white/15 transition-colors">
                            <h2 className="text-2xl font-semibold text-pink-400 flex items-center gap-2">
                                <User className="w-6 h-6" />
                                Personnalité
                            </h2>
                            <div className="grid grid-cols-2 gap-3">
                                <span className="px-4 py-2 bg-white/5 rounded-lg text-center">Passionné</span>
                                <span className="px-4 py-2 bg-white/5 rounded-lg text-center">Adaptable</span>
                                <span className="px-4 py-2 bg-white/5 rounded-lg text-center">Flexible</span>
                                <span className="px-4 py-2 bg-white/5 rounded-lg text-center">Organisé</span>
                                <span className="px-4 py-2 bg-white/5 rounded-lg text-center">Collaboratif</span>
                                <span className="px-4 py-2 bg-white/5 rounded-lg text-center">Calme</span>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-gray-200 space-y-4 border border-white/20 hover:bg-white/15 transition-colors">
                            <h2 className="text-2xl font-semibold text-pink-400 flex items-center gap-2">
                                <Languages className="w-6 h-6" />
                                Langues
                            </h2>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span>Arabe</span>
                                    <span className="text-pink-400">lu, parlé, écrit</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Français</span>
                                    <span className="text-pink-400">lu, parlé, écrit</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Anglais</span>
                                    <span className="text-pink-400">lu, parlé, écrit</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    )
}