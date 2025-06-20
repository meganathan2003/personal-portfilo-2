import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Event Management System",
    description: "Full-stack app for managing events, registrations, and user roles.",
    image: "/projects/project-1-image.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    githubUrl: "https://github.com/fullstack-projectz/Event-Management-frontend",
    deployedUrl: "https://capable-unicorn-b52efc.netlify.app/",
  },
  {
    id: 2,
    title: "CodeCraft Code Editor",
    description: "Write and run code in real-time with multi-language support.",
    image: "/projects/project-2-image.png",
    tags: ["Next.js", "TypeScript", "Monaco Editor", "TailwindCSS"],
    githubUrl: "https://github.com/meganathan2003/CodeCraft",
    deployedUrl: "https://codecraft-jono-git-main-meganathan-projects.vercel.app/",
  },
  {
    id: 3,
    title: "Socially",
    description: "Socically this website is a social media platform for users to connect and share their thoughts.",
    image: "/projects/socially.png",
    tags: ["next.js", "typescript", "tailwindcss", "prisma", "vercel"],
    githubUrl: "https://github.com/meganathan2003/socially-app",
    deployedUrl: "https://socially-app-five.vercel.app/",
  },
];



export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my full-stack applications. Built with performance, scalability and user experience in mind.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-col gap-2">
                  <a
                    href={project.deployedUrl}
                    target="_blank"
                    className="text-sm text-primary flex items-center gap-1 hover:underline"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-sm text-muted-foreground flex items-center gap-1 hover:text-primary"
                  >
                    Github Code <Github size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/meganathan2003?tab=repositories"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
