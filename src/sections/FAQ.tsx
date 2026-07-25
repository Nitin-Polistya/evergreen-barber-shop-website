import SectionHeading from "~/components/SectionHeading";
import FAQAccordion from "~/components/FAQAccordion";

const faqItems = [
  {
    question: "Do I need an appointment?",
    answer:
      "Walk-ins are welcome! You can stop by during business hours. For current wait times, feel free to call ahead at (805) 937-4545.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Please contact the shop directly at (805) 937-4545 to confirm which payment methods are currently accepted.",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes, free parking is available in the shopping center lot right outside our door.",
  },
  {
    question: "Do you cut children's hair?",
    answer:
      "Absolutely! Kids of all ages are welcome at Evergreen. Our barbers are patient, friendly, and experienced with children's cuts.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer a full range of barbering services including haircuts, fades, beard trims, straight razor shaves, hot towel shaves, hair coloring, braiding, eyebrow grooming, custom hair designs, and more. Check out our Services section above for the complete list.",
  },
  {
    question: "What are your hours?",
    answer:
      "We're open Tuesday through Friday from 9:00 AM to 6:00 PM, and Saturday from 8:00 AM to 2:00 PM. We're closed on Sundays and Mondays.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-cream"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before your visit"
        />
        <FAQAccordion items={faqItems} />
      </div>
    </section>
  );
}
