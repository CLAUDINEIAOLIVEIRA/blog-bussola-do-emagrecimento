"use client";

import { useState } from "react";
import { LinkIcon, WhatsappIcon } from "./icons";
import styles from "./interactive.module.css";

export default function ShareButtons({ titulo }: { titulo: string }) {
  const [copiado, setCopiado] = useState(false);

  async function copiarLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      setCopiado(false);
    }
  }

  const linkAtual = typeof window !== "undefined" ? window.location.href : "";
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${titulo} — ${linkAtual}`)}`;

  return (
    <div className={styles.compartilharWrap}>
      <span className={styles.compartilharLabel}>Compartilhar:</span>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.compartilharBotao}
        aria-label="Compartilhar no WhatsApp"
      >
        <WhatsappIcon className={styles.compartilharIcone} />
        WhatsApp
      </a>
      <button type="button" className={styles.compartilharBotao} onClick={copiarLink}>
        <LinkIcon className={styles.compartilharIcone} />
        {copiado ? "Link copiado!" : "Copiar link"}
      </button>
    </div>
  );
}
