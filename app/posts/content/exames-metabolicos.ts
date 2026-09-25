import type { Block } from "../types";

const blocks: Block[] = [
  {
    type: "p",
    text: "Um mesmo resultado de exame pode ser lido de formas diferentes. A referência do laboratório indica a faixa estatística da população geral; alguns profissionais com foco em metabolismo e emagrecimento trabalham com metas mais restritas, buscando identificar alterações antes que se tornem uma doença estabelecida.",
  },
  {
    type: "p",
    text: "As seções a seguir comparam as duas leituras para seis exames comuns em investigação de dificuldade para emagrecer, com o contexto necessário para conversar com seu médico sobre cada um deles.",
  },
  {
    type: "callout",
    variant: "aviso",
    text: 'A coluna "abordagem otimizada" reflete a prática de parte da comunidade médica voltada a metabolismo e emagrecimento, não um consenso universal. Nenhum valor aqui substitui a avaliação individual do seu médico, que conhece seu histórico completo.',
  },

  { type: "h2", text: "TSH" },
  {
    type: "table",
    headers: ["Referência padrão", "Abordagem otimizada"],
    rows: [
      [
        "Dentro da faixa de referência do laboratório — geralmente até 4,5 µUI/mL — costuma ser considerado normal, sem necessidade de investigação adicional.",
        "Alguns profissionais focados em metabolismo buscam manter o TSH abaixo de 2,5 µUI/mL, com o argumento de que sintomas como cansaço, queda de cabelo, ganho de peso e unhas fracas podem aparecer mesmo com o exame dentro da referência tradicional.",
      ],
    ],
  },
  {
    type: "callout",
    variant: "info",
    title: "Contexto e cuidados",
    text: "O valor ideal para tratar alterações discretas de TSH (os chamados quadros 'subclínicos') é um tema debatido na endocrinologia, sem consenso fechado. A decisão de tratar ou apenas observar depende de sintomas, histórico familiar e outros exames — por isso vale conversar com um endocrinologista antes de buscar uma meta diferente da referência do seu laboratório.",
  },

  { type: "h2", text: "Insulina e HOMA-IR" },
  {
    type: "table",
    headers: ["Referência padrão", "Abordagem otimizada"],
    rows: [
      [
        "Insulina de jejum abaixo de aproximadamente 20 µUI/mL costuma ser classificada como dentro da normalidade.",
        "Para rastreio metabólico mais sensível, alguns profissionais buscam insulina de jejum abaixo de 5 µUI/mL e glicose abaixo de 89 mg/dL, calculando o índice HOMA-IR para identificar resistência à insulina antes que a glicemia se altere.",
      ],
    ],
  },
  {
    type: "callout",
    variant: "info",
    title: "Contexto e cuidados",
    text: "O HOMA-IR é uma ferramenta útil para estimar resistência insulínica, mas os pontos de corte variam entre estudos e populações e não substituem outros exames. Ele complementa — não substitui — a avaliação clínica de um endocrinologista.",
  },

  { type: "h2", text: "Ferritina" },
  {
    type: "table",
    headers: ["Referência padrão", "Abordagem otimizada"],
    rows: [
      [
        "Acima de 20 ng/mL, sem sinais clínicos de anemia, costuma ser considerado adequado.",
        "Alguns profissionais buscam manter a ferritina entre 50 e 250 ng/mL, associando valores próximos ao piso da referência a queda de energia, desempenho no treino e queda de cabelo — e valores muito acima de 250 a processos inflamatórios, não necessariamente a uma boa reserva de ferro.",
      ],
    ],
  },
  {
    type: "callout",
    variant: "info",
    title: "Contexto e cuidados",
    text: "A ferritina também se comporta como uma proteína de fase aguda: pode subir em quadros inflamatórios ou infecciosos independentemente do estoque real de ferro. Por isso, sua interpretação isolada — sem exames complementares como saturação de transferrina — pode levar a conclusões equivocadas. Avalie sempre em conjunto com um médico.",
  },

  { type: "h2", text: "Vitamina D" },
  {
    type: "table",
    headers: ["Referência padrão", "Abordagem otimizada"],
    rows: [
      [
        "Acima de 20 ng/mL é considerado suficiente pela maioria dos laboratórios.",
        "Para quem busca otimizar metabolismo, imunidade e preservação de massa muscular durante o emagrecimento, alguns profissionais trabalham com valores acima de 50 ng/mL, sempre com dose ajustada individualmente.",
      ],
    ],
  },
  {
    type: "callout",
    variant: "info",
    title: "Contexto e cuidados",
    text: "O excesso de vitamina D é uma das intoxicações vitamínicas mais comuns quando a suplementação em dose alta não é acompanhada de exames periódicos, podendo levar ao acúmulo de cálcio no sangue. Ajustar a dose com exames e orientação profissional é essencial, especialmente em valores-alvo mais altos.",
  },

  { type: "h2", text: "Hemoglobina glicada" },
  {
    type: "table",
    headers: ["Referência padrão", "Abordagem otimizada"],
    rows: [
      [
        "Abaixo de 5,7% é considerado normal pela maioria dos laboratórios, com reavaliação anual.",
        "Alguns profissionais já consideram a faixa de 5,4% a 5,6% um sinal de alerta metabólico, cruzando o resultado com insulina e circunferência abdominal para agir antes de um eventual diagnóstico de pré-diabetes.",
      ],
    ],
  },
  {
    type: "callout",
    variant: "info",
    title: "Contexto e cuidados",
    text: "A hemoglobina glicada reflete a média da glicose nos últimos dois a três meses e é uma ferramenta valiosa de rastreio. Ainda assim, o diagnóstico de pré-diabetes e diabetes segue critérios estabelecidos por sociedades médicas — mudanças de conduta antes desses critérios devem ser discutidas com o médico responsável.",
  },

  { type: "h2", text: "Cortisol" },
  {
    type: "table",
    headers: ["Referência padrão", "Abordagem otimizada"],
    rows: [
      [
        "Raramente solicitado fora da investigação de condições específicas, como suspeita de Síndrome de Cushing ou insuficiência adrenal.",
        "Alguns profissionais avaliam o cortisol matinal (com referência citada entre 11 e 17 µg/dL) como parte do quadro metabólico, associando estresse crônico e sono ruim ao acúmulo de gordura abdominal e à dificuldade de emagrecer mesmo com dieta adequada.",
      ],
    ],
  },
  {
    type: "callout",
    variant: "info",
    title: "Contexto e cuidados",
    text: "O cortisol varia naturalmente ao longo do dia (ritmo circadiano) e sofre influência do horário da coleta, da qualidade do sono na noite anterior e do nível de estresse no momento do exame — por isso sua interpretação isolada tem limitações. Ele é uma peça de um quadro maior que inclui sono, estresse e rotina, e sua avaliação deve ser conduzida por um médico.",
  },

  { type: "h2", text: "Para levar ao consultório" },
  {
    type: "callout",
    variant: "aviso",
    text: "Nenhuma dessas metas deve ser perseguida isoladamente ou sem acompanhamento. O valor desta comparação está em ajudar você a fazer perguntas melhores na consulta — não em substituir a leitura clínica do profissional que acompanha seu caso.",
  },
];

export default blocks;
