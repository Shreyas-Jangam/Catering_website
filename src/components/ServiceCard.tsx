import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon?: LucideIcon;
  delay?: number;
}

const ServiceCard = ({
  title,
  description,
  image,
  icon: Icon,
  delay = 0,
}: ServiceCardProps) => {
  return (
    <motion.div
      className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover-lift"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        {Icon && (
          <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center mb-3">
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>
        )}
        <h3 className="text-xl font-display font-semibold text-cream mb-2">
          {title}
        </h3>
        <p className="text-cream/80 text-sm line-clamp-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
