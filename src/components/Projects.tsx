import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
    {
        title: "HRIS System",
        description:
            "An in-house Human Resource Information System designed to manage employee profiles, organizational structure, attendance, and role-based access with secure authentication.",
        technologies: ["Angular", "Ionic", "Java", "Spring Boot", "PostgreSQL"],
        featured: true,
    },
    {
        title: "Seat Allocation System",
        description:
            "An internal seat allocation and management system that automates seat distribution based on predefined rules, employee preferences, and organizational hierarchy.",
        technologies: ["React", "Express", "MongoDB", "OAuth", "NodeJS"],
        featured: true,
    },
    {
        title: "Blog Platform",
        description:
            "A modern blogging platform with markdown support, user authentication, and comment system.",
        technologies: ["React", "Express", "MongoDB", "JWT"],
        github: "https://github.com/Ansh0030/blog-ui",
        live: "https://blog-ui-three.vercel.app/",
        featured: false,
    },
    {
        title: "Weather Dashboard",
        description:
            "Real-time weather application with location-based forecasts, interactive maps, and weather alerts.",
        technologies: ["Angular", "Ionic", "OpenWeather API", "Chart.js"],
        github: "https://github.com/Ansh0030/WeatherAPP",
        live: "https://drive.google.com/file/d/1u-Khp9SZuacljpcvoCgFeE-5oi-hAWch/view?usp=drive_link",
        featured: false,
    },
    {
        title: "Seat Allocation System Android App",
        description:
            "A Seat Allocation system with an Android mobile app built using Ionic and Angular, sharing a common backend.",
        technologies: [
            "Ionic",
            "Angular",
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
            "Android Studio",
        ],
        github: "https://github.com/Ansh0030/seat_allocation",
        live: "https://drive.google.com/file/d/1E6BtlOlalkBYRB069Q6IqDeBgKVxHxfJ/view?usp=drive_link",
        featured: true,
    },

    {
        title: "Chat Application",
        description:
            "Real-time messaging app with private/group chats, file sharing, and message encryption.",
        technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
        github: "https://github.com/Ansh0030/Chat-Application",
        featured: false,
    },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group p-6 rounded-xl bg-card border border-border hover-lift ${
        isVisible ? "scroll-visible-scale" : "scroll-hidden-scale"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-muted-foreground transition-colors">
        {project.title}
      </h3>

      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2 py-1 text-xs font-mono bg-secondary text-foreground rounded transition-transform hover:scale-105"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 ml-1">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="w-4 h-4" />
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div
            ref={titleRef}
            className={`${titleVisible ? "scroll-visible" : "scroll-hidden"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-foreground mb-12" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
