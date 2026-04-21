import { Link } from "react-router-dom";
import {
  Home,
  Building2,
  HardHat,
  Wrench,
  ClipboardList,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/CTASection";

const serviceDetails = [
  {
    title: "Residential Construction",
    seo: "Residential Construction Longford",
    description:
      "We specialize in building high-quality homes that meet your specifications. Our team is dedicated to providing exceptional craftsmanship and service.",
    features: [
      "Custom Designs",
      "Energy Efficient Solutions",
      "Quality Materials",
      "Experienced Team",
      "Timely Completion",
    ],
    icon: Home,
  },
  {
    title: "Commercial Construction",
    seo: "Commercial Construction Longford",
    description:
      "Our commercial construction services cater to businesses looking to create functional and modern spaces. We focus on delivering projects that support business growth.",
    features: [
      "Office Buildings",
      "Retail Spaces",
      "Industrial Units",
      "Cost-effective Solutions",
      "Innovative Designs",
    ],
    icon: Building2,
  },
  {
    title: "Civil Engineering",
    seo: "Civil Engineering Longford",
    description:
      "NSC Building & Civil provides comprehensive civil engineering services, including infrastructure development and maintenance. We ensure projects are completed with precision.",
    features: [
      "Infrastructure Development",
      "Structural Analysis",
      "Environmental Compliance",
      "Risk Management",
      "Sustainable Practices",
    ],
    icon: HardHat,
  },
  {
    title: "Renovations",
    seo: "Home Renovations Longford",
    description:
      "Our renovation services are designed to transform and enhance existing spaces. We work closely with clients to bring their vision to life with quality and efficiency.",
    features: [
      "Interior Upgrades",
      "Exterior Improvements",
      "Modern Designs",
      "Quality Finishes",
      "Attention to Detail",
    ],
    icon: Wrench,
  },
  {
    title: "Project Management",
    seo: "Construction Project Management Longford",
    description:
      "We offer efficient project management services, ensuring that all aspects of your construction project are handled professionally and within budget.",
    features: [
      "Comprehensive Planning",
      "Resource Management",
      "Risk Assessment",
      "Budget Control",
      "On-time Delivery",
    ],
    icon: ClipboardList,
  },
  {
    title: "Consultancy Services",
    seo: "Construction Consultancy Longford",
    description:
      "Our consultancy services provide expert advice and strategic planning for your construction projects. We help you make informed decisions and achieve successful outcomes.",
    features: [
      "Feasibility Studies",
      "Risk Analysis",
      "Design Consultancy",
      "Cost Estimation",
      "Project Strategy",
    ],
    icon: Lightbulb,
  },
];

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-black/40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              What We Offer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Our Building &<br />
              Civil Services
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-xl leading-relaxed">
              From residential builds to large-scale civil engineering, NSC
              Building & Civil delivers expert construction solutions across
              Longford and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Service Detail Cards */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-3 block">
              Full Service Offering
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Every project is delivered with precision, quality materials, and
              a team dedicated to exceeding your expectations.
            </p>
          </div>

          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.title}
                  className={`rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-accent/20 transition-all duration-300 bg-card overflow-hidden`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Left Column */}
                    <div
                      className={`p-8 flex flex-col justify-between ${
                        isEven ? "" : "md:order-2"
                      }`}
                    >
                      <div>
                        <div className="flex items-start gap-4 mb-5">
                          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                            <Icon className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-foreground leading-tight">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className="mb-5 text-xs font-semibold uppercase tracking-wider bg-primary/8 text-primary border-0"
                        >
                          {service.seo}
                        </Badge>
                        <p className="text-muted-foreground leading-relaxed text-base">
                          {service.description}
                        </p>
                      </div>
                      <div className="mt-6">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-bold shadow-lg hover:opacity-90 transition-opacity duration-200 text-sm"
                        >
                          Get a Free Quote
                        </Link>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div
                      className={`p-8 section-alt flex flex-col justify-center ${
                        isEven ? "" : "md:order-1"
                      }`}
                    >
                      <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-5">
                        What's Included
                      </p>
                      <ul className="flex flex-col gap-4">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-foreground"
                          >
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-primary text-primary-foreground py-14">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent block mb-2">
                Why Choose NSC?
              </span>
              <p className="text-2xl font-bold text-white max-w-md leading-snug">
                Quality craftsmanship you can trust across every project.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              {[
                "Experienced Professionals",
                "Fully Insured",
                "Local Expertise",
                "Customer-First Approach",
              ].map((badge) => (
                <span
                  key={badge}
                  className="bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}