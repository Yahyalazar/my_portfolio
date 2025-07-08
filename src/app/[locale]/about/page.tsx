"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Navigation } from "@/components/navigation"
import { Download, Briefcase, GraduationCap, Languages, Brain, Calendar } from "lucide-react"
import { useRef } from "react"
import { useInView } from "framer-motion"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

function AnimatedSection({
  children,
  className = "",
  variant = fadeInUp,
}: {
  children: React.ReactNode
  className?: string
  variant?: typeof fadeInUp
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variant}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  const t = useTranslations("about") // Use translations for the 'about' namespace

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      <Navigation />

      <main className="container mx-auto px-6 md:px-8 lg:px-12 py-20 relative">
        {/* Page Title */}
        <AnimatedSection className="text-center mb-16">
          <motion.div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium text-white border border-white/20 mb-6">
            <motion.span
              className="w-2 h-2 bg-emerald-400 rounded-full mr-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            {t("subtitle")}
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            {t("title")}
          </h1>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-pink-500/20 rounded-xl">
              <Briefcase className="h-6 w-6 text-pink-400" />
            </div>
            <h2 className="text-3xl font-bold text-pink-400">{t("experienceTitle")}</h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {(
              Object.values(t.raw("experience")) as Array<{
                company: string
                position: string
                date: string
                description: string
                tech?: string[]
              }>
            ).map((job, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 group"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                    {job.position}
                  </h3>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{job.date}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{job.company}</p>
                <p className="text-gray-400 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tech && Array.isArray(job.tech)
                    ? job.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-500/20 text-purple-200 text-xs font-medium rounded-full"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(236, 72, 153, 0.3)" }}
                        >
                          {tech}
                        </motion.span>
                      ))
                    : null}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Education Section */}
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-purple-500/20 rounded-xl">
              <GraduationCap className="h-6 w-6 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-purple-400">{t("educationTitle")}</h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {(
              Object.values(t.raw("education")) as Array<{
                degree: string
                institution: string
                date: string
                description: string
                project: string
              }>
            ).map((edu, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 group"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{edu.date}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{edu.institution}</p>
                <p className="text-gray-400 mb-4">{edu.description}</p>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="font-semibold text-purple-300">Project:</span>
                  <span>{edu.project || "N/A"}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Languages and Personality Section */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Languages */}
            <motion.div
              variants={scaleIn}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <Languages className="h-6 w-6 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-blue-400">{t("languagesTitle")}</h2>
              </div>

              <div className="space-y-4">
                {[
                  { lang: t("languages.arabic"), level: t("languages.proficiency") },
                  { lang: t("languages.french"), level: t("languages.proficiency") },
                  { lang: t("languages.english"), level: t("languages.proficiency") },
                ].map((language, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <span className="text-white">{language.lang}</span>
                    <span className="text-pink-400 font-medium">{language.level}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Personality */}
            <motion.div
              variants={scaleIn}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <Brain className="h-6 w-6 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-green-400">{t("personalityTitle")}</h2>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {(t.raw("personalityTraits") as string[]).map((trait, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 hover:from-purple-500/50 hover:to-pink-500/50 text-white px-4 py-2 rounded-full text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    /* transition={{ delay: index * 0.1 }} */
                  >
                    {trait}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Download CV Button */}
        <AnimatedSection className="mt-16 text-center">
          <motion.a
            href="/cv_yahya.pdf"
            download="CV-Mohammed-Yahya-Lazar.pdf"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div animate={{ y: [0, -2, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <Download className="mr-2 h-5 w-5" />
            </motion.div>
            downloadCV
          </motion.a>
        </AnimatedSection>
      </main>
    </div>
  )
}
