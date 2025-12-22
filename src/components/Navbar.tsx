import { Menu, X, Download } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

const RESUME_URL = "/Ansh_Kumar_Resume.pdf";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#" className="text-xl font-bold text-foreground">
                        Portfolio<span className="text-muted-foreground">.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Resume Button */}
                        <a
                            href={RESUME_URL}
                            download
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
                        >
                            <Download className="w-4 h-4" />
                            Resume
                        </a>

                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-4 md:hidden">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-foreground"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 animate-fade-in">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium py-2"
                                >
                                    {link.label}
                                </a>
                            ))}

                            {/* Mobile Resume Button */}
                            <a
                                href={RESUME_URL}
                                download
                                onClick={() => setIsOpen(false)}
                                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                 Resume
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
