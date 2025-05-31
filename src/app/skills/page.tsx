"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Wrench, Palette, Smartphone, Server, Layers, Zap } from "lucide-react"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
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

export default function SkillsPage() {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Code,
      color: "blue",
      description: "Technologies pour créer des interfaces utilisateur modernes et interactives",
      skills: [
        { name: "HTML5", level: 95, color: "orange" },
        { name: "CSS3", level: 90, color: "blue" },
        { name: "JavaScript", level: 88, color: "yellow" },
        { name: "TypeScript", level: 85, color: "blue" },
        { name: "React.js", level: 90, color: "cyan" },
        { name: "Next.js", level: 88, color: "gray" },
        { name: "Vue.js", level: 75, color: "green" },
        { name: "Tailwind CSS", level: 92, color: "teal" },
        { name: "Bootstrap", level: 85, color: "purple" },
        { name: "Sass/SCSS", level: 80, color: "pink" },
      ],
    },
    {
      category: "Backend Development",
      icon: Server,
      color: "green",
      description: "Développement côté serveur et gestion des bases de données",
      skills: [
        { name: "Node.js", level: 85, color: "green" },
        { name: "Express.js", level: 82, color: "gray" },
        { name: "PHP", level: 88, color: "purple" },
        { name: "Laravel", level: 90, color: "red" },
        { name: "Spring Boot", level: 78, color: "green" },
        { name: "Java", level: 80, color: "orange" },
        { name: "Python", level: 75, color: "blue" },
        { name: "API REST", level: 88, color: "teal" },
        { name: "GraphQL", level: 70, color: "pink" },
      ],
    },
    {
      category: "Base de Données",
      icon: Database,
      color: "purple",
      description: "Conception et gestion de bases de données relationnelles et NoSQL",
      skills: [
        { name: "MySQL", level: 90, color: "blue" },
        { name: "PostgreSQL", level: 82, color: "blue" },
        { name: "MongoDB", level: 78, color: "green" },
        { name: "Redis", level: 75, color: "red" },
        { name: "SQLite", level: 85, color: "gray" },
        { name: "Firebase", level: 80, color: "orange" },
        { name: "Prisma", level: 75, color: "purple" },
      ],
    },
    {
      category: "DevOps & Outils",
      icon: Wrench,
      color: "orange",
      description: "Outils de développement, déploiement et collaboration",
      skills: [
        { name: "Git", level: 92, color: "orange" },
        { name: "GitHub", level: 90, color: "gray" },
        { name: "Docker", level: 78, color: "blue" },
        { name: "AWS", level: 75, color: "orange" },
        { name: "Vercel", level: 88, color: "gray" },
        { name: "Netlify", level: 85, color: "teal" },
        { name: "Linux", level: 80, color: "yellow" },
        { name: "Nginx", level: 75, color: "green" },
      ],
    },
    {
      category: "Design & UI/UX",
      icon: Palette,
      color: "pink",
      description: "Conception d'interfaces et expérience utilisateur",
      skills: [
        { name: "Figma", level: 88, color: "purple" },
        { name: "Adobe XD", level: 80, color: "pink" },
        { name: "Photoshop", level: 75, color: "blue" },
        { name: "Illustrator", level: 70, color: "orange" },
        { name: "UI Design", level: 85, color: "purple" },
        { name: "UX Research", level: 78, color: "teal" },
        { name: "Prototyping", level: 82, color: "green" },
      ],
    },
    {
      category: "Mobile & Cross-Platform",
      icon: Smartphone,
      color: "teal",
      description: "Développement d'applications mobiles et multiplateformes",
      skills: [
        { name: "React Native", level: 80, color: "cyan" },
        { name: "Flutter", level: 70, color: "blue" },
        { name: "Ionic", level: 75, color: "blue" },
        { name: "PWA", level: 85, color: "purple" },
        { name: "Cordova", level: 70, color: "gray" },
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
            Technologies & Compétences
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Mes Compétences
          </motion.h1>

          <motion.p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" variants={fadeInUp}>
            Découvrez les technologies et outils que je maîtrise pour créer des solutions web modernes et performantes.
            Chaque compétence représente des années d'apprentissage et de pratique.
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
                      <h2 className="text-2xl font-bold text-white mb-2">{category.category}</h2>
                      <p className="text-gray-400 text-sm">{category.description}</p>
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
              <h3 className="text-3xl font-bold text-white mb-4">Statistiques de Compétences</h3>
              <p className="text-gray-300 text-lg">Un aperçu de mon expertise technique</p>
            </div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: Code, label: "Langages", value: "15+", color: "blue" },
                { icon: Layers, label: "Frameworks", value: "20+", color: "purple" },
                { icon: Database, label: "Bases de Données", value: "7+", color: "green" },
                { icon: Wrench, label: "Outils", value: "25+", color: "orange" },
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
            <h3 className="text-3xl font-bold text-white mb-4">Toujours en Apprentissage</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Le monde de la technologie évolue rapidement. Je reste constamment à jour avec les dernières tendances et
              technologies pour offrir les meilleures solutions à mes clients.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["AI/ML", "Web3", "Microservices", "Cloud Computing", "DevOps"].map((tech, index) => (
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
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </main>
    </div>
  )
}
