import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { marked } from "marked";

const contentDirectory = path.join(process.cwd(), "src", "app", "content");

export function getAllPosts() {
  const files = fs.readdirSync(contentDirectory);

  return files.map((fileName) => {
    const filePath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContents);

    return {
      slug: fileName.replace(/\.md$/, ""),
      metadata: data,
      content,
    };
  });
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  return {
    metadata: data,
    content: marked(content),
  };
}

export function getPostsSortedByDate() {
  const posts = getAllPosts();

  return posts.sort((a, b) => {
    const dateA = new Date(a.metadata.date);
    const dateB = new Date(b.metadata.date);

    return dateB.getTime() - dateA.getTime();
  });
}
