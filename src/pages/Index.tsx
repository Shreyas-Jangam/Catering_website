import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  ChefHat,
  Clock,
  Sparkles,
  Shield,
  Users,
  Heart,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import MenuCard from "@/components/MenuCard";
import { useLanguage } from "@/contexts/LanguageContext";

import heroCatering from "@/assets/hero-catering.jpg";
import weddingCatering from "@/assets/wedding-catering.jpg";
import corporateCatering from "@/assets/corporate-catering.jpg";
import birthdayCatering from "@/assets/birthday-catering.jpg";
import specialEventCatering from "@/assets/special-event-catering.jpg";
import indianCuisine from "@/assets/indian-cuisine.jpg";
import punjabiCuisine from "@/assets/punjabi-cuisine.jpg";
import chineseCuisine from "@/assets/chinese-cuisine.jpg";
import desserts from "@/assets/desserts.jpg";

const Index = () => {
  const { t } = useLanguage();

  const usps = [
    {
      icon: Shield,
      title: t('whyUs.hygienic'),
      description: t('whyUs.hygienicDesc'),
    },
    {
      icon: Users,
      title: t('whyUs.professional'),
      description: t('whyUs.professionalDesc'),
    },
    {
      icon: Clock,
      title: t('whyUs.onTime'),
      description: t('whyUs.onTimeDesc'),
    },
    {
      icon: Sparkles,
      title: t('whyUs.presentation'),
      description: t('whyUs.presentationDesc'),
    },
    {
      icon: Heart,
      title: t('whyUs.affordable'),
      description: t('whyUs.affordableDesc'),
    },
  ];

  const services = [
    {
      title: t('services.wedding'),
      description: t('services.weddingDesc'),
      image: weddingCatering,
    },
    {
      title: t('services.corporate'),
      description: t('services.corporateDesc'),
      image: corporateCatering,
    },
    {
      title: t('services.birthday'),
      description: t('services.birthdayDesc'),
      image: birthdayCatering,
    },
    {
      title: t('services.special'),
      description: t('services.specialDesc'),
      image: specialEventCatering,
    },
  ];

  const menuPreview = [
    {
      title: t('menuPreview.punjabi'),
      description: t('menuPreview.punjabiDesc'),
      image: punjabiCuisine,
      items: ["Biryani", "Paneer", "Dal", "Naan"],
    },
    {
      title: t('menuPreview.southIndian'),
      description: t('menuPreview.southIndianDesc'),
      image: indianCuisine,
      items: ["Dosa", "Idli", "Vada", "Sambar"],
    },
    {
      title: t('menuPreview.chinese'),
      description: t('menuPreview.chineseDesc'),
      image: chineseCuisine,
      items: ["Noodles", "Manchurian", "Fried Rice"],
    },
    {
      title: t('menuPreview.desserts'),
      description: t('menuPreview.dessertsDesc'),
      image: desserts,
      items: ["Gulab Jamun", "Jalebi", "Kheer", "Ice Cream"],
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Wedding Client",
      content:
        "Bittu Caterers made our wedding absolutely unforgettable. The food was amazing, presentation was beautiful, and the service was impeccable. Every guest complimented the feast!",
      rating: 5,
    },
    {
      name: "Rajesh Mehta",
      role: "Corporate Event Manager",
      content:
        "Our corporate event catering was outstanding. Professional team, great food quality, and everything was delivered on time. Highly recommend for business events.",
      rating: 5,
    },
    {
      name: "Sunita Patel",
      role: "Birthday Party Host",
      content:
        "The birthday party catering exceeded all expectations. Kids and adults both loved the food. The team was friendly and handled everything smoothly.",
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroCatering}
            alt="Premium Indian catering spread with biryani, curries, and naan bread"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60 md:from-charcoal/90 md:via-charcoal/70 md:to-charcoal/50" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 pt-28 sm:pt-32 pb-16">
          <div className="max-w-3xl">
            <motion.span
              className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/20 text-gold text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Premium Catering Services
            </motion.span>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-cream mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t('hero.title')}{" "}
              <span className="text-gold">{t('hero.subtitle')}</span>
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base text-gold/90 font-medium mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              By <span className="font-semibold">Nitin G. Jangam</span>
            </motion.p>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-cream/80 mb-6 sm:mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-sm sm:text-base hover:bg-primary/90 transition-all shadow-gold touch-target"
              >
                <ChefHat className="w-5 h-5" />
                {t('hero.bookCatering')}
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-cream/10 text-cream border border-cream/30 rounded-lg font-semibold text-sm sm:text-base hover:bg-cream/20 transition-all touch-target"
              >
                {t('hero.viewMenu')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/919869119094"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#25D366] text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-[#20BD5C] transition-all touch-target"
              >
                <MessageCircle className="w-5 h-5" />
                {t('nav.whatsappNow')}
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-gold rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom">
          <SectionHeading
            badge={t('whyUs.title')}
            title={t('whyUs.titleHighlight')}
            subtitle={t('whyUs.subtitle')}
          />

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {usps.map((usp, index) => (
              <motion.div
                key={usp.title}
                className="text-center p-4 sm:p-6 bg-card rounded-xl sm:rounded-2xl shadow-soft hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                  <usp.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">
                  {usp.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {usp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge={t('services.title')}
            title={t('services.titleHighlight')}
            subtitle={t('services.subtitle')}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            className="text-center mt-8 sm:mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all touch-target text-sm sm:text-base"
            >
              {t('services.learnMore')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom">
          <SectionHeading
            badge={t('menuPreview.title')}
            title={t('menuPreview.titleHighlight')}
            subtitle={t('menuPreview.subtitle')}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {menuPreview.map((menu, index) => (
              <MenuCard key={menu.title} {...menu} delay={index * 0.1} />
            ))}
          </div>

          <motion.div
            className="text-center mt-8 sm:mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-gold touch-target text-sm sm:text-base"
            >
              {t('menuPreview.viewFullMenu')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge={t('testimonials.title')}
            title={t('testimonials.titleHighlight')}
            subtitle={t('testimonials.subtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                {...testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            className="text-center mt-8 sm:mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm sm:text-base"
            >
              {t('testimonials.viewAll')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-foreground mb-4 sm:mb-6">
              {t('cta.title')}{" "}
              <span className="text-gold">{t('cta.titleHighlight')}</span>
            </h2>
            <p className="text-secondary-foreground/80 text-base sm:text-lg mb-6 sm:mb-8">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="tel:9869119094"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-gold text-charcoal rounded-lg font-semibold hover:bg-gold-light transition-all touch-target w-full sm:w-auto justify-center text-sm sm:text-base"
              >
                <Phone className="w-5 h-5" />
                {t('cta.callNow')}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-secondary-foreground/10 text-secondary-foreground border border-secondary-foreground/30 rounded-lg font-semibold hover:bg-secondary-foreground/20 transition-all touch-target w-full sm:w-auto justify-center text-sm sm:text-base"
              >
                {t('cta.getQuote')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/919869119094"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20BD5C] transition-all touch-target w-full sm:w-auto justify-center text-sm sm:text-base"
              >
                <MessageCircle className="w-5 h-5" />
                {t('nav.whatsappNow')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
