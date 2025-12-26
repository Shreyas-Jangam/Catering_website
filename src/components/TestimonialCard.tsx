import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
  delay?: number;
}

const TestimonialCard = ({
  name,
  role,
  content,
  rating,
  image,
  delay = 0,
}: TestimonialCardProps) => {
  return (
    <motion.div
      className="bg-card p-6 md:p-8 rounded-2xl shadow-card relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
      
      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-primary fill-primary" : "text-muted"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-foreground/80 mb-6 text-base leading-relaxed italic">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-semibold text-lg">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
