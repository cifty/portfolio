import Navbar from "./components/Navbar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Projects from "./components/Projects";
import Link from "next/link";

const techStack = [
  {
    icon: "nextjs.svg",
    name: "Next.js",
  },
  {
    icon: "spring.svg",
    name: "Spring Boot",
  },
  {
    icon: "tailwindcss.svg",
    name: "TailwindCSS",
  },
  {
    icon: "python.svg",
    name: "Python",
  },
  {
    icon: "java.svg",
    name: "Java",
  },
  {
    icon: "typescript.svg",
    name: "TypeScript",
  },
  {
    icon: "js.svg",
    name: "JavaScript",
  },
  {
    icon: "docker.svg",
    name: "Docker",
  },
  {
    icon: "postgresql.svg",
    name: "PostgreSQL",
  },
  {
    icon: "mongodb.svg",
    name: "MongoDB",
  },
];

export default function Home() {
  return (
    <main className="flex min-w-screen flex-col items-center justify-between gap-y-10">
      <Navbar />
      <div className="flex flex-col justify-center max-w-[700px]">
        <h1 className="tracking-[-0.05em] text-4xl font-light text-white-80">
          hi, i&apos;m <span className=" font-semibold">caroly</span> - a
          fullstack web developer and designer from estonia.
        </h1>
        <Separator className="my-6" />
        <p className="opacity-90 font-light text-md">
          I like designing and building modern web applications. I also mess
          around with ethical hacking CTFs for fun and write blog posts to
          explain what I’ve learned along the way.{" "}
        </p>
        <span className="tracking-[-0.05em] font-semibold text-lg text-white-80 mt-12 mb-6">
          my tech stack.
        </span>
        <ul className="flex flex-wrap gap-4">
          {techStack.map((tech, index) => (
            <li
              key={index}
              className="flex items-center border border-zinc-700 rounded-md px-4 py-2 bg-background shadow-sm hover:shadow-md transition max-w-fit"
            >
              <Image
                src={`/techIcons/${tech.icon}`}
                alt={tech.name}
                width={24}
                height={24}
                className=" mr-2"
              />
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
        <span className="tracking-[-0.05em] font-semibold text-lg text-white-80 mt-12 mb-6">
          my projects.
        </span>
        <Projects />
        <span className="tracking-[-0.05em] font-semibold text-lg text-white-80 mt-12 mb-6">
          blog.
        </span>
        <Link href="/" className="flex gap-x-4 hover:cursor-pointer group">
          <span className=" text-zinc-400">April 9, 2025</span>
          <span className="group-hover:underline">CORS in Spring Boot</span>
        </Link>
      </div>
    </main>
  );
}
