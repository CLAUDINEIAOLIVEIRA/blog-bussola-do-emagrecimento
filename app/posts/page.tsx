import posts from "./data";
import { estimateReadingMinutes } from "./readingTime";
import PostsClient from "./PostsClient";
import styles from "./posts.module.css";

export default function Posts() {
  const postsComTempo = posts.map((post) => ({
    slug: post.slug,
    titulo: post.titulo,
    resumo: post.resumo,
    categoria: post.categoria,
    tempoLeitura: estimateReadingMinutes(post.blocks),
  }));

  return (
    <main>
      <h1>Posts</h1>
      <p className={styles.introListagem}>
        Guia prático sobre emagrecimento com saúde: alimentação, exames, suplementação e o relato de uma jornada real.
      </p>
      <PostsClient posts={postsComTempo} />
    </main>
  );
}
