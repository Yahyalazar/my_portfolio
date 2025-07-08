"use client"
import type React from "react"
import { Navigation } from "@/components/navigation"
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
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
  variant?: any;
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

export default function ContactPage() {
  const t = useTranslations("contact")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      const response = await fetch('https://formspree.io/f/mrbkzdbq ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: t("info.email"),
      value: "mohamedyahyalazar@gmail.com",
      href: "mailto:mohamedyahyalazar@gmail.com",
      description: t("emailDescription"),
    },
    {
      icon: Phone,
      title: t("info.phone"),
      value: "+212 691 844 523",
      href: "tel:+212691844523",
      description: t("phoneDescription"),
    },
    {
      icon: MapPin,
      title: t("info.location"),
      value: "Settat - Casablanca, Maroc",
      href: "#",
      description: t("locationDescription"),
    },
    {
      icon: Clock,
      title: t("info.availability"),
      value: "Lun - Ven, 9h - 18h",
      href: "#",
      description: t("availabilityDescription"),
    },
  ]

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
            {t("availableForProjects")}
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            {t("title")}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            {t("description")}
          </motion.p>
        </AnimatedSection>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Contact Info & Illustration */}
            <AnimatedSection className="space-y-8" variant={fadeInUp}>
              <div className="space-y-8">
                {/* Contact Illustration */}
                <motion.div
                  className="relative h-80 mb-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 1, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="relative h-64">
                      <Image
                        src="/images/contact-illustration.png"
                        alt="Contact Illustration"
                        fill
                        className="object-contain"
                        priority
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Contact Information Cards */}
                <motion.div className="space-y-6" variants={staggerContainer} initial="hidden" animate="visible">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.href}
                      variants={scaleIn}
                      className="block p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group"
                      whileHover={{
                        scale: 1.02,
                        y: -5,
                        boxShadow: "0 20px 40px rgba(236, 72, 153, 0.2)",
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="flex items-start space-x-4">
                        <motion.div
                          className="p-3 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <contact.icon className="h-6 w-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white text-lg mb-1">{contact.title}</h3>
                          <p className="text-gray-300 mb-2">{contact.value}</p>
                          <p className="text-sm text-gray-400">{contact.description}</p>
                        </div>
                        <motion.div
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ x: 5 }}
                        >
                          <Send className="h-5 w-5 text-pink-400" />
                        </motion.div>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  className="grid grid-cols-2 gap-4 mt-8"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {[
                    { icon: MessageCircle, label: t("quickResponse"), value: "< 24h" },
                    { icon: Star, label: t("satisfaction"), value: "100%" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <stat.icon className="h-8 w-8 text-pink-400 mx-auto mb-2" />
                      </motion.div>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Right Column - Contact Form */}
            <AnimatedSection className="space-y-8" variant={fadeInUp}>
              <motion.div
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
                whileHover={{ boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">{t("sendMessageTitle")}</h2>
                  <p className="text-gray-300">
                    {t("sendMessageDescription")}
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t("form.name")}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-lg"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t("form.email")}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-lg"
                    />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={t("form.subject")}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-lg"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t("form.message")}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-lg resize-none"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>{t("form.sending")}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>{t("form.sendButton")}</span>
                      </>
                    )}
                  </button>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200"
                    >
                      {t("messageSentSuccess")}
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200"
                    >
                      {t("messageSentError")}
                    </motion.div>
                  )}
                </form>

                {/* Additional Info */}
                <motion.div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10" variants={fadeInUp}>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Globe className="h-5 w-5 text-pink-400" />
                    <span className="text-sm">
                      {t("responseTimeInfo")}
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              <div className="relative h-96 w-full flex gap-4">
                <motion.div 
                  className="relative w-1/2 h-full"
                  variants={fadeInLeft}
                  initial="hidden"
                  animate="visible"
                >
                  <Image
                    src="/images/contact-illustration.png"
                    alt="Contact Illustration"
                    fill
                    className="object-contain object-left"
                    priority
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
                <motion.div 
                  className="relative w-1/2 h-full"
                  variants={fadeInRight}
                  initial="hidden"
                  animate="visible"
                >
                  <Image
                    src="/images/coding.png"
                    alt="Coding Illustration"
                    fill
                    className="object-contain object-right"
                    priority
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Call to Action Section */}
        <AnimatedSection className="mt-20">
          <motion.div
            className="text-center bg-gradient-to-r from-pink-500/10 to-purple-600/10 backdrop-blur-sm p-12 rounded-3xl border border-white/20"
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-bold text-white mb-4">{t("callToActionTitle")}</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              {t("callToActionDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+212691844523"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold inline-flex items-center justify-center space-x-2"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Phone className="h-5 w-5" />
                <span>{t("callNowButton")}</span>
              </motion.a>
              <motion.a
                href="mailto:mohamedyahyalazar@gmail.com"
                className="px-8 py-4 border-2 border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 inline-flex items-center justify-center space-x-2"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Mail className="h-5 w-5" />
                <span>{t("emailMeButton")}</span>
              </motion.a>
            </div>
          </motion.div>
        </AnimatedSection>
      </main>
    </div>
  )
}