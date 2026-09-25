"use client";

import { useEffect, useState } from "react";
import { StarIcon } from "./icons";
import { lerFavoritos, alternarFavorito, FAVORITOS_EVENTO } from "./favorites";
import styles from "./interactive.module.css";

export default function FavoriteButton({ slug, compact = false }: { slug: string; compact?: boolean }) {
  const [favorito, setFavorito] = useState(false);

  useEffect(() => {
    setFavorito(lerFavoritos().includes(slug));
    const atualizar = () => setFavorito(lerFavoritos().includes(slug));
    window.addEventListener(FAVORITOS_EVENTO, atualizar);
    return () => window.removeEventListener(FAVORITOS_EVENTO, atualizar);
  }, [slug]);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    alternarFavorito(slug);
    setFavorito((f) => !f);
  }

  if (compact) {
    return (
      <button
        type="button"
        className={styles.favoritoCompacto}
        onClick={handleClick}
        aria-pressed={favorito}
        aria-label={favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        title={favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      >
        <StarIcon className={styles.favoritoIconeCompacto} filled={favorito} />
      </button>
    );
  }

  return (
    <button type="button" className={styles.favoritoBotao} onClick={handleClick} aria-pressed={favorito}>
      <StarIcon className={styles.favoritoIcone} filled={favorito} />
      {favorito ? "Favoritado" : "Favoritar"}
    </button>
  );
}
