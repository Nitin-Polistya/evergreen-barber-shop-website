import { useState } from "react";
import SectionHeading from "~/components/SectionHeading";
import Lightbox from "~/components/Lightbox";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://placehold.co/600x400/2E6B3F/F7F3EB?text=Classic+Haircut",
    alt: "A classic men's haircut being performed by a professional barber",
    w: 600,
    h: 400,
  },
  {
    src: "https://placehold.co/400x600/D8C2A0/1E1E1E?text=Straight+Razor+Shave",
    alt: "Traditional straight razor shave with hot lather preparation",
    w: 400,
    h: 600,
  },
  {
    src: "https://placehold.co/500x500/F7F3EB/2E6B3F?text=Beard+Trim",
    alt: "Precision beard trimming and grooming service",
    w: 500,
    h: 500,
  },
  {
    src: "https://placehold.co/600x400/1E1E1E/D8C2A0?text=Fade+Work",
    alt: "Clean fade haircut being crafted with attention to detail",
    w: 600,
    h: 400,
  },
  {
    src: "https://placehold.co/400x600/2E6B3F/F7F3EB?text=Barber+Chair",
    alt: "Classic barber chair in a warm, welcoming barbershop interior",
    w: 400,
    h: 600,
  },
  {
    src: "https://placehold.co/500x500/D8C2A0/1E1E1E?text=Hot+Towel+Shave",
    alt: "Relaxing hot towel shave treatment in progress",
    w: 500,
    h: 500,
  },
  {
    src: "https://placehold.co/600x400/F7F3EB/2E6B3F?text=Kids+Haircut",
    alt: "A friendly, patient kids haircut in a family-friendly environment",
    w: 600,
    h: 400,
  },
  {
    src: "https://placehold.co/400x600/1E1E1E/D8C2A0?text=Braiding",
    alt: "Expert braiding and cornrow styling in progress",
    w: 400,
    h: 600,
  },
  {
    src: "https://placehold.co/500x500/2E6B3F/F7F3EB?text=Barber+Tools",
    alt: "Professional barber tools arranged on a clean workstation",
    w: 500,
    h: 500,
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
    );
  };
  const nextImage = () => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  };

  return (
    <section
      id="gallery"
      className="py-20 lg:py-28 bg-cream"
      aria-label="Photo Gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Gallery"
          subtitle="A look inside our shop and our work"
        />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="break-inside-avoid"
            >
              <button
                onClick={() => openLightbox(i)}
                className="block w-full overflow-hidden rounded-xl group focus-visible:outline-2 focus-visible:outline-evergreen"
                aria-label={`View larger image: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  loading="lazy"
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </section>
  );
}
