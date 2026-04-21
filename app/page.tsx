"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe, Server, Shield, Lock, Eye, Settings, FileText, Users, KeyRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import ContactForm from "@/components/contact-form";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useTranslation } from "react-i18next";

const featureIcons: Record<string, React.ElementType> = {
  Shield: Shield,
  Globe: Globe,
  Lock: Lock,
  Eye: Eye,
  Settings: Settings,
  KeyRound: KeyRound,
  FileText: FileText,
  Users: Users,
};

export default function Home() {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      key: "privacy",
      icon: "Shield",
    },
    {
      key: "bestOfBoth",
      icon: "Globe",
    },
    {
      key: "ownership",
      icon: "Lock",
    },
    {
      key: "openSource",
      icon: "Eye",
    },
    {
      key: "customizable",
      icon: "Settings",
    },
    {
      key: "authentication",
      icon: "KeyRound",
    },
    {
      key: "documents",
      icon: "FileText",
    },
    {
      key: "characters",
      icon: "Users",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex flex-col md:flex-row items-center mb-6 justify-center">
              <img
                className="h-24 self-center mb-4 md:mb-0 md:mr-4"
                src="https://github.com/nordwestt/compass/blob/master/assets/compass.png?raw=true"
                alt="OpenComp Logo"
              />
              <h1 className="my-auto text-4xl md:text-6xl font-bold text-gray-900 dark:text-white text-center md:text-left">
                {t("hero.title")}
                <br />
                <span className="text-emerald-500">
                  {t("hero.subtitle_1")} <u>{t("hero.subtitle_2")}</u>{" "}
                  {t("hero.subtitle_3")}
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("features")}
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                {t("hero.tryDemo")}
              </Button>
              <Button
                onClick={() => window.open("https://github.com/compass-ai-chat", "_blank")}
                size="lg"
                variant="outline"
                className="border-emerald-500 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="outline"
                className="border-emerald-500 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950"
              >
                {t("contact.title")} {t("contact.subtitle")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 overflow-hidden bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("providers.title")}{" "}
              <span className="text-emerald-500">
                {t("providers.subtitle")}
              </span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              {t("providers.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24" id="features">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("features.title")}{" "}
            <span className="text-emerald-500">{t("features.subtitle")}?</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {t("features.description")}
          </p>
        </motion.div>


        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = featureIcons[feature.icon];
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-card rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {t(`features.cards.${feature.key}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t(`features.cards.${feature.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Products Section - replacing Diagram Section */}
      <section className="container mx-auto px-4 py-16 md:py-24" id="diagram">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("download.title")}{" "}
            <span className="text-emerald-500">{t("download.subtitle")}</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {t("download.description")}
          </p>
        </motion.div>

        {/* Morpheus Product Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 max-w-5xl mx-auto">
            <div className="w-full lg:w-1/2">
              <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 dark:from-emerald-600 dark:to-emerald-900 rounded-2xl p-8 text-white">
                <Server className="h-16 w-16 mb-4" />
                <h3 className="text-3xl font-bold mb-4">Morpheus</h3>
                <p className="text-lg opacity-90">
                  {t("diagram.polaris.description")}
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Take Control of Your Communication
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Switch from MS Teams and Zoom to the open Matrix protocol</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">End-to-end encryption by default</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Choose your own server or hosting provider</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Seamless migration from existing tools</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white"
                  onClick={() => window.open("https://github.com/compass-ai-chat", "_blank")}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* OpenComp Roadmap */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full mt-16"
        >
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 max-w-5xl mx-auto">
            <div className="w-full lg:w-1/2">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-900 rounded-2xl p-8 text-white">
                <Shield className="h-16 w-16 mb-4" />
                <h3 className="text-3xl font-bold mb-4">{t("diagram.compass.title")}</h3>
                <p className="text-lg opacity-90">
                  {t("diagram.compass.description")}
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t("diagram.roadmap.heading")}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Eye className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{t("diagram.roadmap.items.oss")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{t("diagram.roadmap.items.mastodon")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Settings className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{t("diagram.roadmap.items.opencloud")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{t("diagram.roadmap.items.transparency")}</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 my-16" id="contact">
        <div className="flex flex-col md:flex-row gap-12 items-center px-4 py-6 md:py-24 bg-surface-light dark:bg-surface-dark rounded-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col md:px-4 w-full"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 mx-auto">
              {t("contact.title")}{" "}
              <span className="text-emerald-500">{t("contact.subtitle")}</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {t("contact.description")}
            </p>

            <div className="space-y-4 mb-8 w-full flex flex-col items-center">
              <div
                onClick={() => window.open("mailto:info@opencomp.eu")}
                className="flex items-center w-full gap-4 cursor-pointer hover:bg-emerald-100 dark:hover:bg-emerald-900 rounded-full transition-all duration-300"
              >
                <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="w-full flex flex-col overflow-x-auto">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {t("contact.email")}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 break-words">
                    info@opencomp.eu
                  </p>
                </div>
              </div>

              <div
                onClick={() =>
                  window.open(
                    "https://github.com/compass-ai-chat",
                    "_blank",
                  )
                }
                className="flex items-center w-full gap-4 cursor-pointer hover:bg-emerald-100 dark:hover:bg-emerald-900 rounded-full transition-all duration-300"
              >
                <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full">
                  <Github className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="w-full flex flex-col overflow-x-auto">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {t("contact.github")}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 break-words">
                    github.com/compass-ai-chat
                  </p>
                </div>
              </div>

              <div
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/opencomp",
                    "_blank",
                  )
                }
                className="flex items-center w-full gap-4 cursor-pointer hover:bg-emerald-100 dark:hover:bg-emerald-900 rounded-full transition-all duration-300"
              >
                <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full">
                  <Linkedin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="w-full flex flex-col overflow-x-auto">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {t("contact.linkedin")}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 break-words">
                    linkedin.com/company/opencomp
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="bg-card text-card-foreground dark:border dark:border-emerald-700/50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {t("contact.sendMessage")}
              </h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}