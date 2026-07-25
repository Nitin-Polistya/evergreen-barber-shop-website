import SectionHeading from "~/components/SectionHeading";
import { Phone, MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export default function Location() {
  return (
    <section
      id="location"
      className="py-20 lg:py-28 bg-white"
      aria-label="Our Location"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Find Us"
          subtitle="Conveniently located on Orcutt Road"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 rounded-xl overflow-hidden border border-tan/30 shadow-sm h-80 lg:h-auto min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.5700420311784!2d-120.436727!3d34.943908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ec6c5e3c8c7b8d%3A0x6e6c9a5b3e5a5b8c!2s3420%20Orcutt%20Rd%20%23101%2C%20Santa%20Maria%2C%20CA%2093455!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Evergreen Barber Shop location map"
              className="w-full h-full"
            />
          </motion.div>

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-cream/50 rounded-xl p-8 border border-tan/30 flex flex-col justify-center"
          >
            <div className="space-y-6">
              <div>
                <h3 className="font-serif font-semibold text-xl text-charcoal mb-4">
                  Evergreen Barber Shop
                </h3>

                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-evergreen mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-charcoal/70 text-sm leading-relaxed">
                      3420 #101 Orcutt Rd
                      <br />
                      Santa Maria, CA 93455
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-evergreen shrink-0" aria-hidden="true" />
                  <a
                    href="tel:+18059374545"
                    className="text-charcoal/70 hover:text-evergreen text-sm font-medium transition-colors"
                  >
                    (805) 937-4545
                  </a>
                </div>
              </div>

              <div className="h-px bg-tan/50" aria-hidden="true" />

              <div className="space-y-3">
                <a
                  href="tel:+18059374545"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-evergreen text-cream font-semibold rounded-xl hover:bg-evergreen-light transition-colors duration-200 shadow-sm"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call Now
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=3420+Orcutt+Rd+%23101+Santa+Maria+CA+93455"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 border-2 border-evergreen/20 text-evergreen font-semibold rounded-xl hover:bg-evergreen/5 transition-colors duration-200"
                >
                  <Navigation className="w-5 h-5" aria-hidden="true" />
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
