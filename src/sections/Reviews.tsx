import SectionHeading from "~/components/SectionHeading";
import ReviewCard from "~/components/ReviewCard";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Local Customer",
    rating: 5,
    text: "Best barbershop in Santa Maria. The fades are always on point and the atmosphere is so welcoming. My go-to spot every time.",
  },
  {
    name: "Santa Maria Resident",
    rating: 5,
    text: "Took my son here for his first haircut and they were so patient and kind. Great with kids and a clean, comfortable shop.",
  },
  {
    name: "Local Customer",
    rating: 5,
    text: "Finally found a barber who actually listens to what I want. Attention to detail is unmatched. Highly recommend the hot towel shave.",
  },
  {
    name: "Santa Maria Resident",
    rating: 4,
    text: "Consistent quality cuts at fair prices. The barbers are friendly and professional. Been coming here regularly and never disappointed.",
  },
  {
    name: "Local Customer",
    rating: 5,
    text: "The straight razor shave is an experience everyone should try. Smooth, relaxing, and expertly done. Cleanest shop in town.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-20 lg:py-28 bg-white"
      aria-label="Customer Reviews"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Trusted by Santa Maria families"
        />

        {/* Google rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-cream/50 rounded-full px-6 py-3 border border-tan/30">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i <= 4 ? "fill-gold text-gold" : "fill-gold/40 text-gold/40"}`}
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="font-serif font-bold text-2xl text-charcoal">
              4.6
            </span>
            <span className="text-charcoal/50 text-sm">
              Based on 100+ Google reviews
            </span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 5).map((review, i) => (
            <ReviewCard
              key={i}
              name={review.name}
              rating={review.rating}
              text={review.text}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
