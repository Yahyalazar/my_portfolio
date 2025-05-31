"use client"

import { Navigation } from "@/components/navigation"
import Image from "next/image"
import { Camera, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function ProjectsPage() {
  const projects = [
    {
      title: "Photography Portfolio",
      description: "A photography portfolio website showcasing various categories including nature, children, travel, equipment, culture, and sports photography.",
      technologies: ["HTML", "CSS"],
      image: "/images/image.png",
      link: "https://project-photography-ten.vercel.app/#header",
      icon: <Camera className="w-6 h-6 text-pink-400" />
    }
    // Add other projects here
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <Navigation />
      <main className="container mx-auto px-6 md:px-8 lg:px-12 py-20">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 h-full"
            >
              <motion.div 
                className="relative h-48"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <motion.div 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.icon}
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </motion.div>
                  <motion.a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-pink-300 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
                <p className="text-gray-300 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.technologies.map((tech, i) => (
                    <motion.span 
                      key={i} 
                      className="px-3 py-1 bg-pink-500/20 rounded-full text-pink-300 text-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}