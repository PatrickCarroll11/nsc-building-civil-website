import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much does it cost to build a house in Longford?",
    a: "The cost of building a new home in Longford typically ranges from €1,800 to €2,500+ per square metre depending on specification, materials, and site conditions. Factors such as design complexity, ground conditions, and finishes will all influence the final price. We provide detailed, transparent quotes after an initial consultation so you know exactly what to expect — contact us for a free, no-obligation estimate tailored to your project."
  },
  {
    q: "How quickly can NSC Building & Civil respond to an enquiry or site visit?",
    a: "We aim to respond to all enquiries within 24 hours and can usually arrange a site visit or consultation within 3–5 working days. For urgent or time-sensitive projects, we do our best to accommodate faster turnaround. You can reach us by phone on 086 844 7778 or by email and we'll get back to you as promptly as possible."
  },
  {
    q: "What areas do NSC Building & Civil cover?",
    a: "We are based in Longford and carry out projects throughout County Longford and the surrounding counties including Westmeath, Leitrim, Roscommon, Cavan, Meath, Offaly, Kildare, Dublin, Wicklow, Louth, and Laois. If you're unsure whether we cover your location, just give us a call and we'll be happy to help."
  },
  {
    q: "Do I need planning permission for a home extension or renovation in Longford?",
    a: "Whether planning permission is required depends on the scope and nature of the works. Many smaller extensions and alterations fall under exempted development in Ireland, meaning full planning permission may not be needed. However, this depends on factors such as the size of the extension, proximity to boundaries, and whether the property is in a protected or sensitive area. We can advise you during our initial consultation and work with you to ensure full compliance with Longford County Council regulations."
  },
  {
    q: "Are you fully insured and certified for building and civil engineering work?",
    a: "Yes. NSC Building & Civil is fully insured and our team holds the relevant certifications and qualifications required for both residential and commercial construction as well as civil engineering projects in Ireland. We are ISO certified and members of the Local Chamber of Commerce. We are happy to provide proof of insurance and credentials on request, giving you full peace of mind before any work begins."
  },
  {
    q: "How long does a typical house build or major renovation take in Longford?",
    a: "Timelines vary depending on the size and complexity of the project. A standard new-build home in Longford typically takes between 9 and 14 months from breaking ground to completion, while a full renovation project can range from 6 to 20 weeks. Factors such as planning permission, ground conditions, material lead times, and weather can all affect the schedule. We provide a detailed project programme at the outset and keep you informed throughout every stage of the build."
  }
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 section-alt">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Got Questions?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Answers to the most common questions we receive from homeowners and businesses across Longford and the surrounding counties.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
          <div className="divide-y divide-border">
            {faqs.map((faq, i) => (
              <div key={i} className="px-6 md:px-8">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-accent transition-colors"
                  aria-expanded={open === i}
                >
                  <span className="font-semibold text-base leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 text-accent ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open === i && (
                  <p className="pb-6 text-muted-foreground leading-relaxed text-[0.95rem]">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          Still have questions?{" "}
          <a
            href="tel:0868447778"
            className="text-accent font-semibold hover:underline underline-offset-2"
          >
            Call us on 086 844 7778
          </a>{" "}
          and we'll be happy to help.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;