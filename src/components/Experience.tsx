import { Building2, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
    {
        title: "Seat Allocation System",
        company: "Internal Project / Product Development",
        location: "Gurugram, India",
        period: "2024",
        duration: "Ongoing",
        type: "Full Stack Development (MERN)",
        description: [
            "Developed a Seat Allocation system using the MERN stack for managing seat assignments efficiently",
            "Created multiple dynamic and reusable forms for seat requests, approvals, and allocation workflows",
            "Implemented business logic for seat allocation based on user roles, availability, and predefined rules",
            "Built RESTful APIs using Node.js and Express.js to handle seat data and user interactions",
            "Designed responsive and interactive UI using React with form validation and state management",
            "Integrated MongoDB to store seat layouts, user information, and allocation history",
            "Ensured smooth data flow between frontend and backend using Axios and API services",
            "Used Git for version control and followed modular project structure",
        ],
        technologies: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JavaScript",
            "REST APIs",
            "Axios",
            "Git",
        ],
    },
    {
        title: "Associate Software Engineer",
        company: "MPC Cloud Consulting PVT LTD",
        location: "Gurugram, Haryana",
        period: "Jun 2024 - Present",
        duration: "1.6 years",
        type: "Full-time",
        description: [
            "Developed and maintained full-stack web applications using Angular, Ionic and Spring boot",
            "Built RESTful APIs with Java and Spring boot, integrating with Postgresql",
            "Created responsive and interactive UIs with Ionic and modern CSS frameworks",
            "Collaborated with cross-functional teams in Agile/Scrum environment",
            "Implemented Java Spring Boot microservices for enterprise applications",
            "Developed hybrid mobile applications using Ionic and Angular",
        ],
        technologies: [
            "Java",
            "Spring Boot",
            "Angular",
            "Ionic",
            "PostgreSQL",
            "Git",
            "Android Studio",
        ],
    },
    {
        title: "Software Developer Intern",
        company: "MPC Cloud Consulting PVT LTD",
        location: "Gurugram, Haryana",
        period: "Jan 2024 - May 2024",
        duration: "5 months",
        type: "Internship",
        description: [
            "Assisted in developing web applications using React and Node.js",
            "Participated in code reviews and technical discussions",
            "Learned industry best practices and agile methodologies",
            "Contributed to database design and API development",
        ],
        technologies: ["JavaScript", "React", "Node.js", "MySQL", "Git", "PostgreSQL"],
    },
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative md:w-1/2 ${
        isEven ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
      }`}
    >
      {/* Timeline dot */}
      <div
        className={`hidden md:block absolute top-6 w-3 h-3 bg-foreground rounded-full transition-all duration-500 ${
          isVisible ? "scale-100" : "scale-0"
        } ${isEven ? "-right-1.5" : "-left-1.5"}`}
      />

      <div
        className={`p-6 rounded-xl bg-card border border-border hover-lift ${
          isVisible
            ? isEven
              ? "scroll-visible-left"
              : "scroll-visible-right"
            : isEven
            ? "scroll-hidden-left"
            : "scroll-hidden-right"
        }`}
      >
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
          <Calendar className="w-4 h-4" />
          <span>{exp.period}</span>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-1">
          {exp.title}
        </h3>

        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <Building2 className="w-4 h-4" />
          <span>{exp.company}</span>
        </div>

        <ul className="space-y-2 mb-4">
          {exp.description.map((item, itemIndex) => (
            <li
              key={itemIndex}
              className="text-sm text-muted-foreground flex items-start gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 text-xs font-mono bg-secondary text-foreground rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div
            ref={titleRef}
            className={`${titleVisible ? "scroll-visible" : "scroll-hidden"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Work Experience
            </h2>
            <div className="w-16 h-1 bg-foreground mb-12" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
