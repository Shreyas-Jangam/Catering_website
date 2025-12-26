import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const eventTypes = [
    t('contactPage.formEventWedding'),
    t('contactPage.formEventCorporate'),
    t('contactPage.formEventBirthday'),
    t('contactPage.formEventOther'),
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    date: "",
    location: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      eventType: "",
      date: "",
      location: "",
      guests: "",
      message: "",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-cream-dark">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">
              {t('contactPage.heroTitle')}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 sm:mb-6">
              {t('contactPage.heroTitleHighlight')}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              {t('contactPage.heroSubtitle')}
            </p>
            <div className="decorative-line-center mt-6 sm:mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground">
                {t('contactPage.getInTouch')}
              </h2>

              <div className="space-y-3 sm:space-y-4">
                <a href="tel:9869119094" className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl shadow-soft hover:shadow-medium transition-shadow touch-target">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">{t('contactPage.phone')}</h3>
                    <p className="text-primary font-medium text-sm sm:text-base">+91 98691 19094</p>
                  </div>
                </a>

                <a href="https://wa.me/919869119094" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl shadow-soft hover:shadow-medium transition-shadow touch-target">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#25D366]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">WhatsApp</h3>
                    <p className="text-[#25D366] font-medium text-sm sm:text-base">+91 98691 19094</p>
                  </div>
                </a>

                <a href="mailto:bittucaterers15@gmail.com" className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl shadow-soft hover:shadow-medium transition-shadow touch-target">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">{t('contactPage.email')}</h3>
                    <p className="text-primary font-medium text-sm sm:text-base break-all">bittucaterers15@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl shadow-soft">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">{t('contactPage.address')}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">21, New Sahakar Prerna Mandal, Patel Nagar, Golibar Colony, Opp. Raje Sambhaji Vidyalaya, Santacruz (E), Mumbai- 400 055</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl shadow-soft">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">{t('contactPage.hours')}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">{t('contactPage.hoursValue')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-card">
                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-4 sm:mb-6">
                  {t('contactPage.formTitle')} {t('contactPage.formTitleHighlight')}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">{t('contactPage.formName')} *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base touch-target"
                        placeholder={t('contactPage.formName')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">{t('contactPage.formPhone')} *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base touch-target"
                        placeholder={t('contactPage.formPhone')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">{t('contactPage.formEmail')}</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base touch-target"
                        placeholder={t('contactPage.formEmail')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">{t('contactPage.formEvent')} *</label>
                      <select
                        required
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base touch-target"
                      >
                        <option value="">{t('contactPage.formEventPlaceholder')}</option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">{t('contactPage.formDate')}</label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base touch-target"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">{t('contactPage.address')}</label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base touch-target"
                        placeholder={t('contactPage.address')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">{t('contactPage.formGuests')}</label>
                      <input
                        type="number"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base touch-target"
                        placeholder={t('contactPage.formGuests')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">{t('contactPage.formMessage')}</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-sm sm:text-base"
                      placeholder={t('contactPage.formMessage')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-gold touch-target text-sm sm:text-base"
                  >
                    <Send className="w-5 h-5" />
                    {t('contactPage.formSubmit')}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-64 sm:h-80 md:h-96 bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Bittu Caterers Location"
        />
      </section>
    </Layout>
  );
};

export default Contact;
