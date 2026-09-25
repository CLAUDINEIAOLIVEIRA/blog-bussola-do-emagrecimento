import type { Block } from "../types";

const blocks: Block[] = [
  {
    type: "p",
    text: "A creatina é um dos suplementos mais estudados do mundo. Em 2025, a Agência Nacional de Vigilância Sanitária (Anvisa) atualizou a referência oficial de dose diária no Brasil — o que reacendeu a conversa sobre quanto tomar e por quê.",
  },
  {
    type: "callout",
    variant: "info",
    title: "A mudança oficial",
    text: "Pela Instrução Normativa nº 373/2025, a Anvisa atualizou a dose diária de referência de creatina em suplementos alimentares de 3 g para 5 g por dia. A mudança alinha o Brasil a padrões já praticados internacionalmente e não significa que a dose de 3 g tenha deixado de ser eficaz — apenas amplia a faixa oficialmente reconhecida.",
  },

  { type: "h2", text: "Benefício 1 — Massa muscular" },
  {
    type: "p",
    text: "A perda muscular relacionada à idade, chamada sarcopenia, começa a acelerar a partir dos 40 anos e compromete força e mobilidade. A suplementação combinada com exercício de resistência é uma das estratégias com mais evidência para desacelerar esse processo.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Evidência científica",
    text: "Estudos em adultos acima de 40 anos associam creatina combinada a treino de força à maior preservação de massa muscular magra.",
  },

  { type: "h2", text: "Benefício 2 — Força e desempenho" },
  {
    type: "p",
    text: "A creatina aumenta a disponibilidade de energia rápida nas células musculares, o que se traduz em mais força também em atividades do dia a dia, não apenas em levantamento de peso. É um dos efeitos mais estudados da creatina — e não depende de treino pesado para existir.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Evidência científica",
    text: "Uma das substâncias mais estudadas em nutrição esportiva, com centenas de estudos associando-a à melhora de força e potência muscular.",
  },

  { type: "h2", text: "Benefício 3 — Saúde cerebral" },
  {
    type: "p",
    text: "O cérebro também usa a energia que a creatina ajuda a produzir. Pesquisas associam a suplementação à melhora de memória de curto prazo e função cognitiva, principalmente em situações de privação de sono ou fadiga mental.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Evidência científica",
    text: "Estudos recentes associam a suplementação de creatina à melhora de memória de curto prazo e desempenho cognitivo sob fadiga.",
  },

  { type: "h2", text: "Benefício 4 — Recuperação muscular" },
  {
    type: "p",
    text: "Quem usa creatina costuma relatar menos fadiga entre um treino e outro. O suplemento auxilia na reposição de energia muscular mais rápido, o que pode reduzir o tempo de recuperação percebido e o desgaste acumulado ao longo da semana.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Evidência científica",
    text: "Revisões científicas apontam papel da creatina na redução de dano muscular e na melhora da recuperação pós-exercício.",
  },

  { type: "h2", text: "Benefício 5 — Disposição no dia a dia" },
  {
    type: "p",
    text: "Mais energia celular disponível também pode significar menos sensação de cansaço fora do treino. Como a creatina participa diretamente da produção de energia rápida nas células, o efeito não fica restrito à academia — pode aparecer também em tarefas simples do cotidiano.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Evidência científica",
    text: "A creatina participa da via de produção de ATP, a principal fonte de energia rápida das células.",
  },

  { type: "h2", text: "A pergunta que fica: mulheres idosas podem usar creatina com segurança?" },
  {
    type: "p",
    text: "Para a maioria das mulheres saudáveis, incluindo na terceira idade, a suplementação dentro da dose recomendada é considerada segura e pode ajudar a preservar força e autonomia. A avaliação médica antes de começar segue sendo o passo mais importante, principalmente para quem tem doença renal.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Evidência científica",
    text: "Entidades de nutrição esportiva classificam a creatina monoidratada como segura para a maioria dos adultos saudáveis, incluindo idosos, respeitando a dose recomendada e a avaliação individual.",
  },

  { type: "h2", text: "Na prática" },
  {
    type: "p",
    text: "A nova dose oficial é de até 5 g de creatina por dia, todos os dias, com boa hidratação. Não é necessária fase de saturação nem ciclos de pausa — o uso contínuo é o que sustenta os benefícios ao longo do tempo. Ajustar a dose com orientação médica ou nutricional é o que garante o melhor resultado para cada caso.",
  },

  { type: "h2", text: "O que também apoia a memória" },
  {
    type: "p",
    text: "Outros nutrientes com papel na saúde cerebral, sempre com avaliação médica antes de começar qualquer suplementação — principalmente para combinar mais de um item ao mesmo tempo:",
  },
  {
    type: "list",
    items: [
      "Ômega-3 (DHA) — 500 a 1.000 mg por dia",
      "Vitamina B12 — 500 a 1.000 mcg por dia",
      "Magnésio glicinato — 200 a 400 mg por dia",
      "Vitamina D3 — 1.000 a 2.000 UI por dia",
      "Colina — 250 a 500 mg por dia",
    ],
  },

  { type: "h2", text: "Quadro de referência rápida" },
  {
    type: "table",
    headers: ["Suplemento", "Dose e observação"],
    rows: [
      ["Creatina monoidratada", "3 a 5 g por dia, em qualquer horário, todos os dias, inclusive em dias sem treino."],
      [
        "Vitamina D3",
        "Costuma variar entre 1.000 e 4.000 UI por dia, tomada junto de uma refeição com gordura; o ajuste ideal é sempre guiado pelo exame de 25(OH)D.",
      ],
      [
        "Ômega 3",
        "1.000 a 2.000 mg por dia somando EPA e DHA. Confira no rótulo o valor de EPA + DHA por cápsula, não o peso total do óleo — é comum a quantidade real de ômega-3 ser bem menor do que o tamanho da cápsula sugere.",
      ],
      ["Magnésio glicinato ou dimalato", "200 a 400 mg de magnésio elementar, preferencialmente à noite."],
    ],
  },
  {
    type: "callout",
    variant: "aviso",
    text: "Essas são faixas seguras de referência para adultos saudáveis. A dose ideal para cada pessoa sai de uma avaliação individualizada, idealmente com exames em mãos e acompanhamento de médico ou nutricionista.",
  },
];

export default blocks;
