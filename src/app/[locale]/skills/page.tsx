"use client"
import type React from "react"
import { Navigation } from "@/components/navigation"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Code,
  Database,
  Wrench,
  Palette,
  Smartphone,
  Server,
  Layers,
  Zap,
} from "lucide-react"

// Assume this is your i18n hook or context selector
import { useTranslations } from "next-intl" // Or your own translation hook/context

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
      staggerChildren: 0.1,
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
const skillItemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

function AnimatedSection({
  children,
  className = "",
  variant = fadeInUp,
}: {
  children: React.ReactNode
  className?: string
  variant?: any
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variant}
      className={`${className} mb-10`}
    >
      {children}
    </motion.div>
  )
}

export default function SkillsPage() {
  const t = useTranslations("skills") // Get translations under 'skills' namespace

  const skillCategories = [
    {
      category: t("frontendDevelopment.title"),
      icon: Code,
      color: "blue",
      description: t("frontendDevelopment.subtitle"),
      skills: [
        { name: t("frontendDevelopment.skills.HTML5"), level: 95, color: "orange" },
        { name: t("frontendDevelopment.skills.CSS3"), level: 90, color: "blue" },
        { name: t("frontendDevelopment.skills.JavaScript"), level: 88, color: "yellow" },
        { name: t("frontendDevelopment.skills.TypeScript"), level: 85, color: "blue" },
        { name: t("frontendDevelopment.skills.React_js"), level: 90, color: "cyan" },
        { name: t("frontendDevelopment.skills.Next_js"), level: 88, color: "gray" },
        { name: t("frontendDevelopment.skills.Vue_js"), level: 75, color: "green" },
        { name: t("frontendDevelopment.skills.Tailwind_CSS"), level: 92, color: "teal" },
        { name: t("frontendDevelopment.skills.Bootstrap"), level: 85, color: "purple" },
        { name: t("frontendDevelopment.skills.Sass/SCSS"), level: 80, color: "pink" },
      ],
    },
    {
      category: t("backendDevelopment.title"),
      icon: Server,
      color: "green",
      description: t("backendDevelopment.subtitle"),
      skills: [
        { name: t("backendDevelopment.skills.Node_js"), level: 85, color: "green" },
        { name: t("backendDevelopment.skills.Express_js"), level: 82, color: "gray" },
        { name: t("backendDevelopment.skills.PHP"), level: 88, color: "purple" },
        { name: t("backendDevelopment.skills.Laravel"), level: 90, color: "red" },
        { name: t("backendDevelopment.skills.Spring_Boot"), level: 78, color: "green" },
        { name: t("backendDevelopment.skills.Java"), level: 80, color: "orange" },
        { name: t("backendDevelopment.skills.Python"), level: 75, color: "blue" },
        { name: t("backendDevelopment.skills.API_REST"), level: 88, color: "teal" },
        { name: t("backendDevelopment.skills.GraphQL"), level: 70, color: "pink" },
      ],
    },
    {
      category: t("database.title"),
      icon: Database,
      color: "purple",
      description: t("database.subtitle"),
      skills: [
        { name: t("database.skills.MySQL"), level: 90, color: "blue" },
        { name: t("database.skills.PostgreSQL"), level: 82, color: "blue" },
        { name: t("database.skills.MongoDB"), level: 78, color: "green" },
        { name: t("database.skills.Redis"), level: 75, color: "red" },
        { name: t("database.skills.SQLite"), level: 85, color: "gray" },
        { name: t("database.skills.Elasticsearch"), level: 70, color: "pink" },
        { name: t("database.skills.Firebase"), level: 80, color: "orange" },
      ],
    },
    {
      category: t("devOpsAndTools.title"),
      icon: Wrench,
      color: "orange",
      description: t("devOpsAndTools.subtitle"),
      skills: [
        { name: t("devOpsAndTools.skills.Git"), level: 92, color: "orange" },
        { name: t("devOpsAndTools.skills.GitHub_Actions"), level: 90, color: "gray" },
        { name: t("devOpsAndTools.skills.Docker"), level: 85, color: "blue" },
        { name: t("devOpsAndTools.skills.AWS_CLI"), level: 80, color: "orange" },
        { name: t("devOpsAndTools.skills.Jenkins"), level: 75, color: "gray" },
        { name: t("devOpsAndTools.skills.Nginx"), level: 78, color: "green" },
        { name: t("devOpsAndTools.skills.Linux"), level: 85, color: "yellow" },
        { name: t("devOpsAndTools.skills.Terraform"), level: 75, color: "teal" },
      ],
    },
    {
      category: t("designAndUiUx.title"),
      icon: Palette,
      color: "pink",
      description: t("designAndUiUx.subtitle"),
      skills: [
        { name: t("designAndUiUx.skills.Figma"), level: 90, color: "purple" },
        { name: t("designAndUiUx.skills.Adobe_XD"), level: 80, color: "pink" },
        { name: t("designAndUiUx.skills.Photoshop"), level: 85, color: "blue" },
        { name: t("designAndUiUx.skills.Illustrator"), level: 75, color: "orange" },
        { name: t("designAndUiUx.skills.UI_Design"), level: 88, color: "purple" },
        { name: t("designAndUiUx.skills.UX_Research"), level: 82, color: "teal" },
        { name: t("designAndUiUx.skills.Prototyping"), level: 80, color: "green" },
      ],
    },
    {
      category: t("mobileAndCrossPlatform.title"),
      icon: Smartphone,
      color: "teal",
      description: t("mobileAndCrossPlatform.subtitle"),
      skills: [
        { name: t("mobileAndCrossPlatform.skills.React_Native"), level: 85, color: "cyan" },
        { name: t("mobileAndCrossPlatform.skills.Flutter"), level: 80, color: "blue" },
        { name: t("mobileAndCrossPlatform.skills.Ionic"), level: 75, color: "blue" },
        { name: t("mobileAndCrossPlatform.skills.PWA"), level: 88, color: "purple" },
        { name: t("mobileAndCrossPlatform.skills.Cordova"), level: 70, color: "gray" },
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600",
      pink: "from-pink-500 to-pink-600",
      teal: "from-teal-500 to-teal-600",
      red: "from-red-500 to-red-600",
      yellow: "from-yellow-500 to-yellow-600",
      cyan: "from-cyan-500 to-cyan-600",
      gray: "from-gray-500 to-gray-600",
    }
    return colorMap[color as keyof typeof colorMap] || "from-gray-500 to-gray-600"
  }

  const getSkillColor = (color: string) => {
    const colorMap = {
      blue: "bg-blue-500",
      green: "bg-green-500",
      purple: "bg-purple-500",
      orange: "bg-orange-500",
      pink: "bg-pink-500",
      teal: "bg-teal-500",
      red: "bg-red-500",
      yellow: "bg-yellow-500",
      cyan: "bg-cyan-500",
      gray: "bg-gray-500",
    }
    return colorMap[color as keyof typeof colorMap] || "bg-gray-500"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <Navigation />

      <main className="container mx-auto px-6 md:px-8 lg:px-12 py-20 relative">
        {/* Hero Section */}
        <AnimatedSection className="text-center mb-20">
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium text-white border border-white/20 mb-8"
            variants={fadeInUp}
          >
            <motion.span
              className="w-2 h-2 bg-emerald-400 rounded-full mr-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            {t("title")}
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            {t("titre1")}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            {t("description")}
          </motion.p>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {skillCategories.map((category, index) => (
              <AnimatedSection key={index} variant={fadeInUp} className="group">
                <motion.div
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 h-full"
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <motion.div
                      className={`p-4 bg-gradient-to-br ${getColorClasses(category.color)} rounded-2xl mr-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <category.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <div>
                      <h2 className="text-arabic text-2xl font-bold text-white mb-2">{category.category}</h2>
                      <p className=" text-arabic text-gray-400 text-sm">{category.description}</p>
                    </div>
                  </div>
                  {/* Skills List */}
                  <motion.div
                    className="space-y-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div key={skillIndex} variants={skillItemVariant} className="group/skill">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-200 font-medium">{skill.name}</span>
                          <span className="text-gray-400 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full ${getSkillColor(skill.color)} rounded-full relative`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-white/20 rounded-full"
                              animate={{
                                x: ["-100%", "100%"],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                              }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <AnimatedSection className="mt-20">
          <motion.div
            className="bg-gradient-to-r from-pink-500/10 to-purple-600/10 backdrop-blur-sm p-12 rounded-3xl border border-white/20"
            variants={fadeInUp}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">{t("statistics.title")}</h3>
              <p className="text-gray-300 text-lg">{t("statistics.subtitle")}</p>
            </div>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: Code, label: t("statistics.languages.value"), value: "15+", color: "blue" },
                { icon: Layers, label: t("statistics.frameworks.value"), value: "20+", color: "purple" },
                { icon: Database, label: t("statistics.databases.value"), value: "7+", color: "green" },
                { icon: Wrench, label: t("statistics.tools.value"), value: "25+", color: "orange" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className={`inline-flex p-4 bg-gradient-to-br ${getColorClasses(stat.color)} rounded-2xl mb-4`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <motion.p
                    className="text-3xl font-bold text-white mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatedSection>

        {/* Learning Section */}
        <AnimatedSection className="mt-20">
          <motion.div
            className="text-center bg-white/5 backdrop-blur-sm p-12 rounded-3xl border border-white/10"
            variants={fadeInUp}
          >
            <motion.div
              className="inline-flex p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Zap className="h-8 w-8 text-white" />
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-4">{t("learning.title")}</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              {t("learning.description")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[t("learning.tech.AI/ML"), t("learning.tech.Web3"), t("learning.tech.Microservices"), t("learning.tech.Cloud Computing"), t("learning.tech.DevOps")].map(
                (tech, index) => (
                  <motion.span
                    key={index}
                    className="px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 border border-emerald-500/30 rounded-full text-emerald-300 font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </AnimatedSection>
      </main>
    </div>
  )
}