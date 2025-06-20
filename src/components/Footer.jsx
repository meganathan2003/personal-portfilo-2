import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Meganathan.co. All rights reserved.
      </p>

      <div className="flex items-center gap-4">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/meganathan-s-293579202/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin size={20} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/meganathan2003"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github size={20} />
        </a>

        {/* Gmail */}
        <a
          href="meganathan212003@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail size={20} />
        </a>

        {/* Scroll to top */}
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
