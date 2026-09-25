import type { Block } from "../types";

const blocks: Block[] = [
  {
    type: "p",
    text: "A tirzepatida é uma das ferramentas mais potentes atualmente para o emagrecimento, pois atua nos receptores de GLP-1 e GIP. Ela reduz significativamente o apetite, retarda o esvaziamento gástrico e melhora a sensibilidade à insulina.",
  },
  {
    type: "p",
    text: "No entanto, justamente por reduzir drasticamente a fome, o grande desafio do tratamento é garantir que o peso perdido seja gordura e não massa muscular. Perder músculo desacelera o metabolismo e prejudica a definição corporal.",
  },
  {
    type: "p",
    text: "Aqui estão as estratégias mais importantes para otimizar os resultados e proteger a massa magra durante o uso de tirzepatida.",
  },
  {
    type: "callout",
    variant: "aviso",
    text: "Este conteúdo traz informações educativas gerais e não substitui o acompanhamento do médico responsável pela prescrição. Dose, ajustes no tratamento e qualquer suplementação devem ser sempre decididos com orientação profissional individualizada.",
  },

  { type: "h2", text: "1. Dobre a atenção no aporte proteico (mesmo sem fome)" },
  {
    type: "p",
    text: "A tirzepatida tira a vontade de comer, o que torna fácil passar o dia consumindo pouquíssimas calorias e quase nenhuma proteína.",
  },
  {
    type: "list",
    items: [
      "A regra de ouro: em todas as refeições, coma a proteína primeiro (os ovos, o patinho, o frango, a ricota). Deixe os acompanhamentos para o final. Se a saciedade bater rápido, você garante que o nutriente construtor de músculo já foi ingerido.",
      "Meta de proteína: para quem treina e busca preservar ou ganhar massa magra em déficit calórico, a meta costuma ser de 1,6 g a 2,0 g de proteína por quilo de peso corporal por dia.",
    ],
  },

  { type: "h2", text: "2. Dificuldade de comer? Use estratégias líquidas" },
  {
    type: "p",
    text: "Nos dias de aplicação ou quando a saciedade estiver muito alta, refeições sólidas podem gerar sensação de empachamento.",
  },
  {
    type: "p",
    text: "Mantenha o whey protein, iogurtes proteicos e claras de ovo por perto. Batidos com água ou leite desnatado, eles passam rapidamente pelo estômago, garantem o aporte de aminoácidos e não causam peso estomacal.",
  },

  { type: "h2", text: "3. Foco total no treino de força (musculação)" },
  {
    type: "p",
    text: "O remédio cria o déficit calórico, mas o estímulo mecânico do treino de força é o único sinal que o corpo entende para manter o músculo.",
  },
  {
    type: "list",
    items: [
      "Se você apenas fizer aeróbico (esteira, caminhada) comendo pouco, o corpo queimará gordura e massa magra em proporções parecidas.",
      "Priorize o treino de musculação pesado (com progressão de carga de acordo com o seu limite) pelo menos 3 a 5 vezes por semana.",
    ],
  },

  { type: "h2", text: "4. Gestão do esvaziamento gástrico e náuseas" },
  {
    type: "p",
    text: "Como a tirzepatida lentifica a digestão, alguns ajustes na rotina alimentar ajudam a reduzir o desconforto:",
  },
  {
    type: "list",
    items: [
      "Fracione as refeições: prefira comer porções menores mais vezes ao dia do que tentar fazer 2 ou 3 refeições grandes.",
      "Evite gorduras pesadas e frituras: alimentos muito gordurosos demoram ainda mais para sair do estômago, o que potencializa episódios de náusea, refluxo e sensação de estufamento.",
      "Mantenha distância de líquidos nas refeições: evite beber grandes volumes de água ou suco junto com a comida para não encher o estômago rapidamente.",
    ],
  },

  { type: "h2", text: "5. Mastigação e fibras para o trânsito intestinal" },
  {
    type: "p",
    text: "Um efeito colateral comum da medicação é a constipação (prisão de ventre), decorrente da diminuição da motilidade intestinal.",
  },
  {
    type: "list",
    items: [
      "Mantenha o consumo diário de fibras (aveia, sementes de chia/linhaça, vegetais e folhas).",
      "Aumente significativamente a ingestão de água (3 a 4 litros por dia). A água é fundamental tanto para o bom funcionamento do intestino quanto para o processo de síntese proteica e eliminação de toxinas.",
    ],
  },

  { type: "h2", text: "6. Atenção aos micronutrientes e à queda de cabelo" },
  {
    type: "p",
    text: "Comer menos volume de comida significa ingerir menos vitaminas e minerais. Em fases de emagrecimento rápido com medicação, é comum ocorrer o eflúvio telógeno (queda temporária de cabelo por déficit nutricional).",
  },
  {
    type: "list",
    items: [
      "Alimentos que você já consome, como fígado de frango (rico em ferro e vitamina A) e ovos (ricos em biotina), são excelentes aliados.",
      "Converse com seu médico sobre a necessidade de um polivitamínico e sobre verificar seus níveis de ferro, ferritina e vitamina D via exames de sangue.",
    ],
  },
];

export default blocks;
