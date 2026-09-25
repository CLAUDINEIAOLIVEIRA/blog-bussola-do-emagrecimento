import Link from "next/link";
import posts from "./data";
import { postIcons, LeafIcon } from "../components/icons";
import styles from "./posts.module.css";

export default function Posts() {
  return (
    <main>
      <h1>Posts</h1>
      <p className={styles.introListagem}>
        Guia prático sobre emagrecimento com saúde: alimentação, exames, suplementação e o relato de uma jornada real.
      </p>
      <ul className={styles.lista}>
        {posts.map((post) => {
          const Icon = postIcons[post.slug] ?? LeafIcon;
          return (
            <li key={post.slug} className={styles.item}>
              <Link href={`/posts/${post.slug}`} className={styles.itemLink}>
                <span className={styles.itemSelo}>
                  <Icon className={styles.itemIcone} />
                </span>
                <span className={styles.itemTexto}>
                  <span className={styles.link}>{post.titulo}</span>
                  <p className={styles.resumo}>{post.resumo}</p>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
