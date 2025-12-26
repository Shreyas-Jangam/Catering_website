import { motion } from "framer-motion";

interface MenuCardProps {
  title: string;
  description: string;
  image: string;
  items?: string[];
  delay?: number;
}

const MenuCard = ({
  title,
  description,
  image,
  items,
  delay = 0,
}: MenuCardProps) => {
  return (
    <motion.div
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        {items && items.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {items.slice(0, 4).map((item, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
              >
                {item}
              </span>
            ))}
            {items.length > 4 && (
              <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
                +{items.length - 4} more
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MenuCard;
