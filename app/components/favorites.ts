const STORAGE_KEY = "bussola-favoritos";
export const FAVORITOS_EVENTO = "bussola-favoritos-mudou";

export function lerFavoritos(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function alternarFavorito(slug: string): string[] {
  const atuais = lerFavoritos();
  const novo = atuais.includes(slug) ? atuais.filter((s) => s !== slug) : [...atuais, slug];
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(novo));
  window.dispatchEvent(new Event(FAVORITOS_EVENTO));
  return novo;
}
