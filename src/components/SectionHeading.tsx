import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  center = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-10 lg:mb-14 ${center ? "text-center" : ""}`}
    >
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-cream" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {/* Decorative barber stripe divider */}
      <div
        className={`h-1 w-20 barber-stripe opacity-40 mb-4 ${
          center ? "mx-auto" : ""
        }`}
        aria-hidden="true"
      />
      {subtitle && (
        <p
          className={`text-base sm:text-lg max-w-2xl ${
            center ? "mx-auto" : ""
          } ${light ? "text-cream/70" : "text-charcoal/60"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
