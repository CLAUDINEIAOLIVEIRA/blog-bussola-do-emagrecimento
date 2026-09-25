import type { Block } from "../types";

const blocks: Block[] = [
  {
    type: "p",
    text: "Cada um dos chás a seguir tem um uso específico, com estudo publicado por trás do efeito relatado. Eles não substituem os fundamentos de alimentação, sono e déficit calórico — funcionam como apoio pontual para um sintoma específico do dia.",
  },

  { type: "h2", text: "Chá caseiro: hibisco, cavalinha, oolong e espinheira-santa" },
  {
    type: "p",
    text: "Uma mistura caseira de ervas, usada de forma tradicional para apoiar digestão, sensação de inchaço e disposição ao longo do dia — sem substituir os fundamentos de alimentação e sono.",
  },
  { type: "h3", text: "O que cada erva faz" },
  {
    type: "list",
    items: [
      "Hibisco — tradicionalmente usado como diurético natural, associado à sensação de menos inchaço.",
      "Cavalinha — também com efeito diurético tradicional; rica em sílica, associada à saúde de pele, cabelo e unhas.",
      "Oolong — contém cafeína; associado a um leve aumento do gasto energético, com menos oscilação de energia do que o café.",
      "Espinheira-santa — tradicionalmente usada para conforto digestivo, alívio de azia e sensação de estufamento.",
    ],
  },
  { type: "h3", text: "Modo de preparo (rende 1 litro)" },
  {
    type: "p",
    text: "Ferva 1 litro de água e desligue o fogo. Adicione 1 colher de sopa de hibisco, 1 colher de sopa de cavalinha, 1 colher de sopa de espinheira-santa e 1 colher de chá de oolong. Tampe, deixe em infusão por 8 minutos e coe.",
  },
  { type: "h3", text: "Como tomar" },
  {
    type: "p",
    text: "Um copo em jejum, um antes do almoço e um no meio da tarde, terminando até as 17h — a mistura contém cafeína e tem efeito diurético, o que pode atrapalhar o sono se consumida à noite. Pode ser tomado gelado, com limão e sem açúcar.",
  },
  {
    type: "p",
    text: "Variação: para quem busca focar no efeito digestivo, a espinheira-santa pode ser preparada separadamente e tomada sozinha após o almoço e o jantar, momento em que costuma atuar na digestão.",
  },
  {
    type: "callout",
    variant: "aviso",
    title: "Não use se",
    text: "Você está grávida ou amamentando. Tenha cautela se tiver pressão baixa (hibisco), problema renal (cavalinha) ou insônia/sensibilidade à cafeína (oolong); a cavalinha não deve ser usada continuamente por mais de 4 semanas seguidas sem pausa. Chás não são isentos de interação medicamentosa — quem usa medicação contínua deve conversar com o médico antes de incorporar esta mistura à rotina.",
  },

  { type: "h2", text: "Quatro chás, quatro funções" },
  { type: "h3", text: "Para energia — Oolong" },
  {
    type: "p",
    text: "O oolong fica no meio do caminho entre o chá verde e o chá preto, reunindo catequina e cafeína agindo juntas. Um estudo publicado no Journal of Nutrition registrou um aumento de cerca de 3% no gasto energético após o consumo, sem o nervosismo que o café costuma trazer em algumas pessoas.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Forma de uso",
    text: "1 xícara pela manhã ou início da tarde, em infusão de 3 a 5 minutos, sem ferver as folhas diretamente.",
  },

  { type: "h3", text: "Para desinchar — Cavalinha" },
  {
    type: "p",
    text: "A cavalinha foi testada em um ensaio clínico randomizado com 36 voluntários, comparada diretamente à hidroclorotiazida — um diurético de uso médico. O resultado, publicado na revista Evidence-Based Complementary and Alternative Medicine, mostrou efeito diurético equivalente entre os dois, sem alterar os níveis de sódio e potássio do corpo.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Forma de uso",
    text: "1 colher de sopa da erva seca fervida por 5 minutos, até 2 xícaras por dia, por período curto.",
  },

  { type: "h3", text: "Para ansiedade — Mulungu" },
  {
    type: "p",
    text: "O mulungu é uma árvore nativa do Brasil, incluída na lista RENISUS do Ministério da Saúde como planta de interesse para o SUS. Pesquisadores identificaram alcaloides na casca que agem no mesmo receptor cerebral ativado por calmantes controlados, segundo estudo publicado no Journal of Ethnopharmacology, sem o efeito de sonolência excessiva no dia seguinte relatado nesse estudo.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Forma de uso",
    text: "1 colher de chá da casca em decocção de 10 minutos, 1 xícara à tarde ou à noite.",
  },

  { type: "h3", text: "Para o sono — Lúpulo" },
  {
    type: "p",
    text: "O lúpulo, mais conhecido pelo uso na cerveja, também é usado tradicionalmente como planta calmante, muitas vezes combinado à valeriana em fitoterápicos para sono. O efeito costuma ser suave e gradual, não comparável a um indutor de sono medicamentoso.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Forma de uso",
    text: "1 xícara em infusão, cerca de 30 minutos antes de dormir.",
  },

  { type: "h3", text: "Como encaixar os quatro chás ao longo do dia" },
  {
    type: "list",
    items: [
      "Manhã — oolong, para energia sem pico de estimulante",
      "Tarde — mulungu ou cavalinha, dependendo do sintoma do dia",
      "Noite — lúpulo, cerca de 30 minutos antes de dormir",
      "Qualquer um dos quatro pode ser consumido dentro de uma janela de jejum, sem quebrar o período, por não conterem calorias relevantes",
    ],
  },
  {
    type: "callout",
    variant: "aviso",
    title: "A virada",
    text: "Cada um desses quatro chás atua sobre um sintoma pontual, com mecanismo próprio e estudo publicado por trás. Nenhum deles, porém, ativa o mecanismo que efetivamente move o ponteiro da balança — que é o corpo passar por um período consistente de déficit calórico. O chá não compete com isso: ele é um apoio complementar, não um substituto.",
  },

  { type: "h2", text: "Chá para apoiar o reequilíbrio intestinal" },
  {
    type: "p",
    text: "Barriga inchada, gases, refluxo, sensação de estufamento, cansaço e dificuldade para emagrecer às vezes têm relação com um desequilíbrio da flora intestinal (disbiose). Esta mistura de especiarias culinárias é usada de forma tradicional como apoio ao reequilíbrio — não como diagnóstico ou tratamento da causa, que deve ser investigada com um médico se os sintomas persistirem.",
  },
  { type: "h3", text: "Os 5 ingredientes e o porquê" },
  {
    type: "list",
    items: [
      "Cravo (eugenol) — com propriedades antibacterianas e antifúngicas descritas na literatura.",
      "Orégano (carvacrol) — um dos compostos mais estudados por sua ação contra bactérias indesejadas no intestino.",
      "Tomilho (timol) — reforça a ação antibacteriana e antifúngica da mistura.",
      "Gengibre (gingerol) — tradicionalmente usado para conforto digestivo, associado à redução de refluxo e sensação de estufamento.",
      "Alho (alicina) — com ação bactericida natural; entra por último, fora do fogo, para preservar o composto ativo.",
    ],
  },
  { type: "h3", text: "Modo de preparo (rende 1 litro)" },
  {
    type: "p",
    text: "Ferva 500 ml de água e desligue o fogo. Junte 3 cravos, 1 colher de sobremesa de orégano, 1 colher de sobremesa de tomilho e 1 colher de sopa de gengibre ralado. Tampe e deixe em infusão por 10 minutos. Amasse 1 dente de alho e deixe descansar por 10 minutos antes de adicionar à mistura já coada. Beba ao longo do dia.",
  },
  { type: "h3", text: "Como usar" },
  {
    type: "p",
    text: "1 litro por dia, por 2 a 4 semanas, seguido de 1 semana de pausa antes de retomar, se desejar.",
  },
  {
    type: "callout",
    variant: "aviso",
    title: "Cuidados",
    text: "Gestantes, lactantes, quem usa anticoagulante ou tem cirurgia marcada só devem usar com liberação médica — alho e cravo têm efeito descrito sobre a coagulação. As quantidades indicadas são para adultos. Não interrompa nenhuma medicação em uso por conta desta mistura. Este chá é um auxiliar; se os sintomas persistirem, procure um médico para investigar a causa.",
  },
];

export default blocks;
