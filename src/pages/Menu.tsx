import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import MenuCard from "@/components/MenuCard";
import { useLanguage } from "@/contexts/LanguageContext";

import indianCuisine from "@/assets/indian-cuisine.jpg";
import punjabiCuisine from "@/assets/punjabi-cuisine.jpg";
import chineseCuisine from "@/assets/chinese-cuisine.jpg";
import southIndianCuisine from "@/assets/south-indian-cuisine.jpg";
import snacksStarters from "@/assets/snacks-starters.jpg";
import desserts from "@/assets/desserts.jpg";

const Menu = () => {
  const { t } = useLanguage();

  const menuCategories = [
    {
      title: t('menuPreview.punjabi'),
      description: t('menuPreview.punjabiDesc'),
      image: punjabiCuisine,
      items: [
        "Paneer Dishes",
        "Veg Curries",
        "Dal Varieties",
        "Biryani",
        "Pulav",
        "Roti & Naan",
        "Poori",
        "Rice Varieties",
      ],
    },
    {
      title: t('menuPreview.southIndian'),
      description: t('menuPreview.southIndianDesc'),
      image: southIndianCuisine,
      items: [
        "Masala Dosa",
        "Plain Dosa",
        "Idli",
        "Medu Vada",
        "Uttapam",
        "Sambhar",
        "Coconut Chutney",
        "Filter Coffee",
      ],
    },
    {
      title: t('menuPreview.chinese'),
      description: t('menuPreview.chineseDesc'),
      image: chineseCuisine,
      items: [
        "Hakka Noodles",
        "Fried Rice",
        "Manchurian",
        "Soups",
        "Spring Rolls",
        "Chili Paneer",
        "Sweet Corn Soup",
        "Momos",
      ],
    },
    {
      title: t('menuPreview.desserts'),
      description: t('menuPreview.dessertsDesc'),
      image: desserts,
      items: [
        "Gulab Jamun",
        "Jalebi",
        "Rasgulla",
        "Kheer",
        "Halwa",
        "Ladoo",
        "Ice Cream",
        "Custard",
      ],
    },
    {
      title: "Snacks & Starters",
      description: "Delicious appetizers and snacks to kick off your event.",
      image: snacksStarters,
      items: [
        "Samosa",
        "Pakora",
        "Paneer Tikka",
        "Chaat Varieties",
        "Pav Bhaji",
        "Bhel Puri",
        "Aloo Tikki",
        "Papdi Chaat",
      ],
    },
    {
      title: "Indian Cuisine",
      description: "Rich flavours and authentic recipes from across India.",
      image: indianCuisine,
      items: [
        "Butter Chicken Style Paneer",
        "Dal Makhani",
        "Sarson da Saag",
        "Makki ki Roti",
        "Tandoori Items",
        "Chole Bhature",
        "Rajma Chawal",
        "Lassi",
      ],
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
              {t('menuPage.heroTitle')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              {t('menuPage.heroTitleHighlight')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('menuPage.heroSubtitle')}
            </p>
            <div className="decorative-line-center mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuCategories.map((category, index) => (
              <MenuCard key={category.title} {...category} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Menu Note */}
      <section className="py-12 bg-primary/5">
        <div className="container-custom">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-card rounded-2xl shadow-soft"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {t('menuPage.customMenu')}
                </h3>
                <p className="text-muted-foreground">
                  {t('menuPage.customMenuDesc')}
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-gold whitespace-nowrap"
            >
              {t('menuPage.requestCustom')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Beverages Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom">
          <SectionHeading
            badge={t('menuPage.beverages')}
            title={t('menuPage.beverages')}
            subtitle={t('menuPage.heroSubtitle')}
          />

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[
              "Mocktails",
              "Fresh Juices",
              "Soft Drinks",
              "Lassi",
              "Chaas",
              "Filter Coffee",
              "Masala Chai",
              "Shakes",
              "Jaljeera",
              "Nimbu Pani",
              "Thandai",
              "Badam Milk",
            ].map((beverage, index) => (
              <motion.div
                key={beverage}
                className="bg-card p-4 rounded-xl text-center shadow-soft"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <span className="text-foreground font-medium">{beverage}</span>
              </motion.div>
            ))}
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

export default Menu;
