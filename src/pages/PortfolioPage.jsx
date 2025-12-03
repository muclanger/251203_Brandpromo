import React from "react";

export default function PortfolioPage() {
  const projects = [
    { id: 1, title: "Modernes E-Commerce Design", category: "Web Design", image: "/img/homepage1/video_area/1.jpg" },
    { id: 2, title: "Corporate Branding", category: "Branding", image: "/img/homepage1/video_area/2.jpg" },
    { id: 3, title: "Social Media Kampagne", category: "Social Media", image: "/img/homepage1/video_area/3.jpg" },
    { id: 4, title: "App Interface Design", category: "UI/UX", image: "/img/homepage1/video_area/4.jpg" },
    { id: 5, title: "Restaurant Branding", category: "Branding", image: "/img/homepage1/video_area/5.jpg" },
    { id: 6, title: "Fashion Website", category: "Web Design", image: "/img/homepage1/video_area/6.jpg" },
  ];

  return (
    <div className="container py-20">
      <h1 className="text-5xl font-bold mb-4 gradient-text">Portfolio</h1>
      <p className="text-text-muted mb-12 text-lg">Unsere neuesten Projekte und Erfolgsgeschichten</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="glass rounded-2xl overflow-hidden card-hover transition-all group cursor-pointer">
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
              <div className="text-brand text-sm font-semibold mb-2">{project.category}</div>
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
