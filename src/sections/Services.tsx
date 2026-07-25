import SectionHeading from "~/components/SectionHeading";
import ServiceCard from "~/components/ServiceCard";
import {
  Scissors,
  Baby,
  Sparkles,
  User,
  Smile,
  Droplets,
  Waves,
  Palette,
  Crown,
  Eye,
  PenTool,
} from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Haircuts",
    description: "Classic and modern styles for all ages, tailored to you.",
  },
  {
    icon: Baby,
    title: "Kids Haircuts",
    description: "Patient, friendly cuts for the little ones in a comfortable setting.",
  },
  {
    icon: Sparkles,
    title: "Fades",
    description: "Clean, precise fade work — from low to high and everything in between.",
  },
  {
    icon: User,
    title: "Beard Trimming",
    description: "Shape, trim, and maintain your beard with expert care.",
  },
  {
    icon: Smile,
    title: "Mustache Styling",
    description: "Precision trimming and shaping for a polished look.",
  },
  {
    icon: Droplets,
    title: "Straight Razor Shaves",
    description: "Traditional hot lather straight razor shave for a smooth finish.",
  },
  {
    icon: Waves,
    title: "Hot Towel Shaves",
    description: "Relaxing hot towel treatment with a close, comfortable shave.",
  },
  {
    icon: Palette,
    title: "Hair Coloring",
    description: "Professional color services for men, done right.",
  },
  {
    icon: Crown,
    title: "Braiding",
    description: "Expert braiding and cornrow styles with precision.",
  },
  {
    icon: Eye,
    title: "Eyebrow Grooming",
    description: "Clean, natural eyebrow shaping that enhances your look.",
  },
  {
    icon: PenTool,
    title: "Custom Hair Designs",
    description: "Creative designs and line work for a unique, standout style.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-cream"
      aria-label="Our Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="Quality barbering for the whole family"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
