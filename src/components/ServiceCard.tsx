import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-tan/30 hover:border-evergreen/20"
    >
      <div className="w-12 h-12 rounded-lg bg-evergreen/10 flex items-center justify-center mb-4 group-hover:bg-evergreen/15 transition-colors">
        <Icon className="w-6 h-6 text-evergreen" aria-hidden="true" />
      </div>
      <h3 className="font-serif font-semibold text-lg text-charcoal mb-1">
        {title}
      </h3>
      <p className="text-charcoal/60 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
