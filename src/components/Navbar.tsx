import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { name: "Home", href: "/", translationKey: "" },
    { name: t('nav.about'), href: "/about", translationKey: "nav.about" },
    { name: t('nav.services'), href: "/services", translationKey: "nav.services" },
    { name: t('nav.menu'), href: "/menu", translationKey: "nav.menu" },
    { name: t('nav.gallery'), href: "/gallery", translationKey: "nav.gallery" },
    { name: t('nav.testimonials'), href: "/testimonials", translationKey: "nav.testimonials" },
    { name: t('nav.contact'), href: "/contact", translationKey: "nav.contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-area-inset-top ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      {/* Language Selector Bar */}
      <div className={`w-full transition-colors ${scrolled ? "bg-muted/50" : "bg-black/20"}`}>
        <div className="container-custom flex justify-end py-1">
          <div className={scrolled ? "text-foreground" : "text-white"}>
            <LanguageSelector />
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 sm:gap-2">
            <span className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-primary drop-shadow-md">
              Bittu
            </span>
            <span className={`text-xl sm:text-2xl md:text-3xl font-display font-medium drop-shadow-md ${
              scrolled ? "text-foreground" : "text-white"
            }`}>
              Caterers
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary drop-shadow-md whitespace-nowrap ${
                  location.pathname === link.href
                    ? "text-primary"
                    : scrolled
                    ? "text-foreground/80"
                    : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:9869119094"
              className="flex items-center gap-2 px-4 xl:px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors shadow-gold touch-target"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{t('nav.callNow')}</span>
              <span className="xl:hidden">Call</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2.5 rounded-lg touch-target transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="container-custom py-4 sm:py-6 space-y-2 safe-area-inset-bottom">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block py-3 px-4 text-base font-medium transition-colors hover:text-primary hover:bg-primary/5 rounded-lg touch-target ${
                    location.pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:9869119094"
                className="flex items-center justify-center gap-2 w-full px-5 py-4 bg-primary text-primary-foreground rounded-lg font-medium text-base hover:bg-primary/90 transition-colors mt-4 touch-target"
              >
                <Phone className="w-5 h-5" />
                {t('nav.callNow')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
