import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import RenderContent from "@/components/RenderContent";

export async function generateStaticParams() {
  const postsPath = path.join(process.cwd(), "content", "blog");
  if (!fs.existsSync(postsPath)) return [];
  const files = fs.readdirSync(postsPath).filter((f) => f.endsWith(".json"));
  return files.map((file) => ({ slug: file.replace(".json", "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.json`);
  if (!fs.existsSync(filePath)) return {};
  const post = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return {
    title: post.title,
    description: post.introduction,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.json`);
  if (!fs.existsSync(filePath)) notFound();

  const post = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return (
    <article className="blog-post">

      {/* Înapoi la blog */}
      <Link href="/blog" className="blog-post-back">
        ← Înapoi la blog
      </Link>

      {/* Header articol */}
      <header className="blog-post-header">
        <span className="blog-card-tag">Articol</span>
        <h1>{post.title}</h1>
        <div className="hero-divider" style={{ maxWidth: 260, margin: "1.5rem 0" }}>
          <span /><span className="hero-divider-diamond">◆</span><span />
        </div>
        <p className="blog-post-intro">{post.introduction}</p>
      </header>

      {/* Corp articol */}
      <div className="blog-post-body">
        <RenderContent content={post.content} />
      </div>

    </article>
  );
}