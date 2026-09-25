import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>🧭 Bússola do Emagrecimento</h1>
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
    </main>
  );
}
