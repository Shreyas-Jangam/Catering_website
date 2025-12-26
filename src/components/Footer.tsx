import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: t('nav.about'), href: "/about" },
    { name: t('nav.services'), href: "/services" },
    { name: t('nav.menu'), href: "/menu" },
    { name: t('nav.gallery'), href: "/gallery" },
    { name: t('nav.testimonials'), href: "/testimonials" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  const serviceLinks = [
    t('services.wedding'),
    t('services.corporate'),
    t('services.birthday'),
    t('services.special'),
  ];

  return (
    <footer className="bg-charcoal text-cream safe-area-inset-bottom">
      {/* Main Footer */}
      <div className="container-custom py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl sm:text-2xl font-display font-bold text-gold">
                Bittu{" "}
              </span>
              <span className="text-xl sm:text-2xl font-display font-medium text-cream">
                Caterers
              </span>
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/bittu__caterers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors touch-target"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors touch-target"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors touch-target"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors touch-target"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6 text-gold">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6 text-gold">
              {t('footer.ourServices')}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6 text-gold">
              {t('footer.contactInfo')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:9869119094"
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    +91 98691 19094
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:bittucaterers15@gmail.com"
                  className="text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  bittucaterers15@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-cream/70 text-sm">
                  {t('footer.address')}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container-custom py-6 flex items-center justify-center">
          <p className="text-cream/50 text-sm text-center">
            © {currentYear} Bittu Caterers. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
