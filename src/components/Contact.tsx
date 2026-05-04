import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const URL = "https://portfolio-backend-beta-gold.vercel.app/api/v1/mail";

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation<HTMLFormElement>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await axios.post(URL, formData);
    console.log("Form submitted:", res);

  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div
            ref={titleRef}
            className={`${titleVisible ? "scroll-visible" : "scroll-hidden"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-foreground mb-12" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div
              ref={infoRef}
              className={`${infoVisible ? "scroll-visible-left" : "scroll-hidden-left"}`}
            >
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a
                question or just want to say hi, I'll try my best to get back to
                you!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg bg-secondary group-hover:bg-accent transition-colors">
                    <Mail className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:anshofficialkumar@gmail.com"
                      className="text-foreground hover:text-muted-foreground transition-colors"
                    >
                      anshofficialkumar@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg bg-secondary group-hover:bg-accent transition-colors">
                    <Phone className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a
                      href="tel:+917082365230"
                      className="text-foreground hover:text-muted-foreground transition-colors"
                    >
                      +91-7082365230
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg bg-secondary group-hover:bg-accent transition-colors">
                    <MapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">Gurugram, India</p>
                  </div>
                </div>
              </div>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={`space-y-6 ${formVisible ? "scroll-visible-right" : "scroll-hidden-right"}`}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
