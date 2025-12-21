import { Code2, Rocket, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quick to adapt to new technologies and frameworks",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborative mindset with strong communication skills",
  },
];

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div
            ref={titleRef}
            className={`${titleVisible ? "scroll-visible" : "scroll-hidden"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-16 h-1 bg-foreground mb-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div
              ref={contentRef}
              className={`${contentVisible ? "scroll-visible-left" : "scroll-hidden-left"}`}
            >
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm an Associate Software Engineer with 1.6 years of hands-on experience
                in full-stack development. My journey started with the MERN stack, and
                I've expanded my expertise to include Java Spring Boot with Angular and
                Ionic frameworks.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Currently looking for exciting opportunities where I can leverage my
                MERN stack expertise to build impactful web applications. I'm passionate
                about creating efficient, user-friendly solutions and continuously
                learning new technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new tech trends, contributing
                to open-source projects, or expanding my knowledge through online courses.
              </p>
            </div>

            <div ref={cardsRef} className="space-y-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl bg-card border border-border hover-lift ${
                    cardsVisible ? "scroll-visible" : "scroll-hidden"
                  } delay-${(index + 1) * 100}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary">
                      <item.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
