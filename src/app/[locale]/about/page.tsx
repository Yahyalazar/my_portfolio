"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function About() {
  const t = useTranslations('about'); // Use translations for the 'about' namespace

  return (
    <main className="container mx-auto px-6 md:px-8 lg:px-12 py-20 relative">
      {/* About Me Section */}
      <section className="text-center mb-12">
        <motion.h2 variants={fadeInUp} initial="hidden" animate="visible" className="text-3xl font-bold text-white">
          {t('title')}
        </motion.h2>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-pink-400 flex items-center gap-2">
          {t('experienceTitle')} <span className="text-sm text-gray-400">💼</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {(t.raw('experience') as unknown as Array<{
            company: string;
            position: string;
            date: string;
            description: string;
            tech: string[];
          }>).map((job, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{job.company}</h3>
                  <p className="text-sm text-gray-400">{job.position}</p>
                </div>
                <p className="text-sm text-gray-400">{job.date}</p>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-400">
                <li>{job.description}</li>
                <li>Tech: {job.tech.join(", ")}</li>
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-pink-400 flex items-center gap-2">
          {t('educationTitle')} <span className="text-sm text-gray-400">🎓</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {(t.raw('education') as unknown as Array<{
            degree: string;
            institution: string;
            date: string;
            description: string;
            project: string;
          }>).map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <p className="text-sm text-gray-400">{edu.institution}</p>
                </div>
                <p className="text-sm text-gray-400">{edu.date}</p>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-400">
                <li>{edu.description}</li>
                <li>Project: {edu.project}</li>
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Languages and Personality Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Languages */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h2 className="text-2xl font-semibold text-pink-400 flex items-center gap-2">
            {t('languagesTitle')} <span className="text-sm text-gray-400">🌐</span>
          </h2>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center justify-between">
              <span>{t('languages.arabic')}</span>
              <span className="text-pink-400">{t('languages.proficiency')}</span>
            </li>
            <li className="flex items-center justify-between">
              <span>{t('languages.french')}</span>
              <span className="text-pink-400">{t('languages.proficiency')}</span>
            </li>
            <li className="flex items-center justify-between">
              <span>{t('languages.english')}</span>
              <span className="text-pink-400">{t('languages.proficiency')}</span>
            </li>
          </ul>
        </div>

        {/* Personality */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h2 className="text-2xl font-semibold text-pink-400 flex items-center gap-2">
            {t('personalityTitle')} <span className="text-sm text-gray-400">🧠</span>
          </h2>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {(t.raw('personalityTraits') as string[]).map((trait, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full"
              >
                {trait}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}