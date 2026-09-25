import type { Block } from "../types";

const blocks: Block[] = [
  {
    type: "p",
    text: "Quem já retirou sabe: a fome que volta nos primeiros dias parece maior do que antes de começar o tratamento. Não é falta de força de vontade — é hormônio. Cinco técnicas ajudam a reduzir esse impacto sem depender da caneta.",
  },
  {
    type: "callout",
    variant: "aviso",
    text: "Este conteúdo relata uma experiência pessoal e traz informações educativas gerais. Ele não substitui o acompanhamento do médico responsável pela prescrição e pelo desmame da tirzepatida — decisões sobre dose, suspensão e uso de suplementos ou outros medicamentos devem ser sempre conduzidas por um profissional de saúde.",
  },

  { type: "h2", text: "1. Mix de fibras" },
  {
    type: "p",
    text: "Uma colher de sopa antes de cada refeição muda o apetite do dia inteiro. A mistura é feita de linhaça, chia, psyllium e aveia em partes iguais, hidratada de um dia para o outro. Use 1 colher antes do café, do almoço e do jantar, misturada em água ou iogurte.",
  },
  {
    type: "p",
    text: "Retarda o esvaziamento gástrico e estimula a produção de GLP-1 — o mesmo hormônio que a tirzepatida amplificava, agora vindo da própria refeição.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Informação de saúde",
    text: "As fibras solúveis também ajudam a suavizar a curva de glicose depois das refeições e alimentam a microbiota intestinal. Aumente a quantidade aos poucos e beba bastante água junto — fibra sem líquido suficiente pode causar desconforto abdominal e prisão de ventre.",
  },

  { type: "h2", text: "2. Proteína com gordura" },
  {
    type: "p",
    text: "Proteína magra sozinha não sacia do jeito que devia. A estratégia é combinar proteína com gordura em toda refeição — carne com um pouco de gordura, ovo inteiro, azeite. Se a proteína for magra, complemente com azeite na salada.",
  },
  {
    type: "p",
    text: "Essa combinação estimula GLP-1 e PYY — os dois hormônios que a tirzepatida imitava, agora ativados pelo próprio prato, sem injeção nenhuma.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Informação de saúde",
    text: "Manter a ingestão de proteína adequada é especialmente importante depois do uso de agonistas de GLP-1: a perda de massa muscular junto com a gordura é um efeito já documentado desses medicamentos. Um nutricionista pode ajustar a meta de proteína ao seu peso e nível de atividade.",
  },

  { type: "h2", text: "3. Alto volume" },
  {
    type: "p",
    text: "Comer bastante também pode ser estratégia, não só restrição. Frutas como melancia, melão e morango à vontade têm baixa densidade calórica e alto volume; a mastigação prolongada reduz a ansiedade e sacia sem excesso calórico.",
  },
  {
    type: "p",
    text: "Parte da compulsão é falta do ato de comer, não só de calorias — e esse grupo de alimentos devolve esse ato sem pesar na conta calórica.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Informação de saúde",
    text: "Frutas com alto teor de água também contribuem para a hidratação diária e fornecem vitaminas e potássio. Quem tem diabetes ou pré-diabetes deve considerar o índice glicêmico e a quantidade junto ao médico ou nutricionista.",
  },

  { type: "h2", text: "4. Desmame gradual" },
  {
    type: "p",
    text: "Parar de uma vez é o erro mais comum de quem interrompe a tirzepatida. A redução gradual, nunca o corte abrupto, gera menor rebote de fome — sempre com acompanhamento médico. Vale começar as outras técnicas antes mesmo de parar a medicação.",
  },
  {
    type: "p",
    text: "O desmame existe e funciona: dá tempo para o corpo se reorganizar em vez de sentir a queda hormonal de uma vez só.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Informação de saúde",
    text: "Qualquer alteração de dose, frequência ou suspensão da tirzepatida deve ser decidida e acompanhada pelo médico que prescreveu o tratamento — nunca por conta própria. O cronograma de redução varia de pessoa para pessoa.",
  },

  { type: "h2", text: "5. Suplementação orientada" },
  {
    type: "p",
    text: "Alguns coadjuvantes podem ajudar na transição, sempre com acompanhamento médico — como a berberina, usada como possível coadjuvante, ou outras opções apenas se indicadas pelo médico. Nunca por conta própria: a suplementação soma às outras quatro técnicas, não as substitui — por isso vem por último, não no lugar delas.",
  },
  {
    type: "p",
    text: "O suporte farmacológico ou de suplementação pode facilitar a adesão às outras técnicas, mas não resolve sozinho.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Informação de saúde",
    text: "Berberina pode interagir com outros medicamentos e não é isenta de efeitos colaterais gastrointestinais. Qualquer suplemento ou medicamento adjuvante — incluindo os de uso controlado — só deve ser introduzido com avaliação e prescrição médica individual.",
  },

  { type: "h2", text: "Por que funciona: a tirzepatida imita um hormônio que você já tem" },
  {
    type: "p",
    text: "GLP-1 e PYY já existem no seu corpo — a medicação amplificava o que você produz naturalmente. Quando o tratamento é retirado, a produção volta ao próprio ritmo, e essa queda explica a fome que aparece nos primeiros dias.",
  },
  {
    type: "p",
    text: "As cinco técnicas apresentadas neste guia ensinam o corpo a repetir, por conta própria, parte do que a medicação fazia todos os dias: retardar o esvaziamento gástrico, prolongar a saciedade e reduzir a compulsão.",
  },
  {
    type: "callout",
    variant: "info",
    text: "Fome depois da tirzepatida é hormônio, não fraqueza. Quem sente fome forte nos primeiros dias sem a medicação não está fracassando — está sentindo a queda hormonal se reorganizar. Isso tem explicação fisiológica e tem manejo.",
  },
];

export default blocks;
