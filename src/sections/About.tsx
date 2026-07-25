import SectionHeading from "~/components/SectionHeading";
import { motion } from "framer-motion";
import { Heart, Scissors, Users, Sparkles } from "lucide-react";

const featureCards = [
  {
    icon: Heart,
    label: "Friendly Service",
    description: "Welcoming, genuine care for every customer who walks in.",
  },
  {
    icon: Scissors,
    label: "Professional Haircuts",
    description: "Skilled barbers who take pride in every cut and detail.",
  },
  {
    icon: Users,
    label: "Family-Friendly",
    description: "A comfortable space for all ages, from kids to seniors.",
  },
  {
    icon: Sparkles,
    label: "Classic & Modern",
    description: "Timeless techniques with today's styles, done right.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-white"
      aria-label="About Evergreen Barber Shop"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Our Shop"
          subtitle="A place where quality meets community"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* LEFT: text + feature cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <p className="text-charcoal/70 leading-relaxed text-base sm:text-lg">
              At Evergreen Barber Shop, we believe a great haircut is about more
              than just style — it's about confidence, care, and community. Every
              visit is an opportunity to connect, relax, and leave feeling your
              best. That's the Evergreen standard, and it's what makes our shop
              feel like home.
            </p>

            {/* 2×2 feature cards grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {featureCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.15 * i }}
                  className="bg-cream/50 rounded-xl p-3 sm:p-4 border border-tan/20 hover:border-evergreen/20 hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-full bg-evergreen/10 flex items-center justify-center mb-2">
                    <card.icon className="w-4 h-4 text-evergreen" aria-hidden="true" />
                  </div>
                  <h4 className="font-semibold text-sm text-charcoal mb-0.5">
                    {card.label}
                  </h4>
                  <p className="text-xs text-charcoal/50 leading-snug">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: decorative visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square bg-gradient-to-br from-evergreen/5 to-tan/20 rounded-2xl flex items-center justify-center border border-evergreen/10 shadow-sm">
              <div className="text-center p-8">
                <div className="w-28 h-28 mx-auto mb-5 rounded-full bg-evergreen/10 flex items-center justify-center border-2 border-evergreen/10">
                  <svg
                    className="w-14 h-14 text-evergreen"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <p className="font-serif text-2xl font-bold text-evergreen">
                  Serving Santa Maria
                </p>
                <p className="text-charcoal/40 text-sm mt-2">
                  Proudly part of the community
                </p>
                <div className="mt-6 h-1 w-16 barber-stripe opacity-60 mx-auto" aria-hidden="true" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
