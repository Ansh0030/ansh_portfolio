import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";


const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
        </div>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm font-mono mb-6">
              Hello, I'm ANSH KUMAR
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Full Stack Developer
            <br />
            <span className="text-muted-foreground">MERN & Spring Boot</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Associate Software Engineer with 1.6 years of experience building scalable
            web applications. Specialized in MERN Stack with expertise in Java Spring
            Boot & Angular.
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity duration-300"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors duration-300"
            >
              View Projects
            </a>
          </div>

          <div
            className="flex items-center justify-center gap-6 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="https://github.com/Ansh0030"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/ansh-kumar-2724471a2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="mailto:anshofficialkumar@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-foreground" />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </a>
    </section>
  );
};

export default Hero;
