import { getPostBySlug } from "../../lib/content";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const postParams = await params;
  const post = getPostBySlug(postParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{post.metadata.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.metadata.date}</p>
      <article className="prose">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </main>
  );
}
