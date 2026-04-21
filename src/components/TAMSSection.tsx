import { CheckCircle2, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const badges = [
  "ISO Certified",
  "Fully Insured",
  "Local Chamber of Commerce Member",
];

export default function TAMSSection() {
  return (
    <section className="py-24 bg-primary/[0.04] border-y border-primary/10">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {/* Icon Circle */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center shadow-sm">
            <HardHat className="w-10 h-10 text-accent" />
          </div>
        </div>

        {/* Label */}
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
          Our Credentials
        </p>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
          Trusted Building &amp; Civil Specialists
        </h2>

        {/* Body */}
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
          Our team is fully qualified and insured, ensuring all projects are
          completed to the highest standards of safety and quality.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
          We hold certifications that reflect our commitment to excellence in the
          industry, giving you complete confidence in every project we undertake.
        </p>

        {/* CTA Button */}
        <Button
          asChild
          size="lg"
          className="mb-16 px-8 py-6 h-auto font-semibold shadow-lg bg-accent text-accent-foreground hover:bg-accent/90"
        >
          <Link to="/contact">Ask About Our Services</Link>
        </Button>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
          {badges.map((badge) => (
            <div
              key={badge}
              className="flex flex-col items-center gap-3 bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm font-semibold text-foreground text-center leading-snug">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}