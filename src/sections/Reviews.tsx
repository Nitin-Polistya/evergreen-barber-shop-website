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

        {/* Prominent Google rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="relative bg-gradient-to-br from-cream via-white to-tan/20 rounded-2xl px-6 sm:px-10 py-6 sm:py-8 border border-tan/30 shadow-md text-center max-w-sm w-full mx-4 sm:mx-auto">
            {/* Google "G" reference */}
            <div className="mb-3">
              <span className="inline-flex items-center gap-1.5 text-charcoal/40 text-sm font-medium">
                <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google Reviews
              </span>
            </div>

            {/* Large stars */}
            <div className="flex items-center justify-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-8 h-8 sm:w-10 sm:h-10 ${i <= 4 ? "fill-gold text-gold" : "fill-gold/40 text-gold/40"}`}
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Large rating number + count side by side */}
            <div className="flex items-baseline justify-center gap-4">
              <span className="font-serif font-bold text-5xl sm:text-6xl text-charcoal">
                4.6
              </span>
              <div className="text-left">
                <span className="block text-sm text-charcoal/60 font-medium">
                  Out of 5
                </span>
                <span className="block text-sm text-charcoal/50 mt-0.5">
                  100+ Google Reviews
                </span>
              </div>
            </div>
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
