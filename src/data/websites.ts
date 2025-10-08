export interface IWebsiteProject {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  technologies: string[];
  category: string;
  date: string; // bisa gunakan Date jika parsing jadi objek Date
  
}

export const WEBSITE_DATA: IWebsiteProject[] =[
  {
    "id": "1",
    "title": "netflix clone",
    "description": "A Netflix Clone with responsive UI, movie browsing, and authentication features.",
    "url": "https://faanglix.netlify.app/",
    "imageUrl": "/PreviewImage/netflix_clone.png",
    "technologies": ["MongoDB", "Express", "React", "Node.js"],
    "category": "Web App",
    "date": "2025-05"
  },
  {
    "id": "2",
    "title": "Image model dashboard",
    "description": "An interactive dashboard that displays real-time predictions and confidence scores",
    "url": "https://teachable-with-arduino.netlify.app",
    "imageUrl": "/PreviewImage/tm.png",
    "technologies": ["Javascript", "HTML", "CSS", "Tensorflow.js"],
    "category": "Dashboard",
    "date": "2025-04"
  },
  {
    "id": "3",
    "title": "lynkf.site",
    "description": "A SaaS website for building link bio website",
    "url": "https://lynkf.site",
    "imageUrl": "/PreviewImage/lynkf.png",
    "technologies": ["NextJs", "TypeScript", "supabase", "Tailwind"],
    "category": "Web App",
    "date": "2025-09"
  },
  {
    "id": "4",
    "title": "UKMI ALFARUQ",
    "description": "Responsive landing page for campus Islamic organization with structured components.",
    "url": "https://landing-page-alfaruq.vercel.app",
    "imageUrl": "/PreviewImage/alfaruq.png",
    "technologies": ["Vite", "JavaScript", "CSS"],
    "category": "Landing Page",
    "date": "2025-04"
  },
  {
    "id": "5",
    "title": "Country explore",
    "description": "Responsive page for search any country and see the details (project learning)",
    "url": "country-explorer-sage.vercel.app",
    "imageUrl": "/PreviewImage/country.png",
    "technologies": ["Vue", "TypeScript", "CSS", "supabase"],
    "category": "Landing Page",
    "date": "2025-08"
  }
]
