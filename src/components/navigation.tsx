"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown, Download, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/5 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-pink-500/25 transition-all duration-300 transform group-hover:scale-105">
            <span className="text-white font-bold text-lg">MYL</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-xl text-white">Mohamed Yahya</span>
            <p className="text-sm text-gray-400">Full Stack Developer</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-all duration-300 hover:text-pink-400 relative py-2 ${
                pathname === item.href
                  ? "text-pink-400"
                  : "text-gray-300"
              }`}
            >
              {item.name}
              {pathname === item.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105">
                Contact & CV
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 p-2 bg-black/90 backdrop-blur-xl border border-white/10">
              <DropdownMenuItem asChild className="cursor-pointer hover:bg-white/10">
                <Link href="/contact" className="flex items-center p-2 rounded-md">
                  <Mail className="mr-3 h-4 w-4 text-pink-400" />
                  <div>
                    <p className="font-medium text-white">Me Contacter</p>
                    <p className="text-xs text-gray-400">Discutons de votre projet</p>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer hover:bg-white/10">
                <a
                  href="/cv-mohammed-yahya-lazar.pdf"
                  download="CV-Mohammed-Yahya-Lazar.pdf"
                  className="flex items-center p-2 rounded-md"
                >
                  <Download className="mr-3 h-4 w-4 text-pink-400" />
                  <div>
                    <p className="font-medium text-white">Télécharger CV</p>
                    <p className="text-xs text-gray-400">Format PDF</p>
                  </div>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-black/95 backdrop-blur-xl border-white/10">
            <div className="flex flex-col space-y-8 mt-8">
              <div className="text-center pb-6 border-b border-white/10">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">MYL</span>
                </div>
                <h3 className="font-semibold text-xl text-white">Mohamed Yahya Lazar</h3>
                <p className="text-sm text-gray-400">Développeur Full Stack</p>
              </div>

              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-pink-400 p-4 rounded-xl ${
                    pathname === item.href ? "text-pink-400 bg-white/5" : "text-gray-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-6 space-y-4 border-t border-white/10">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Mail className="mr-2 h-5 w-5" />
                    Me Contacter
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-white/10 text-white hover:bg-white/5"
                >
                  <a
                    href="/cv-mohammed-yahya-lazar.pdf"
                    download="CV-Mohammed-Yahya-Lazar.pdf"
                    onClick={() => setIsOpen(false)}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Télécharger CV
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
