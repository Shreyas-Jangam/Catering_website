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

import aboutTeam from "@/assets/about-team.jpg";
import weddingCatering from "@/assets/wedding-catering.jpg";

const values = [
  {
    icon: Heart,
    title: "Quality First",
    description:
      "We use only the freshest ingredients and prepare every dish with care and passion.",
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description:
      "Your happiness is our priority. We go above and beyond to exceed expectations.",
  },
  {
    icon: Shield,
    title: "Hygiene & Safety",
    description:
      "Strict hygiene protocols ensure safe and clean food preparation at all times.",
  },
  {
    icon: Award,
    title: "Memorable Experiences",
    description:
      "We create lasting memories through exceptional food and presentation.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "On-time delivery and professional service you can always count on.",
  },
  {
    icon: ChefHat,
    title: "Culinary Excellence",
    description:
      "Expert chefs crafting authentic flavours from traditional to fusion cuisines.",
  },
];

const whyChooseUs = [
  "We cook with care, passion, and expertise",
  "We maintain the highest hygiene standards",
  "We provide attractive buffet setups & serving",
  "We ensure smooth coordination and timely service",
  "We offer customized menus for every occasion",
  "We bring years of trusted experience",
];

const About = () => {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Who We Are
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover the passion, dedication, and expertise behind Bittu
              Caterers
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
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Bittu Caterers — A Legacy of{" "}
                <span className="text-primary">Culinary Excellence</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded by <strong className="text-foreground">Nitin G. Jangam</strong>, Bittu Caterers is a trusted and premium catering service
                dedicated to delivering exceptional food experiences. We believe
                every event deserves great taste, warm hospitality, and a touch
                of elegance — and that's exactly what we provide.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                What started as a passion for cooking and serving people has
                grown into a professional catering brand loved by families,
                event planners, corporates, and wedding clients. Over time,
                we've earned trust through quality, consistency, and commitment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we proudly serve thousands of guests at weddings,
                corporate events, birthday parties, and special celebrations —
                always delivering the same exceptional quality and service that
                made us who we are.
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
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-custom">
          <SectionHeading
            badge="Our Values"
            title="What We Stand For"
            subtitle="Our core values guide everything we do, from the kitchen to your table."
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
                Why Bittu Caterers?
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Let Us Handle the Food —{" "}
                <span className="text-primary">You Enjoy the Celebration</span>
              </h2>
              <ul className="space-y-4 mb-8">
                {whyChooseUs.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-gold"
              >
                Book Your Event
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
              Ready to Experience the{" "}
              <span className="text-gold">Bittu Difference?</span>
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-8">
              Contact us today to discuss your event and let us create a
              memorable culinary experience for you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-charcoal rounded-lg font-semibold hover:bg-gold-light transition-all"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
