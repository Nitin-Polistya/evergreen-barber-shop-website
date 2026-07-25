import { Phone, MapPin, Clock, Scissors } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Hours", href: "#hours" },
  { label: "Location", href: "#location" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-evergreen-dark text-cream/90" role="contentinfo">
      {/* Barber pole accent stripe */}
      <div className="h-1 barber-stripe opacity-30" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-6 h-6 text-tan-light" aria-hidden="true" />
              <span className="font-serif font-bold text-xl text-cream">
                Evergreen Barber Shop
              </span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed mb-4">
              Santa Maria's trusted family barbershop — quality cuts and friendly
              service in the heart of the community.
            </p>
            <p className="text-cream/50 text-xs italic">
              Made with care in Santa Maria
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif font-semibold text-cream text-lg mb-4">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-cream/70 hover:text-cream text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="font-serif font-semibold text-cream text-lg mb-4">
              Visit Us
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-tan-light mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-cream/70">
                  3420 #101 Orcutt Rd<br />
                  Santa Maria, CA 93455
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-tan-light shrink-0" aria-hidden="true" />
                <a
                  href="tel:+18059374545"
                  className="text-cream/70 hover:text-cream transition-colors"
                >
                  (805) 937-4545
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-tan-light mt-0.5 shrink-0" aria-hidden="true" />
                <div className="text-cream/70 text-xs leading-relaxed">
                  <span className="block">Tue–Fri: 9AM–6PM</span>
                  <span className="block">Sat: 8AM–2PM</span>
                  <span className="block">Sun–Mon: Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-cream/10 text-center text-cream/40 text-xs">
          &copy; {new Date().getFullYear()} Evergreen Barber Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
