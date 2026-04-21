export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  coverImage: string;
  images: string[];
}

export const projects: Project[] = [
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
export const categories: string[] = [...new Set(projects.map((p) => p.category))];
