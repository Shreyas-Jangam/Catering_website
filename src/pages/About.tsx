import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  Shield,
  Clock,
  Users,
  Award,
  ChefHat,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";

import aboutTeam from "@/assets/about-team.jpg";
import weddingCatering from "@/assets/wedding-catering.jpg";

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t('whyUs.hygienic'),
      description: t('whyUs.hygienicDesc'),
    },
    {
      icon: Users,
      title: t('whyUs.professional'),
      description: t('whyUs.professionalDesc'),
    },
    {
      icon: Shield,
      title: t('whyUs.onTime'),
      description: t('whyUs.onTimeDesc'),
    },
    {
      icon: Award,
      title: t('whyUs.presentation'),
      description: t('whyUs.presentationDesc'),
    },
    {
      icon: Clock,
      title: t('whyUs.affordable'),
      description: t('whyUs.affordableDesc'),
    },
    {
      icon: ChefHat,
      title: t('whyUs.customMenu'),
      description: t('whyUs.customMenuDesc'),
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
              {t('about.heroTitle')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              {t('about.heroTitleHighlight')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('about.heroSubtitle')}
            </p>
            <div className="decorative-line-center mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                {t('about.storyTitle')} {t('about.storyTitleHighlight')}
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Bittu Caterers — <span className="text-primary">{t('about.storyTitleHighlight')}</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('about.storyP1')}
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('about.storyP2')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.storyP3')}
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={aboutTeam}
                alt="Bittu Caterers professional team serving at an event"
                className="rounded-2xl shadow-card w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-gold">
                <div className="text-4xl font-display font-bold">15+</div>
                <div className="text-sm opacity-90">{t('about.experience')}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom">
          <SectionHeading
            badge={t('about.whyChooseTitle')}
            title={t('about.whyChooseTitleHighlight')}
            subtitle={t('about.missionText')}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-card p-6 rounded-2xl shadow-soft hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={weddingCatering}
                alt="Elegant wedding catering setup by Bittu Caterers"
                className="rounded-2xl shadow-card w-full"
              />
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                {t('about.missionTitle')}
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                {t('about.missionTitleHighlight')}
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t('about.missionText')}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-gold"
              >
                {t('nav.bookCatering')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
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
              {t('nav.contact')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
