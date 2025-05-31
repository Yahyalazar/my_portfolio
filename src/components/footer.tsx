"use client"

import { Github, Linkedin, Mail } from 'lucide-react'
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
    <footer>
      <AnimatedSection className="mt-32 border-t border-white/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Mohamed Yahya Lazar. Tous droits réservés.
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
                  className="text-gray-400 hover:text-pink-300 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  )
}