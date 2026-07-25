import { Phone, MapPin, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 lg:pt-24 pb-16 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background warmth */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-tan/30 to-cream" aria-hidden="true" />
      <div className="absolute inset-0 barber-stripe" aria-hidden="true" />

      {/* Decorative barber pole accent */}
      <div
        className="absolute top-32 -right-16 w-64 h-8 rotate-45 opacity-10"
        aria-hidden="true"
        style={{
          background: `repeating-linear-gradient(
            90deg,
            #2E6B3F 0px, #2E6B3F 20px,
            #F7F3EB 20px, #F7F3EB 24px,
            #A52A2A 24px, #A52A2A 44px,
            #F7F3EB 44px, #F7F3EB 48px
          )`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal leading-tight mb-6">
              Santa Maria's{" "}
              <span className="text-evergreen">Trusted Family</span>{" "}
              Barbershop
            </h1>
            <p className="text-lg sm:text-xl text-charcoal/70 leading-relaxed mb-8 max-w-lg">
              Quality haircuts, clean fades, beard grooming, and classic
              barbering with friendly service.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="tel:+18059374545"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-evergreen text-cream font-semibold rounded-xl hover:bg-evergreen-light transition-colors duration-200 shadow-md text-lg"
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-evergreen font-semibold rounded-xl hover:bg-tan/20 transition-colors duration-200 border-2 border-evergreen/20 text-lg"
              >
                <MapPin className="w-5 h-5" aria-hidden="true" />
                Get Directions
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 text-sm text-charcoal/60">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  <Star className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
                  <Star className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
                  <Star className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
                  <Star className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
                  <Star className="w-4 h-4 fill-gold/50 text-gold/50" aria-hidden="true" />
                </div>
                <span className="font-semibold text-charcoal">4.6</span>
                <span>(100+ Reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-evergreen" aria-hidden="true" />
                <span>Tue–Fri 9AM–6PM | Sat 8AM–2PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-evergreen" aria-hidden="true" />
                <span>3420 Orcutt Rd, Santa Maria</span>
              </div>
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="aspect-[4/5] bg-gradient-to-br from-evergreen/10 to-tan/30 rounded-2xl border-2 border-evergreen/10 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  {/* Classic barber icon */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-evergreen/10 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-evergreen"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
                      />
                    </svg>
                  </div>
                  <p className="font-serif text-2xl font-bold text-evergreen mb-2">
                    Evergreen
                  </p>
                  <p className="text-charcoal/50 text-sm">Barber Shop</p>
                  <div className="mt-6 h-1 w-16 barber-stripe opacity-60 mx-auto" aria-hidden="true" />
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-tan/30"
              >
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i <= 4 ? "fill-gold text-gold" : "fill-tan/50 text-tan/50"}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="font-bold text-sm text-charcoal">4.6</span>
                </div>
                <p className="text-xs text-charcoal/50 mt-1">100+ Google Reviews</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
