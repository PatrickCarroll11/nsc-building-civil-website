import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/CTASection";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  coverImage: string;
  images: string[];
}

const projects: Project[] = [
  {
    "id": "residential-new-build-longford",
    "title": "4-Bed Residential New Build, Co. Longford",
    "description": "NSC Building & Civil completed a full residential new build for a private client outside Longford town, managing all stages from foundation excavation through to final fit-out. The project was delivered on schedule and to a high specification, including block construction, insulated roof structure, and external landscaping.",
    "category": "Residential",
    "imageKeyword": "construction",
    "coverImage": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
    ]
  },
  {
    "id": "commercial-warehouse-westmeath",
    "title": "Industrial Warehouse Construction, Co. Westmeath",
    "description": "NSC designed and constructed a large-span steel-framed warehouse unit for a commercial client near Mullingar, including reinforced concrete floor slab, drainage infrastructure, and external yard formation. The completed facility met all planning and building regulation requirements and was handed over ahead of the agreed programme.",
    "category": "Commercial",
    "imageKeyword": "warehouse",
    "coverImage": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
    ]
  },
  {
    "id": "civil-road-drainage-roscommon",
    "title": "Road Formation & Drainage Works, Co. Roscommon",
    "description": "NSC Building & Civil carried out extensive road formation, culvert installation, and surface water drainage works for a rural development scheme in County Roscommon. The works involved bulk earthworks, stone sub-base construction, and the installation of precast concrete drainage structures to an adoptable standard.",
    "category": "Civil",
    "imageKeyword": "excavation",
    "coverImage": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop",
    "images": [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
    ]
  }
];
const allCategories = [...new Set(projects.map((p) => p.category))];

const Projects = () => {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-accent">Projects</span>
          </h1>
          <p className="text-lg opacity-80 max-w-2xl">
            A selection of building & civil engineering work completed across Longford and surrounding areas.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          {allCategories.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {["All", ...allCategories].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    active === cat
                      ? "bg-accent text-accent-foreground border-accent"
                      : "border-border hover:border-accent/40 hover:text-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div key={project.id} className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg hover:border-accent/20 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-accent/10 text-accent hover:bg-accent/20 border-0 text-xs font-semibold">
                    {project.category}
                  </Badge>
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Projects;
