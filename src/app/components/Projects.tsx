import {
  Code,
  ExternalLink,
  Layout,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  link: string;
  Icon: LucideIcon;
};

function ProjectCard({ project }: { project: Project }) {
  const { title, description, link, Icon } = project;

  return (
    <div className="border border-zinc-800 rounded-lg p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/50 hover:cursor-pointer">
      <div className="flex justify-between items-start gap-x-4">
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5 text-zinc-500" />
        </div>
        <div>
          <div className="flex justify-between">
            <h3 className="text-md text-white-80 text-zinc-100">{title}</h3>
            <ExternalLink className="h-4 w-4" />
          </div>

          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          ></Link>
          <p className="mt-3 mb-3 text-zinc-400">{description}</p>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-zinc-300 hover:text-white transition-colors"
          >
            View Project
            <ExternalLink className="ml-2 h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsShowcase() {
  const projects: Project[] = [
    {
      title: "e-commerce platform",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring product listings, cart functionality, and secure checkout process with Stripe integration.",
      link: "https://example.com/project1",
      Icon: ShoppingCart,
    },
    {
      title: "portfolio website",
      description:
        "A responsive portfolio website showcasing my skills and experience. Built with React and Tailwind CSS, featuring dark mode and animations.",
      link: "https://example.com/project2",
      Icon: Layout,
    },
    {
      title: "task management app",
      description:
        "A productivity application for managing tasks and projects. Features include drag-and-drop organization, reminders, and team collaboration tools.",
      link: "https://example.com/project3",
      Icon: Code,
    },
  ];

  return (
    <section className="w-full  text-white ">
      <div className="space-y-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
        <Link href="/" className=" underline text-zinc-400">
          github.
        </Link>
      </div>
    </section>
  );
}
