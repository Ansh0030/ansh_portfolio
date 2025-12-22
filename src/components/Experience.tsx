import { Building2, Calendar, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/* -------------------- TYPES -------------------- */
type ExperienceItem = {
    title: string;
    location: string;
    period: string;
    duration: string;
    type: string;
    description: string[];
    technologies: string[];
    company?: string;
    institution?: string;
    cgpa?: string;
};

/* -------------------- DATA -------------------- */
const experiences: ExperienceItem[] = [
    {
        title: "Associate Software Engineer",
        company: "MPC Cloud Consulting PVT LTD",
        location: "Gurugram, Haryana",
        period: "Jun 2024 - Present",
        duration: "1.6 years",
        type: "Full-time",
        description: [
            "Developed and maintained full-stack web applications using Angular, Ionic, and Spring Boot",
            "Built RESTful APIs with Java and Spring Boot, integrating PostgreSQL databases",
            "Created responsive and interactive UIs using Ionic and modern CSS frameworks",
            "Collaborated with cross-functional teams in an Agile/Scrum environment",
            "Implemented Spring Boot microservices for enterprise applications",
            "Developed hybrid mobile applications using Ionic and Angular",
        ],
        technologies: [
            "Java",
            "Spring Boot",
            "Angular",
            "Ionic",
            "PostgreSQL",
            "Git",
            "Android Studio", "React", "Express JS", "Node.js", "RabbitMQ"
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
    {
        title: "Master of Computer Applications (MCA)",
        institution: "Chitkara University",
        location: "Rajpura, Punjab",
        period: "2022 - 2024",
        duration: "2 years",
        type: "Post Graduation",
        cgpa: "8.7 / 10",
        description: [
            "Focused on full-stack application development and backend architecture",
            "Developed academic and real-world projects using React, Node.js, and Spring Boot",
            "Worked with REST APIs, authentication, and relational databases",
            "Applied OOP, DBMS, and system design concepts in projects",
        ],
        technologies: [],
    },
    {
        title: "Bachelor of Computer Applications (BCA)",
        institution: "Chitkara University",
        location: "Rajpura, Punjab",
        period: "2019 - 2022",
        duration: "3 years",
        type: "Graduation",
        cgpa: "8.97 / 10",
        description: [
            "Built a strong foundation in programming and computer science fundamentals",
            "Worked on academic projects using Java, web technologies, and SQL",
            "Gained hands-on experience with object-oriented programming and databases",
            "Developed problem-solving and debugging skills through coursework",
        ],
        technologies: [],
    },
];

/* -------------------- CARD -------------------- */
const ExperienceCard = ({
                            exp,
                            index,
                        }: {
    exp: ExperienceItem;
    index: number;
}) => {
    const { ref, isVisible } = useScrollAnimation();
    const isEven = index % 2 === 0;

    return (
        <div
            ref={ref}
            className={`relative md:w-1/2 ${
                isEven ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
            }`}
        >
            {/* Timeline Dot */}
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
                {/* Period */}
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-1">
                    {exp.title}
                </h3>

                {/* Company / Institution + CGPA */}
                <div className="flex flex-col gap-1 text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                        {exp.institution ? (
                            <GraduationCap className="w-4 h-4" />
                        ) : (
                            <Building2 className="w-4 h-4" />
                        )}

                        <span>{exp.company ?? exp.institution}</span>
                    </div>

                    {exp.cgpa && (
                        <span className="text-sm ml-6">
              CGPA:{" "}
                            <span className="font-medium text-foreground">{exp.cgpa}</span>
            </span>
                    )}
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                        <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Tech Stack */}
                {exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                            <span
                                key={i}
                                className="px-2 py-1 text-xs font-mono bg-secondary text-foreground rounded"
                            >
                {tech}
              </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

/* -------------------- SECTION -------------------- */
const Experience = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="experience" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div
                        ref={ref}
                        className={isVisible ? "scroll-visible" : "scroll-hidden"}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Experience & Education
                        </h2>
                        <div className="w-16 h-1 bg-foreground mb-12" />
                    </div>

                    <div className="relative">
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
