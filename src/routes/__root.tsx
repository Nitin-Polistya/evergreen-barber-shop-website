import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Evergreen Barber Shop | Santa Maria's Trusted Family Barbershop" },
      {
        name: "description",
        content:
          "Evergreen Barber Shop in Santa Maria, CA offers quality haircuts, fades, beard grooming, straight razor shaves, and classic barbering for all ages. Walk-ins welcome.",
      },
      { name: "theme-color", content: "#2E6B3F" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Evergreen Barber Shop | Santa Maria's Trusted Family Barbershop" },
      { property: "og:description", content: "Quality haircuts, clean fades, beard grooming, and classic barbering with friendly service in Santa Maria, CA." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://evergreenbarbershop.com" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Evergreen Barber Shop | Santa Maria's Trusted Family Barbershop" },
      { name: "twitter:description", content: "Quality haircuts, clean fades, beard grooming, and classic barbering with friendly service." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap",
      },
      { rel: "canonical", href: "https://evergreenbarbershop.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BarberShop",
          name: "Evergreen Barber Shop",
          description:
            "Quality haircuts, clean fades, beard grooming, and classic barbering with friendly service in Santa Maria, CA.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "3420 #101 Orcutt Rd",
            addressLocality: "Santa Maria",
            addressRegion: "CA",
            postalCode: "93455",
            addressCountry: "US",
          },
          telephone: "+1-805-937-4545",
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "", closes: "" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "14:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "", closes: "" },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.6",
            reviewCount: "100",
            bestRating: "5",
          },
          priceRange: "$$",
          url: "https://evergreenbarbershop.com",
        }),
      },
    ],
  }),
  notFoundComponent: () => <div>Page not found</div>,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="textured-bg">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
