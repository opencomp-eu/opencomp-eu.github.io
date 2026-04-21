"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ThemeToggle from "@/components/theme-toggle"
import { changeLanguage } from '../i18n';
import LanguageSwitcher from "./language-switcher"
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center">
            <img 
              className="h-8 self-center mr-2" 
              src="https://github.com/nordwestt/compass/blob/master/assets/compass.png?raw=true" 
              alt="OpenComp Logo" 
            />
              <span className="text-2xl font-bold text-emerald-500">OpenComp</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <a 
                href="#features" 
                className="text-gray-600 hover:text-emerald-500 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('features');
                }}
              >
                {t('nav.features')}
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href="#diagram" 
                className="text-gray-600 hover:text-emerald-500 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('diagram');
                }}
              >
                {t('nav.diagram')}
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-emerald-500 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                {t('nav.contact')}
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <ThemeToggle />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#contact" onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }} className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-sm">{t('nav.contact')}</a>
            </motion.div>
            <LanguageSwitcher />

          </nav>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-gray-700 bg-accent">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="text-gray-600 hover:text-emerald-500 transition-colors py-2 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('features');
              }}
            >
              {t('nav.features')}
            </a>
            <a
              href="#diagram"
              className="text-gray-600 hover:text-emerald-500 transition-colors py-2 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('diagram');
              }}
            >
              {t('nav.diagram')}
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-emerald-500 transition-colors py-2 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              {t('nav.contact')}
            </a>
            <div className="flex justify-center py-2">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
            <Button
              className="bg-emerald-500 hover:bg-emerald-600 text-white w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </Button>
            

          </div>
        </motion.div>
      )}
    </header>
  )
}