import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
    SiReact,
    SiAngular,
    SiIonic,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiSpringboot,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiRedis,
    SiDocker,
    SiGit,
    SiJira,
    SiRabbitmq,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const iconClass = "w-4 h-4 text-foreground";
const skillIcons: Record<string, JSX.Element> = {
    "React.js": <SiReact className={iconClass} />,
    Angular: <SiAngular className={iconClass} />,
    Ionic: <SiIonic className={iconClass} />,
    TypeScript: <SiTypescript className={iconClass} />,
    JavaScript: <SiJavascript className={iconClass} />,
    HTML5: <SiHtml5 className={iconClass} />,
    CSS3: <SiCss3 className={iconClass} />,
    "Tailwind CSS": <SiTailwindcss className={iconClass} />,

    "Node.js": <SiNodedotjs className={iconClass} />,
    "Express.js": <SiExpress className={iconClass} />,
    Java: <FaJava className={iconClass} />,
    "Spring Boot": <SiSpringboot className={iconClass} />,
    "REST APIs": <span className="text-[10px] font-bold">API</span>,

    MongoDB: <SiMongodb className={iconClass} />,
    MySQL: <SiMysql className={iconClass} />,
    PostgreSQL: <SiPostgresql className={iconClass} />,
    Redis: <SiRedis className={iconClass} />,

    Git: <SiGit className={iconClass} />,
    Docker: <SiDocker className={iconClass} />,
    // AWS: <SiAmazonaws className={iconClass} />,
    Jira: <SiJira className={iconClass} />,
    RabbitMQ: <SiRabbitmq className={iconClass} />,
    "CI/CD": <span className="text-[10px] font-bold">CI</span>,
    "Agile/Scrum": <span className="text-[10px] font-bold">Agile</span>,
};

const skillCategories = [

    {
        title: "Frontend",
        skills: [
            "React.js",
            "Angular",
            "Ionic",
            "TypeScript",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
        ],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js", "Java", "Spring Boot", "REST APIs"],
    },
    {
        title: "Database",
        skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
    },
    {
        title: "Tools & Others",
        skills: ["Git", "Docker", "AWS", "CI/CD", "Jira", "Agile/Scrum", "RabbitMQ"],
    },
];

const Skills = () => {
    const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
    const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

    return (
        <section id="skills" className="py-20 md:py-32 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div
                        ref={titleRef}
                        className={titleVisible ? "scroll-visible" : "scroll-hidden"}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Skills & Technologies
                        </h2>
                        <div className="w-16 h-1 bg-foreground mb-12" />
                    </div>

                    <div ref={gridRef} className="grid md:grid-cols-2 gap-8">
                        {skillCategories.map((category, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-xl bg-card border border-border ${
                                    gridVisible
                                        ? "scroll-visible-scale"
                                        : "scroll-hidden-scale"
                                }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <h3 className="text-lg font-semibold text-foreground mb-4">
                                    {category.title}
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="flex items-center gap-2 px-3 py-1.5 text-sm font-mono bg-secondary text-foreground rounded-md transition-transform hover:scale-105"
                                        >
                      <span className="text-base">
                        {skillIcons[skill]}
                      </span>
                                            {skill}
                    </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
