import SectionHeading from "~/components/SectionHeading";
import { motion } from "framer-motion";
import { Award, Sparkles, Heart, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Experienced Barbers",
    description:
      "Skilled professionals dedicated to their craft, with the expertise to deliver the perfect cut every time.",
  },
  {
    icon: Sparkles,
    title: "Clean Environment",
    description:
      "A spotless, welcoming shop you'll feel comfortable in — we take cleanliness seriously.",
  },
  {
    icon: Heart,
    title: "Family Friendly",
    description:
      "All ages welcome, from toddlers to seniors. Everyone gets the same care and attention.",
  },
  {
    icon: ThumbsUp,
    title: "Quality Service",
    description:
      "We take our time to get every detail right. No rush — just great results.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 lg:py-28 bg-white"
      aria-label="Why Choose Evergreen Barber Shop"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Us"
          subtitle="What sets Evergreen apart"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-8 bg-cream/50 rounded-xl border border-tan/20 hover:border-evergreen/20 hover:shadow-sm transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-evergreen/10 flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-evergreen" aria-hidden="true" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-charcoal mb-2">
                {feature.title}
              </h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
