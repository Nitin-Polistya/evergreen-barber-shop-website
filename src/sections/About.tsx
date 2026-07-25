import SectionHeading from "~/components/SectionHeading";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square bg-gradient-to-br from-evergreen/5 to-tan/20 rounded-2xl flex items-center justify-center border border-evergreen/5">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-evergreen/10 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-evergreen"
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
                <p className="font-serif text-xl font-semibold text-evergreen">
                  Serving Santa Maria
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <p className="text-charcoal/70 leading-relaxed">
              At Evergreen Barber Shop, we believe a great haircut is about more
              than just style — it's about confidence, care, and community. Our
              team is dedicated to providing every customer with a comfortable,
              welcoming experience from the moment they walk through the door.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              We take pride in our craft, whether it's a classic cut, a clean
              fade, or a traditional straight razor shave. Every service is
              performed with attention to detail and a genuine commitment to
              getting it right. Our shop is a place where families feel at home,
              where conversations flow as easily as the clippers, and where
              everyone — from toddlers getting their first haircut to seniors
              maintaining their signature look — is treated like family.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              As a proud part of the Santa Maria community, we're honored to be
              a place where neighbors connect, stories are shared, and people
              leave looking and feeling their best. That's the Evergreen
              standard.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
