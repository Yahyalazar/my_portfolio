"use client"

import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const AnimatedSection = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={className}
  >
    {children}
  </motion.div>
)

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      <AnimatedSection className="py-10">
        <div className="container mx-auto px-4">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center mb-8">
            <motion.div
              className="h-12 w-12 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg mb-4"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                boxShadow: "0 10px 30px rgba(236, 72, 153, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="text-white font-bold text-lg">MYL</span>
            </motion.div>
            <p className="text-gray-300 text-sm text-center max-w-md">
              Transformer des idées en expériences numériques élégantes avec des technologies web modernes
            </p>
          </div>
          
          {/* Links and copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 border-t border-white/20 pt-6">
            <div className="text-gray-300 text-sm flex items-center">
              © {new Date().getFullYear()} Mohamed Yahya Lazar. Fait avec
              <motion.div 
                whileHover={{ scale: 1.2 }}
                className="mx-1"
              >
                <Heart className="w-4 h-4 text-pink-500 inline" />
              </motion.div>
            </div>
            <div className="flex space-x-6">
              {[
                { label: "GitHub", href: "https://github.com/Yahyalazar", icon: <Github className="w-5 h-5" /> },
                { label: "LinkedIn", href: "https://linkedin.com/in/med-yahya-lazar", icon: <Linkedin className="w-5 h-5" /> },
                { label: "Contact", href: "mailto:mohamedyahyalazar@gmail.com", icon: <Mail className="w-5 h-5" /> },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pink-300 transition-colors flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="text-pink-400 group-hover:text-pink-300"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {link.icon}
                  </motion.div>
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  )
}