import Link from "next/link";
import { notFound } from "next/navigation";
import posts from "../data";
import BlockRenderer from "../BlockRenderer";
import styles from "../posts.module.css";

interface PostDetalheProps {
  params: Promise<{ slug: string }>;
}

export default async function PostDetalhe({ params }: PostDetalheProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Link href="/posts" className={styles.voltar}>
        ← Voltar para Posts
      </Link>
      <h1>{post.titulo}</h1>
      <p className={styles.resumo}>{post.resumo}</p>
      <BlockRenderer blocks={post.blocks} />
      <Link href="/posts" className={styles.voltar}>
        ← Voltar para Posts
      </Link>
    </main>
  );
}
