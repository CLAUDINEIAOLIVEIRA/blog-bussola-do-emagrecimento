"use client";

import { useEffect, useState } from "react";
import styles from "./interactive.module.css";

export default function ScrollProgress() {
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const altura = document.documentElement.scrollHeight - window.innerHeight;
      const percentual = altura > 0 ? (window.scrollY / altura) * 100 : 0;
      setProgresso(Math.min(100, Math.max(0, percentual)));
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.progressoTrilha} aria-hidden="true">
      <div className={styles.progressoBarra} style={{ width: `${progresso}%` }} />
    </div>
  );
}
