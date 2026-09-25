"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./icons";
import styles from "./interactive.module.css";

export default function BackToTop() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisivel(window.scrollY > 480);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visivel) return null;

  return (
    <button
      type="button"
      className={styles.topoBotao}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
    >
      <ArrowUpIcon className={styles.topoIcone} />
    </button>
  );
}
