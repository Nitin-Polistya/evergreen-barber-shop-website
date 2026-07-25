import { Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 overflow-hidden"
      aria-label="Call to Action"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-evergreen" aria-hidden="true" />
      <div className="absolute inset-0 barber-stripe opacity-10" aria-hidden="true" />
      <div className="absolute inset-0 textured-bg opacity-10" aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
            Ready for Your Next Haircut?
          </h2>
          <p className="text-cream/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Stop by during business hours or give us a call. We'll have you
            looking sharp in no time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18059374545"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cream text-evergreen font-semibold rounded-xl hover:bg-tan-light transition-colors duration-200 shadow-lg text-lg"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call Now
            </a>
            <a
              href="#location"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("location")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-cream font-semibold rounded-xl hover:bg-cream/10 transition-colors duration-200 border-2 border-cream/30 text-lg"
            >
              <MapPin className="w-5 h-5" aria-hidden="true" />
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
