import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface ReviewCardProps {
  name: string;
  rating: number;
  text: string;
  index: number;
}

export default function ReviewCard({
  name,
  rating,
  text,
  index,
}: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-sm border border-tan/30"
    >
      <div className="flex items-center gap-1 mb-3" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "fill-gold text-gold"
                : "fill-none text-tan"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="text-charcoal/70 text-sm leading-relaxed mb-4 italic">
        "{text}"
      </p>
      <div>
        <p className="font-semibold text-sm text-charcoal">{name}</p>
        <p className="text-xs text-charcoal/40 mt-0.5">
          <span className="inline-block px-2 py-0.5 bg-tan/20 rounded-full text-[10px] font-medium text-charcoal/50">
            Sample Review
          </span>
        </p>
      </div>
    </motion.div>
  );
}
