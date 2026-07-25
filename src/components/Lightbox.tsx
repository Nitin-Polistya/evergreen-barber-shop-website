import { useEffect, useCallback, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  images: { src: string; alt: string }[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const isOpen = currentIndex !== null;
  const touchStartX = useRef<number | null>(null);
  const [touchDiff, setTouchDiff] = useState(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  // Handle swipe / touch gestures
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setTouchDiff(0);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.touches[0].clientX - touchStartX.current;
    setTouchDiff(diff);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (touchStartX.current === null) return;
    if (touchDiff > 60) {
      onPrev();
    } else if (touchDiff < -60) {
      onNext();
    }
    touchStartX.current = null;
    setTouchDiff(0);
  }, [touchDiff, onPrev, onNext]);

  if (!isOpen || currentIndex === null) return null;

  const image = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal/85 backdrop-blur-sm p-4 sm:p-6"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 text-cream/80 hover:text-cream bg-charcoal/50 hover:bg-charcoal/60 rounded-full transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" aria-hidden="true" />
        </button>

        {/* Previous button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 sm:left-4 z-20 p-3 text-cream/80 hover:text-cream bg-charcoal/50 hover:bg-charcoal/60 rounded-full transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" />
        </button>

        {/* Next button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 sm:right-4 z-20 p-3 text-cream/80 hover:text-cream bg-charcoal/50 hover:bg-charcoal/60 rounded-full transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" />
        </button>

        {/* Image with caption */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="max-w-5xl w-full max-h-[80vh] relative flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            transform: touchDiff ? `translateX(${touchDiff}px)` : undefined,
            transition: touchDiff ? "none" : undefined,
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
            draggable={false}
          />

          {/* Caption */}
          <p className="text-cream/80 text-sm sm:text-base mt-4 text-center max-w-lg leading-relaxed px-2">
            {image.alt}
          </p>

          {/* Counter */}
          <p className="text-cream/50 text-xs mt-2">
            {currentIndex + 1} / {images.length}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
