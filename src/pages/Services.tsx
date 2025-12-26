import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  Users,
  Utensils,
  PartyPopper,
  Calendar,
  Sparkles,
  Check,
} from "lucide-react";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

import weddingCatering from "@/assets/wedding-catering.jpg";
import corporateCatering from "@/assets/corporate-catering.jpg";
import birthdayCatering from "@/assets/birthday-catering.jpg";
import specialEventCatering from "@/assets/special-event-catering.jpg";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: "wedding",
      title: t('servicesPage.weddingTitle'),
      description: t('servicesPage.weddingDesc'),
      image: weddingCatering,
      icon: Heart,
      features: t('servicesPage.weddingFeatures').split(','),
    },
    {
      id: "corporate",
      title: t('servicesPage.corporateTitle'),
      description: t('servicesPage.corporateDesc'),
      image: corporateCatering,
      icon: Users,
      features: t('servicesPage.corporateFeatures').split(','),
    },
    {
      id: "birthday",
      title: t('servicesPage.birthdayTitle'),
      description: t('servicesPage.birthdayDesc'),
      image: birthdayCatering,
      icon: PartyPopper,
      features: t('servicesPage.birthdayFeatures').split(','),
    },
    {
      id: "special",
      title: t('servicesPage.specialTitle'),
      description: t('servicesPage.specialDesc'),
      image: specialEventCatering,
      icon: Calendar,
      features: t('servicesPage.specialFeatures').split(','),
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-cream-dark overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container-custom relative">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {t('servicesPage.heroTitle')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              {t('servicesPage.heroTitleHighlight')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('servicesPage.heroSubtitle')}
            </p>
            <div className="decorative-line-center mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-card group">
                    <img
                      src={service.image}
                      alt={`${service.title} by Bittu Caterers`}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                      {t('servicesPage.keyFeatures')}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-foreground/80"
                        >
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-gold"
                    >
                      {t('servicesPage.getQuote')}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                      to="/menu"
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      {t('nav.viewMenu')}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mb-6">
              {t('cta.title')}{" "}
              <span className="text-gold">{t('cta.titleHighlight')}</span>
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-8">
              {t('cta.subtitle')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-charcoal rounded-lg font-semibold hover:bg-gold-light transition-all"
            >
              {t('cta.getQuote')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
