import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import weddingCatering from "@/assets/wedding-catering.jpg";
import corporateCatering from "@/assets/corporate-catering.jpg";
import birthdayCatering from "@/assets/birthday-catering.jpg";
import specialEventCatering from "@/assets/special-event-catering.jpg";
import indianCuisine from "@/assets/indian-cuisine.jpg";
import desserts from "@/assets/desserts.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const { t } = useLanguage();

  const galleryImages = [
    { src: gallery1, alt: "Grand wedding reception buffet hall setup", category: t('services.wedding') },
    { src: gallery2, alt: "Indian dessert and sweets display", category: t('menuPreview.desserts') },
    { src: gallery3, alt: "Live chaat counter at Indian event", category: t('galleryPage.food') },
    { src: gallery4, alt: "Corporate lunch buffet setup", category: t('services.corporate') },
    { src: gallery5, alt: "Tandoor live counter with chef", category: t('galleryPage.food') },
    { src: gallery6, alt: "Engagement ceremony food setup", category: t('services.special') },
    { src: weddingCatering, alt: "Elegant wedding catering arrangement", category: t('services.wedding') },
    { src: corporateCatering, alt: "Professional corporate event catering", category: t('services.corporate') },
    { src: birthdayCatering, alt: "Colorful birthday party catering", category: t('services.birthday') },
    { src: specialEventCatering, alt: "Festival celebration food setup", category: t('services.special') },
    { src: indianCuisine, alt: "Traditional Indian cuisine spread", category: t('galleryPage.food') },
    { src: desserts, alt: "Premium Indian desserts collection", category: t('menuPreview.desserts') },
  ];

  const categories = [
    t('galleryPage.all'),
    t('services.wedding'),
    t('services.corporate'),
    t('services.birthday'),
    t('services.special'),
    t('galleryPage.food'),
    t('menuPreview.desserts'),
  ];

  const filteredImages =
    activeCategory === t('galleryPage.all')
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-cream-dark overflow-hidden">
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
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">
              {t('galleryPage.heroTitle')}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 sm:mb-6">
              {t('galleryPage.heroTitleHighlight')}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              {t('galleryPage.heroSubtitle')}
            </p>
            <div className="decorative-line-center mt-6 sm:mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-4 sm:py-6 md:py-8 bg-background border-b border-border sticky top-16 sm:top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all touch-target ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-gold"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  className="group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-card cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  layout
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-primary text-primary-foreground text-xs sm:text-sm rounded-full">
                      {image.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 text-cream hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              src={selectedImage}
              alt="Gallery image enlarged"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

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
              {t('nav.bookCatering')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
