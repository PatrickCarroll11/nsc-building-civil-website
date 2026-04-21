import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const recentProjects = [
  {
    "id": "residential-new-build-longford",
    "title": "4-Bed Residential New Build, Co. Longford",
    "description": "NSC Building & Civil completed a full residential new build for a private client outside Longford town, managing all stages from foundation excavation through to final fit-out. The project was delivered on schedule and to a high specification, including block construction, insulated roof structure, and external landscaping.",
    "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "commercial-warehouse-westmeath",
    "title": "Industrial Warehouse Construction, Co. Westmeath",
    "description": "NSC designed and constructed a large-span steel-framed warehouse unit for a commercial client near Mullingar, including reinforced concrete floor slab, drainage infrastructure, and external yard formation. The completed facility met all planning and building regulation requirements and was handed over ahead of the agreed programme.",
    "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
  },
  {
    "id": "civil-road-drainage-roscommon",
    "title": "Road Formation & Drainage Works, Co. Roscommon",
    "description": "NSC Building & Civil carried out extensive road formation, culvert installation, and surface water drainage works for a rural development scheme in County Roscommon. The works involved bulk earthworks, stone sub-base construction, and the installation of precast concrete drainage structures to an adoptable standard.",
    "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
  }
];

const RecentWork = () => (
  <section className="py-24 section-alt">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Work</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A sample of recent building & civil engineering projects completed across Longford and surrounding areas.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {recentProjects.map((project) => (
          <Link key={project.id} to="/projects" className="group block rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg hover:border-accent/20 transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-base mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Button asChild variant="outline" className="px-6">
          <Link to="/projects" className="flex items-center gap-2">
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default RecentWork;