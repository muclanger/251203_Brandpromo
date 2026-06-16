import React, { useState } from "react";

export default function PortfolioPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Melanie Schlüchtermann",
      category: "About Me",
      image: "/img/homepage1/video_area/1.jpg",
      videoUrl: "https://filedn.eu/l8EFvi7k8xipJUKFtuECc5k/Brandpromo/Clips/Melanie%20Schl%C3%BCchtermann_About%20Me_v5.mp4"
    },
    {
      id: 2,
      title: "Hallo Ergo",
      category: "Image Film",
      image: "/img/homepage1/video_area/2.jpg",
      videoUrl: "https://filedn.eu/l8EFvi7k8xipJUKFtuECc5k/Brandpromo/Clips/ERGO%20v7%2016-9.mp4"
    },
    {
      id: 3,
      title: "Sushi-Bike",
      category: "Redaktionelles",
      image: "/img/homepage1/video_area/3.jpg",
      videoUrl: "https://filedn.eu/l8EFvi7k8xipJUKFtuECc5k/Brandpromo/Clips/Sushi%20v5.mp4"
    },
    {
      id: 4,
      title: "We Make Change Fly",
      category: "Ads",
      image: "/img/homepage1/video_area/4.jpg",
      videoUrl: "https://filedn.eu/l8EFvi7k8xipJUKFtuECc5k/Brandpromo/Clips/LH_Mood_Final_V4.mp4"
    },
    {
      id: 5,
      title: "#zurückgeben",
      category: "Social Media",
      image: "/img/homepage1/video_area/5.jpg",
      videoUrl: "https://filedn.eu/l8EFvi7k8xipJUKFtuECc5k/Brandpromo/Clips/Nestl%C3%A9%20-%20Zur%C3%BCckgeben.mp4"
    },
    {
      id: 6,
      title: "Stressed?",
      category: "Social Media",
      image: "/img/homepage1/video_area/6.jpg",
      videoUrl: "https://filedn.eu/l8EFvi7k8xipJUKFtuECc5k/Brandpromo/Clips/LH%20v2%20Insta.mp4"
    },
  ];

  const openVideo = (project) => {
    setSelectedVideo(project);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="container py-20">
      <h1 className="text-5xl font-bold mb-4 gradient-text">Portfolio</h1>
      <p className="text-text-muted mb-12 text-lg">Meine neuesten Projekte und Erfolgsgeschichten</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => openVideo(project)}
            className="glass rounded-2xl overflow-hidden card-hover transition-all group cursor-pointer"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <div className="text-brand text-sm font-semibold mb-2">{project.category}</div>
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-brand transition-colors text-4xl font-light"
              aria-label="Schließen"
            >
              ×
            </button>
            <div className="glass rounded-2xl overflow-hidden">
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                className="w-full h-auto"
              />
              <div className="p-6">
                <div className="text-brand text-sm font-semibold mb-2">{selectedVideo.category}</div>
                <h3 className="text-2xl font-bold">{selectedVideo.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
