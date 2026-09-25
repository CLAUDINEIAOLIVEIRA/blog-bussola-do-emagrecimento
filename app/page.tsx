import Link from "next/link";
import posts from "./posts/data";
import { postIcons, LeafIcon, CompassIcon } from "./components/icons";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroIconeWrap}>
          <CompassIcon className={styles.heroIcone} />
        </div>
        <div>
          <h1>Bússola do Emagrecimento</h1>
          <p>
            Um guia prático sobre emagrecer com saúde, contado a partir de uma experiência pessoal: alimentação,
            exames, suplementação e o manejo da fome — sempre com acompanhamento médico.
          </p>
          <div className={styles.destaques}>
            <Link href="/posts" className={styles.botao}>
              Ver todos os posts
            </Link>
            <Link href="/sobre" className={styles.botaoSecundario}>
              Sobre este guia
            </Link>
          </div>
        </div>
      </section>

      <h2 className={styles.secaoTitulo}>O que você vai encontrar</h2>
      <div className={styles.grid}>
        {posts.map((post) => {
          const Icon = postIcons[post.slug] ?? LeafIcon;
          return (
            <Link key={post.slug} href={`/posts/${post.slug}`} className={styles.gridCard}>
              <Icon className={styles.gridIcone} />
              <span>{post.titulo}</span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
