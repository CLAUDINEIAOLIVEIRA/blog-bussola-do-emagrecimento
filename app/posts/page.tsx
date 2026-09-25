import Link from "next/link";
import posts from "./data";
import styles from "./posts.module.css";

export default function Posts() {
  return (
    <main>
      <h1>Posts</h1>
      <p className={styles.introListagem}>
        Guia prático sobre emagrecimento com saúde: alimentação, exames, suplementação e o relato de uma jornada real.
      </p>
      <ul className={styles.lista}>
        {posts.map((post) => (
          <li key={post.slug} className={styles.item}>
            <Link href={`/posts/${post.slug}`} className={styles.link}>
              {post.titulo}
            </Link>
            <p className={styles.resumo}>{post.resumo}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
