import { useState, useEffect } from "react";
import SectionHeading from "~/components/SectionHeading";
import { Clock } from "lucide-react";

const hours = [
  { day: "Monday", hours: "Closed", open: false },
  { day: "Tuesday", hours: "9:00 AM – 6:00 PM", open: true },
  { day: "Wednesday", hours: "9:00 AM – 6:00 PM", open: true },
  { day: "Thursday", hours: "9:00 AM – 6:00 PM", open: true },
  { day: "Friday", hours: "9:00 AM – 6:00 PM", open: true },
  { day: "Saturday", hours: "8:00 AM – 2:00 PM", open: true },
  { day: "Sunday", hours: "Closed", open: false },
];

export default function Hours() {
  const [today, setToday] = useState<number>(-1);

  useEffect(() => {
    // getDay() returns 0=Sun, 1=Mon, ..., 6=Sat
    // We want 0=Mon, 1=Tue, ..., 6=Sun
    const d = new Date().getDay();
    setToday(d === 0 ? 6 : d - 1);
  }, []);

  return (
    <section
      id="hours"
      className="py-20 lg:py-28 bg-cream"
      aria-label="Business Hours"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Business Hours"
          subtitle="Come by during open hours — walk-ins welcome"
        />

        <div className="bg-white rounded-xl border border-tan/30 overflow-hidden shadow-sm">
          <div className="flex items-center gap-3 px-6 py-4 bg-evergreen/5 border-b border-tan/20">
            <Clock className="w-5 h-5 text-evergreen" aria-hidden="true" />
            <span className="font-serif font-semibold text-evergreen">
              We're open today?{" "}
              {today >= 0 && hours[today].open ? (
                <span className="text-evergreen">Yes — until {hours[today].hours.split("–")[1]?.trim() || "closing"}</span>
              ) : (
                <span className="text-barber-red">Closed today</span>
              )}
            </span>
          </div>

          <div className="divide-y divide-tan/10">
            {hours.map((row, i) => (
              <div
                key={row.day}
                className={`flex items-center justify-between px-6 py-4 transition-colors ${
                  i === today
                    ? "bg-evergreen/5 border-l-4 border-l-evergreen"
                    : "border-l-4 border-l-transparent"
                }`}
                aria-current={i === today ? "true" : undefined}
              >
                <span
                  className={`font-medium ${
                    i === today ? "text-evergreen font-semibold" : row.open ? "text-charcoal" : "text-charcoal/30"
                  }`}
                >
                  {row.day}
                  {i === today && (
                    <span className="ml-2 text-xs font-normal text-evergreen/70">
                      Today
                    </span>
                  )}
                </span>
                <span
                  className={`text-sm ${
                    i === today
                      ? "text-evergreen font-semibold"
                      : row.open
                        ? "text-charcoal/70"
                        : "text-charcoal/30 italic"
                  }`}
                >
                  {row.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
