import type { Block } from "./types";
import styles from "./posts.module.css";

const calloutLabel: Record<string, string> = {
  aviso: "⚠ Aviso",
  dica: "💡 Dica",
  info: "ℹ Informação",
};

export default function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className={styles.conteudo}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className={styles.blocoH2}>
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className={styles.blocoH3}>
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className={styles.blocoP}>
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className={styles.blocoLista}>
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <div key={i} className={`${styles.callout} ${styles[`callout_${block.variant}`]}`}>
                <p className={styles.calloutTitulo}>{block.title ?? calloutLabel[block.variant]}</p>
                <p className={styles.calloutTexto}>{block.text}</p>
              </div>
            );
          case "table":
            return (
              <div key={i} className={styles.tabelaWrap}>
                <table className={styles.tabela}>
                  <thead>
                    <tr>
                      {block.headers.map((h, j) => (
                        <th key={j}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => (
                          <td key={k}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
