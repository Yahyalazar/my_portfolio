"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown, Download, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navigationItems = [
  { name: "Accueil", href: "/" },
  { name: "À Propos", href: "/about" },
  { name: "Projets", href: "/projects" },
  { name: "Compétences", href: "/skills" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/5 backdrop-blur-xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <motion.div
            className="h-12 w-12 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg"
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
          <div className="hidden sm:block">
            <motion.span
              className="font-bold text-xl text-white"
              whileHover={{ color: "#ec4899" }}
              transition={{ duration: 0.2 }}
            >
              Mohamed Yahya
            </motion.span>
            <p className="text-sm text-gray-400">Full Stack Developer</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 relative py-2 group ${pathname === item.href ? "text-pink-400" : "text-gray-300"
                  }`}
              >
                <motion.span whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  {item.name}
                </motion.span>

                {/* Hover effect */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
                  initial={{ width: pathname === item.href ? "100%" : "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />

                {/* Active indicator */}
                {pathname === item.href && (
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-3">
          <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg transition-all duration-300 group">
                  <motion.span
                    animate={{
                      background: isDropdownOpen
                        ? "linear-gradient(135deg, #ec4899, #8b5cf6)"
                        : "linear-gradient(135deg, #ec4899, #8b5cf6)",
                    }}
                  >
                    Contact & CV
                  </motion.span>
                  <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </motion.div>
                </Button>
              </motion.div>
            </DropdownMenuTrigger>

            <AnimatePresence>
              {isDropdownOpen && (
                <DropdownMenuContent
                  align="end"
                  className="w-56 p-2 bg-black/90 backdrop-blur-xl border border-white/10"
                  asChild
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <DropdownMenuItem asChild className="cursor-pointer">
                      <motion.div
                        whileHover={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          scale: 1.02,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link href="/contact" className="flex items-center p-2 rounded-md w-full">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          >
                            <Mail className="mr-3 h-4 w-4 text-pink-400" />
                          </motion.div>
                          <div>
                            <p className="font-medium text-white">Me Contacter</p>
                            <p className="text-xs text-gray-400">Discutons de votre projet</p>
                          </div>
                        </Link>
                      </motion.div>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild className="cursor-pointer">
                      <motion.div
                        whileHover={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          scale: 1.02,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <a
                          href="/cv-mohammed-yahya-lazar.pdf"
                          download="CV-Mohammed-Yahya-Lazar.pdf"
                          className="flex items-center p-2 rounded-md w-full"
                        >
                          <motion.div
                            whileHover={{
                              scale: 1.2,
                              y: -2,
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          >
                            <Download className="mr-3 h-4 w-4 text-pink-400" />
                          </motion.div>
                          <div>
                            <p className="font-medium text-white">Télécharger CV</p>
                            <p className="text-xs text-gray-400">Format PDF</p>
                          </div>
                        </a>
                      </motion.div>
                    </DropdownMenuItem>
                  </motion.div>
                </DropdownMenuContent>
              )}
            </AnimatePresence>
          </DropdownMenu>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="relative">
              <Menu className="h-6 w-6 text-gray-300" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 bg-black/90 backdrop-blur-xl border-white/10">
            <SheetHeader>
              <SheetTitle className="text-white">Navigation</SheetTitle>
            </SheetHeader>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="flex flex-col space-y-8 mt-8"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-center pb-6 border-b border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.div
                      className="h-20 w-20 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <span className="text-white font-bold text-2xl">MYL</span>
                    </motion.div>
                    <h3 className="font-semibold text-xl text-white">Mohamed Yahya Lazar</h3>
                    <p className="text-sm text-gray-400">Développeur Full Stack</p>
                  </motion.div>

                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium transition-colors p-4 rounded-xl block ${pathname === item.href ? "text-pink-400 bg-white/5" : "text-gray-300"
                          }`}
                      >
                        <motion.span
                          whileHover={{ scale: 1.05, x: 10 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          {item.name}
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    className="pt-6 space-y-4 border-t border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
                      >
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                          <Mail className="mr-2 h-5 w-5" />
                          Me Contacter
                        </Link>
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button asChild variant="outline" className="w-full border-white/10 text-white hover:bg-white/5">
                        <a
                          href="/cv-mohammed-yahya-lazar.pdf"
                          download="CV-Mohammed-Yahya-Lazar.pdf"
                          onClick={() => setIsOpen(false)}
                        >
                          <Download className="mr-2 h-5 w-5" />
                          Télécharger CV
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
