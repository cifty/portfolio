import Link from "next/link";
import { getPostsSortedByDate } from "../lib/content";

export default function BlogPage() {
  const posts = getPostsSortedByDate();

  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-lg font-medium text-blue-500 hover:underline"
            >
              {post.metadata.title}
            </Link>
            <p className="text-sm text-gray-500">{post.metadata.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
