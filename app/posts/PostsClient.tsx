"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Categoria } from "./types";
import { postIcons, LeafIcon, SearchIcon } from "../components/icons";
import FavoriteButton from "../components/FavoriteButton";
import { lerFavoritos, FAVORITOS_EVENTO } from "../components/favorites";
import interativoStyles from "../components/interactive.module.css";
import styles from "./posts.module.css";

interface PostResumo {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: Categoria;
  tempoLeitura: number;
}

const TODAS = "Todas" as const;

export default function PostsClient({ posts }: { posts: PostResumo[] }) {
  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState<Categoria | typeof TODAS>(TODAS);
  const [soFavoritos, setSoFavoritos] = useState(false);
  const [favoritos, setFavoritos] = useState<string[]>([]);

  useEffect(() => {
    const atualizar = () => setFavoritos(lerFavoritos());
    atualizar();
    window.addEventListener(FAVORITOS_EVENTO, atualizar);
    return () => window.removeEventListener(FAVORITOS_EVENTO, atualizar);
  }, []);

  const categorias = useMemo(() => {
    const unicas = Array.from(new Set(posts.map((p) => p.categoria)));
    return [TODAS, ...unicas];
  }, [posts]);

  const filtrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return posts.filter((post) => {
      if (categoriaAtiva !== TODAS && post.categoria !== categoriaAtiva) return false;
      if (soFavoritos && !favoritos.includes(post.slug)) return false;
      if (termo && !`${post.titulo} ${post.resumo}`.toLowerCase().includes(termo)) return false;
      return true;
    });
  }, [posts, busca, categoriaAtiva, soFavoritos, favoritos]);

  return (
    <>
      <div className={interativoStyles.buscaWrap}>
        <SearchIcon className={interativoStyles.buscaIcone} />
        <input
          type="text"
          className={interativoStyles.buscaInput}
          placeholder="Buscar por assunto (ex: proteína, exames, chá...)"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      <div className={interativoStyles.filtros}>
        {categorias.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`${interativoStyles.chip} ${categoriaAtiva === cat ? interativoStyles.chipAtivo : ""}`}
            onClick={() => setCategoriaAtiva(cat)}
          >
            {cat}
          </button>
        ))}
        <button
          type="button"
          className={`${interativoStyles.chip} ${soFavoritos ? interativoStyles.chipAtivo : ""}`}
          onClick={() => setSoFavoritos((v) => !v)}
        >
          ★ Só favoritos
        </button>
      </div>

      {filtrados.length === 0 ? (
        <p className={interativoStyles.semResultados}>Nenhum post encontrado com esse filtro.</p>
      ) : (
        <ul className={styles.lista}>
          {filtrados.map((post) => {
            const Icon = postIcons[post.slug] ?? LeafIcon;
            return (
              <li key={post.slug} className={styles.item}>
                <FavoriteButton slug={post.slug} compact />
                <Link href={`/posts/${post.slug}`} className={styles.itemLink}>
                  <span className={styles.itemSelo}>
                    <Icon className={styles.itemIcone} />
                  </span>
                  <span className={styles.itemTexto}>
                    <span className={styles.itemMeta}>
                      <span className={styles.categoriaTag}>{post.categoria}</span>
                      <span className={styles.tempoLeitura}>{post.tempoLeitura} min de leitura</span>
                    </span>
                    <span className={styles.link}>{post.titulo}</span>
                    <p className={styles.resumo}>{post.resumo}</p>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
