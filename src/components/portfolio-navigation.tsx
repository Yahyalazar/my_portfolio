"use client"
import { Navigation } from "./navigation"
import { Download, Github, Linkedin, Mail, Phone, MapPin, Calendar, Code, Database, Wrench } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { useTranslations } from "next-intl"

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
  variant = fadeInUp 
}: {
  children: React.ReactNode;
  className?: string;
  variant?: typeof fadeInUp;
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

export default function PortfolioNavigation() {
  const t = useTranslations('home'); // Use translations for the 'home' namespace

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      <Navigation />
      {/* Hero Section */}
      <main className="container mx-auto px-6 md:px-8 lg:px-12 py-20 relative">
        <section className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-1/2 space-y-8 text-left lg:pl-4"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium text-white border border-white/20"
            >
              <motion.span
                className="w-2 h-2 bg-emerald-400 rounded-full mr-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              {t("active")}
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
            >
              {t('title')}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-2xl md:text-3xl font-semibold text-purple-200">
              {t('subtitle')}
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              {t("description")} <span className="text-pink-300 font-semibold">Next.js</span>,
              <span className="text-pink-300 font-semibold">ReactJS</span>,
              <span className="text-pink-300 font-semibold">Laravel</span> et
              <span className="text-pink-300 font-semibold">MySQL</span>.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <a href="/projects">{t('projectsButton')}</a>
              </motion.button>
              <motion.a
                href="/cv_yahya.pdf"
                download="CV-Mohammed-Yahya-Lazar.pdf"
                className="px-8 py-4 border-2 border-white/20 rounded-xl font-semibold inline-flex items-center justify-center group text-white"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Download className="mr-2 h-5 w-5" />
                </motion.div>
                {t('downloadCV')}
              </motion.a>
            </motion.div>
            {/* Social Links */}
            <motion.div variants={fadeInUp} className="flex space-x-6 pt-4">
              {[
                { icon: Github, href: "https://github.com/Yahyalazar"  },
                { icon: Linkedin, href: "https://linkedin.com/in/med-yahya-lazar"  },
                { icon: Mail, href: "mailto:mohamedyahyalazar@gmail.com" },
                { icon: Phone, href: "tel:+212691844523" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-xl text-white"
                  whileHover={{
                    scale: 1.1,
                    background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
                    rotate: 5,
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          {/* Right Image */}
          <motion.div 
            className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] mt-8 lg:mt-0 lg:pr-4"
            initial={{ opacity: 0, x: 100 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: [0, -15, 0],
            }}
            transition={{
              duration: 2,
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <Image
              src="/images/coding.png"
              alt="Developer Illustration"
              fill
              className="object-contain"
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </section>
        {/* Experience Section */}
        <AnimatedSection className="mt-32 space-y-16">
          <motion.div className="text-center" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-4 text-white">{t('experienceTitle')}</h2>
            <p className="text-gray-300 text-lg">{t('experienceSubtitle')}</p>
          </motion.div>
          <motion.div
            className="grid lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                title: t('experienceJobs.job1.title'),
                date: t('experienceJobs.job1.date'),
                description: t('experienceJobs.job1.description'),
                tech: ["Next.js", "Spring Boot", "MySQL", "Java"],
                icon: Code,
                iconBg: "pink",
              },
              {
                title: t('experienceJobs.job2.title'),
                date: t('experienceJobs.job2.date'),
                description: t('experienceJobs.job2.description'),
                tech: ["Laravel", "PHP", "MySQL", "CRUD"],
                icon: Database,
                iconBg: "purple",
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="group p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                whileHover={{
                  scale: 1.02,
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className={`p-3 bg-${job.iconBg}-500/20 rounded-xl`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <job.icon className={`h-6 w-6 text-${job.iconBg}-400`} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-white mb-2">{job.title}</h3>
                    <div className="flex items-center text-gray-400 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{job.date}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-white/10 text-purple-200 text-xs font-medium rounded-full"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
        {/* Skills Section */}
        <AnimatedSection className="mt-32 space-y-16">
          <motion.div className="text-center" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-4 text-white">{t('skillsTitle')}</h2>
            <p className="text-gray-300 text-lg">{t('skillsSubtitle')}</p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                title: t('skillsCategories.frontend'),
                icon: Code,
                color: "blue",
                skills: [
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "TypeScript",
                  "ReactJS",
                  "Next.js",
                  "Tailwind CSS",
                  "Bootstrap",
                ],
              },
              {
                title: t('skillsCategories.backend'),
                icon: Database,
                color: "green",
                skills: ["PHP", "Laravel", "Node.js", "MySQL", "MongoDB", "SQL", "API REST", "Spring Boot"],
              },
              {
                title: t('skillsCategories.tools'),
                icon: Wrench,
                color: "purple",
                skills: ["Git", "Docker", "AWS", "Figma", "VS Code", "IntelliJ", "Postman", "Swagger"],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    className={`p-3 bg-${category.color}-500/20 rounded-xl mr-4`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <category.icon className={`h-6 w-6 text-${category.color}-400`} />
                  </motion.div>
                  <h3 className="font-bold text-xl text-white">{category.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="p-3 bg-white/5 rounded-lg text-center text-sm font-medium text-gray-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      whileHover={{
                        background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
                        color: "#ffffff",
                        scale: 1.05,
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
        {/* Contact Section */}
        <AnimatedSection className="mt-32">
          <motion.div
            className="bg-gradient-to-r from-pink-500/10 to-purple-600/10 backdrop-blur-sm p-12 rounded-3xl border border-white/20"
            variants={fadeInUp}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-white">{t('contactTitle')}</h2>
              <p className="text-gray-300 text-lg">{t('contactSubtitle')}</p>
            </div>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: Phone,
                  title: t('contactInfo.phone.label'),
                  value: t('contactInfo.phone.value'),
                  href: "tel:+212691844523",
                },
                {
                  icon: Mail,
                  title: t('contactInfo.email.label'),
                  value: t('contactInfo.email.value'),
                  href: "mailto:mohamedyahyalazar@gmail.com",
                },
                {
                  icon: Github,
                  title: t('contactInfo.github.label'),
                  value: t('contactInfo.github.value'),
                  href: "https://github.com/Yahyalazar", 
                },
                {
                  icon: MapPin,
                  title: t('contactInfo.location.label'),
                  value: t('contactInfo.location.value'),
                  href: "#",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 15px 30px rgba(236, 72, 153, 0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <contact.icon className="h-8 w-8 text-pink-400 mx-auto mb-3" />
                  </motion.div>
                  <p className="font-semibold text-white mb-1">{contact.title}</p>
                  <a href={contact.href} className="text-gray-300 hover:text-pink-300 transition-colors text-sm">
                    {contact.value}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatedSection>
        {/* Footer */}
      </main>
    </div>
  )
}