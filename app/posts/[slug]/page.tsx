import Link from "next/link";
import { notFound } from "next/navigation";
import posts from "../data";
import BlockRenderer from "../BlockRenderer";
import { estimateReadingMinutes } from "../readingTime";
import { postIcons, LeafIcon } from "../../components/icons";
import FavoriteButton from "../../components/FavoriteButton";
import ShareButtons from "../../components/ShareButtons";
import ScrollProgress from "../../components/ScrollProgress";
import BackToTop from "../../components/BackToTop";
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

  const Icon = postIcons[post.slug] ?? LeafIcon;
  const tempoLeitura = estimateReadingMinutes(post.blocks);

  return (
    <main>
      <ScrollProgress />
      <Link href="/posts" className={styles.voltar}>
        ← Voltar para Posts
      </Link>
      <div className={styles.cabecalhoPost}>
        <span className={styles.seloGrande}>
          <Icon className={styles.seloGrandeIcone} />
        </span>
        <div>
          <h1>{post.titulo}</h1>
          <p className={styles.resumo}>{post.resumo}</p>
          <span className={styles.tempoLeituraGrande}>📖 {tempoLeitura} min de leitura</span>
        </div>
      </div>
      <div className={styles.acoesPost}>
        <FavoriteButton slug={post.slug} />
      </div>
      <BlockRenderer blocks={post.blocks} />
      <ShareButtons titulo={post.titulo} />
      <Link href="/posts" className={styles.voltar}>
        ← Voltar para Posts
      </Link>
      <BackToTop />
    </main>
  );
}
