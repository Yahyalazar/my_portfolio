"use client"

import { useTranslations } from "next-intl"
import { useInView } from "react-intersection-observer"
import { Navigation } from "@/components/navigation"
import { Briefcase, GraduationCap, User, Languages } from "lucide-react"

export default function AboutPage() {
    const t = useTranslations("about")

    const [experienceRef, experienceInView] = useInView({ threshold: 0.2, triggerOnce: true })
    const [educationRef, educationInView] = useInView({ threshold: 0.2, triggerOnce: true })
    const [skillsRef, skillsInView] = useInView({ threshold: 0.2, triggerOnce: true })

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
            <Navigation />
            <main className="container mx-auto px-6 md:px-8 lg:px-12 py-20">
                <section className="max-w-5xl mx-auto space-y-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-center animate-fade-in">
                        {t("title")}
                    </h1>

                    {/* Experience */}
                    <div
                        ref={experienceRef}
                        className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-gray-200 space-y-6 border border-white/20 hover:bg-white/15 transition-all transform ${experienceInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} duration-1000`}
                    >
                        <h2 className="text-3xl font-semibold text-pink-400 flex items-center gap-2">
                            <Briefcase className="w-8 h-8" />
                            {t("experienceTitle")}
                        </h2>

                        {[1, 2].map((index) => (
                            <div key={index} className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-semibold text-white">
                                        {t(`experience.job${index}.company`)} - {t(`experience.job${index}.position`)}
                                    </h3>
                                    <span className="text-pink-400">{t(`experience.job${index}.date`)}</span>
                                </div>
                                <div className="text-gray-300">
                                    {t(`experience.job${index}.description`)}
                                    <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                                        {t.raw(`experience.job${index}.tech`).map((tech: string, i: number) => (
                                            <li key={i}>{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Education */}
                    <div
                        ref={educationRef}
                        className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-gray-200 space-y-6 border border-white/20 hover:bg-white/15 transition-all transform ${educationInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} duration-1000 delay-200`}
                    >
                        <h2 className="text-3xl font-semibold text-pink-400 flex items-center gap-2">
                            <GraduationCap className="w-8 h-8" />
                            {t("educationTitle")}
                        </h2>

                        {[1, 2].map((index) => (
                            <div key={index} className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-semibold text-white">
                                        {t(`education.edu${index}.degree`)}
                                    </h3>
                                    <span className="text-pink-400">{t(`education.edu${index}.date`)}</span>
                                </div>
                                <div className="text-gray-300">
                                    {t(`education.edu${index}.institution`)}
                                    <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                                        <li>{t(`education.edu${index}.description`)}</li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Skills Section */}
                    <div
                        ref={skillsRef}
                        className={`grid md:grid-cols-2 gap-6 transition-all transform ${skillsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} duration-1000 delay-400`}
                    >
                        {/* Personality */}
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-gray-200 space-y-4 border border-white/20 hover:bg-white/15 transition-colors">
                            <h2 className="text-2xl font-semibold text-pink-400 flex items-center gap-2">
                                <User className="w-6 h-6" />
                                {t("personalityTitle")}
                            </h2>
                            <div className="grid grid-cols-2 gap-3">
                                {t.raw("personalityTraits").map((trait: string, i: number) => (
                                    <span key={i} className="px-4 py-2 bg-white/5 rounded-lg text-center">
                                        {trait}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-gray-200 space-y-4 border border-white/20 hover:bg-white/15 transition-colors">
                            <h2 className="text-2xl font-semibold text-pink-400 flex items-center gap-2">
                                <Languages className="w-6 h-6" />
                                {t("languagesTitle")}
                            </h2>
                            <div className="space-y-3">
                                {["arabic", "french", "english"].map((langKey, idx) => (
                                    <div key={idx} className="flex justify-between items-center">
                                        <span>{t(`languages.${langKey}`)}</span>
                                        <span className="text-pink-400">{t("languages.proficiency")}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
