export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; variant: "aviso" | "dica" | "info"; title?: string; text: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export interface Post {
  slug: string;
  titulo: string;
  resumo: string;
  blocks: Block[];
}
