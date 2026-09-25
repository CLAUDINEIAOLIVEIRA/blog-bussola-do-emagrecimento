import type { Post } from "./types";
import minhaJornada from "./content/minha-jornada";
import seteFontesDeProteina from "./content/7-fontes-de-proteina";
import fomeECompulsao from "./content/fome-e-compulsao-pos-tirzepatida";
import examesMetabolicos from "./content/exames-metabolicos";
import suplementacaoBasica from "./content/suplementacao-basica";
import miudos from "./content/miudos-nutrientes-densos";
import chasFuncionais from "./content/chas-funcionais";
import creatina from "./content/creatina-nova-dose-anvisa";
import receitasProteina from "./content/receitas-fontes-de-proteina";
import protegendoMassaMuscular from "./content/protegendo-massa-muscular-tirzepatida";

const posts: Post[] = [
  {
    slug: "minha-jornada",
    titulo: "Minha jornada: de onde vem esse guia",
    resumo:
      "A história pessoal por trás deste blog — obesidade, resistência à insulina, o ponto de partida e as primeiras 8 semanas de tratamento acompanhado por um endocrinologista.",
    categoria: "Jornada",
    blocks: minhaJornada,
  },
  {
    slug: "7-fontes-de-proteina",
    titulo: "7 fontes de proteína acessíveis e nutritivas",
    resumo:
      "Ovo, fígado de frango, sardinha, sobrecoxa, carne moída, pernil suíno e ricota: teor de proteína, nutrientes de destaque, benefícios e pontos de atenção de cada alimento.",
    categoria: "Alimentação",
    blocks: seteFontesDeProteina,
  },
  {
    slug: "fome-e-compulsao-pos-tirzepatida",
    titulo: "Como evitar a fome e a compulsão depois da tirzepatida",
    resumo:
      "Cinco técnicas para reduzir o rebote de fome depois de retirar a medicação: fibras, proteína com gordura, alto volume, desmame gradual e suplementação orientada.",
    categoria: "Manejo da fome",
    blocks: fomeECompulsao,
  },
  {
    slug: "exames-metabolicos",
    titulo: "Exames metabólicos: duas formas de interpretar os mesmos números",
    resumo:
      "TSH, insulina/HOMA-IR, ferritina, vitamina D, hemoglobina glicada e cortisol — referência padrão de laboratório comparada à abordagem de profissionais focados em metabolismo.",
    categoria: "Exames",
    blocks: examesMetabolicos,
  },
  {
    slug: "suplementacao-basica",
    titulo: "Suplementação básica: doses de referência",
    resumo: "Creatina, whey protein, ômega 3, vitamina D3 e magnésio — cinco suplementos com respaldo científico e suas doses mais usadas.",
    categoria: "Suplementação",
    blocks: suplementacaoBasica,
  },
  {
    slug: "miudos-nutrientes-densos",
    titulo: "Miúdos: os cortes mais densos em nutrientes do açougue",
    resumo:
      "Fígado, moela, pé de galinha, coração, bucho, rabo e tutano, língua e rins — os cortes mais baratos do açougue também estão entre os mais nutritivos.",
    categoria: "Alimentação",
    blocks: miudos,
  },
  {
    slug: "chas-funcionais",
    titulo: "Chás funcionais: energia, diurese, calma, sono e saúde intestinal",
    resumo:
      "A mistura caseira de hibisco, cavalinha, oolong e espinheira-santa, mais quatro chás com função específica e um chá de especiarias para o intestino.",
    categoria: "Receitas",
    blocks: chasFuncionais,
  },
  {
    slug: "creatina-nova-dose-anvisa",
    titulo: "Creatina em foco: a nova dose da Anvisa e o que diz a evidência",
    resumo:
      "A Anvisa atualizou a dose diária de referência de creatina de 3 g para 5 g em 2025. Os cinco benefícios com respaldo científico e a dose na prática.",
    categoria: "Suplementação",
    blocks: creatina,
  },
  {
    slug: "receitas-fontes-de-proteina",
    titulo: "20 receitas com as fontes de proteína do guia",
    resumo:
      "Duas receitas práticas para cada proteína: ovo, fígado de frango, sardinha, sobrecoxa, carne moída, pernil suíno, ricota, whey protein, moela e patinho.",
    categoria: "Receitas",
    blocks: receitasProteina,
  },
  {
    slug: "protegendo-massa-muscular-tirzepatida",
    titulo: "Como proteger a massa muscular durante o uso de tirzepatida",
    resumo:
      "Seis estratégias para garantir que o peso perdido seja gordura, não músculo: aporte proteico, estratégias líquidas, treino de força, náuseas, fibras e micronutrientes.",
    categoria: "Manejo da fome",
    blocks: protegendoMassaMuscular,
  },
];

export default posts;
