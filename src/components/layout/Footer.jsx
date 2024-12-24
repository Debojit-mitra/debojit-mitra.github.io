import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Debojit-mitra",
      label: "GitHub",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/debojitmitra-one6",
      label: "LinkedIn",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/its_me_debojit",
      label: "Instagram",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    { icon: Mail, href: "mailto:debojit16mitra@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  // Heart animation variants
  const heartVariants = {
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        repeatDelay: 0.2,
      },
    },
  };

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4 block"
            >
              Debojit Mitra
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Hi there! Explore my creative universe. Where creativity and
              technology shape impactful solutions.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.id)?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:Debojit16mitra@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Debojit16mitra@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/Dt8SauiNAdkXkXAg9"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Guwahati, Assam, India
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p className="flex items-center justify-center gap-1">
            Made with
            <motion.span
              variants={heartVariants}
              animate="animate"
              className="text-red-500"
            >
              ❤
            </motion.span>
            by Debojit Mitra © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
