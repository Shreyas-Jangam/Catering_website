import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Wedding Client",
    event: "Wedding Reception",
    content:
      "Bittu Caterers made our wedding absolutely unforgettable. The food was amazing, presentation was beautiful, and the service was impeccable. Every guest complimented the feast! They truly understand what makes a wedding special.",
    rating: 5,
  },
  {
    name: "Rajesh Mehta",
    role: "Corporate Event Manager",
    event: "Annual Corporate Event",
    content:
      "Our corporate event catering was outstanding. Professional team, great food quality, and everything was delivered on time. The setup was elegant and the staff was courteous. Highly recommend for business events.",
    rating: 5,
  },
  {
    name: "Sunita Patel",
    role: "Birthday Party Host",
    event: "50th Birthday Celebration",
    content:
      "The birthday party catering exceeded all expectations. Kids and adults both loved the food. The team was friendly and handled everything smoothly. The dessert counter was especially a hit!",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Wedding Client",
    event: "Destination Wedding",
    content:
      "We hired Bittu Caterers for our destination wedding and they did not disappoint. Despite the complex logistics, they delivered exceptional food and service. Our guests are still talking about the biryani!",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    role: "Event Planner",
    event: "Engagement Ceremony",
    content:
      "As an event planner, I've worked with many caterers. Bittu Caterers stands out for their professionalism, taste, and reliability. They've become my go-to recommendation for all my clients.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Restaurant Owner",
    event: "Family Function",
    content:
      "Being in the food business myself, I have high standards. Bittu Caterers impressed me with their attention to detail, quality ingredients, and authentic flavours. They catered our family reunion perfectly.",
    rating: 5,
  },
  {
    name: "Kavita Joshi",
    role: "Mother of Bride",
    event: "Wedding & Sangeet",
    content:
      "From the sangeet to the wedding day, Bittu Caterers handled everything beautifully. The variety of dishes, the presentation, and most importantly the taste - everything was perfect. Thank you for making my daughter's wedding so special!",
    rating: 5,
  },
  {
    name: "Suresh Iyer",
    role: "Company Director",
    event: "Product Launch",
    content:
      "We chose Bittu Caterers for our product launch event and it was the right decision. The catering added a touch of class to our event. Professional service, delicious food, and great value for money.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "School Principal",
    event: "Annual Day Celebration",
    content:
      "Bittu Caterers handled catering for our school's annual day with over 500 guests. They managed everything efficiently and the food was loved by students, parents, and staff alike. Very reliable and accommodating.",
    rating: 5,
  },
];

const Testimonials = () => {
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
              Testimonials
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              What Our Clients Say
            </h1>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it — hear from our happy clients about their experience with Bittu Caterers.
            </p>
            <div className="decorative-line-center mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Happy Clients" },
              { number: "500+", label: "Weddings Catered" },
              { number: "15+", label: "Years Experience" },
              { number: "100%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-card p-6 md:p-8 rounded-2xl shadow-card relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-primary fill-primary"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/80 mb-6 text-base leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Event Tag */}
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-4">
                  {testimonial.event}
                </span>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
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
              Ready to Join Our{" "}
              <span className="text-gold">Happy Clients?</span>
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-8">
              Experience the same exceptional service and delicious food that
              our clients rave about.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-charcoal rounded-lg font-semibold hover:bg-gold-light transition-all"
            >
              Book Your Event
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
