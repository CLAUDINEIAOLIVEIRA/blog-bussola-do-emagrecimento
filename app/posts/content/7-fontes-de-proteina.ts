import type { Block } from "../types";

const blocks: Block[] = [
  {
    type: "p",
    text: "Comer bem não depende de ingredientes caros. Este guia reúne sete fontes de proteína fáceis de encontrar, baratas por porção e com boa densidade de nutrientes — dos ovos do café da manhã às conservas que ficam anos na despensa.",
  },
  {
    type: "p",
    text: "Para cada alimento você encontra: o teor de proteína por 100 g, os nutrientes de destaque, os benefícios que a ciência da nutrição já confirma e os pontos de atenção que vale conhecer antes de exagerar na porção.",
  },
  {
    type: "callout",
    variant: "aviso",
    text: "Este material tem caráter educativo e informativo. Ele não substitui a avaliação individual de um médico ou nutricionista, especialmente para pessoas com condições de saúde específicas, gestantes ou crianças.",
  },

  { type: "h2", text: "1. Ovo — a referência de qualidade proteica" },
  {
    type: "p",
    text: "O ovo é o alimento usado pela ciência da nutrição como parâmetro para medir a qualidade da proteína de todos os outros — seu perfil de aminoácidos essenciais é praticamente completo. Cada unidade grande entrega cerca de 6 g de proteína de alto valor biológico, além de colina, selênio e vitamina D. Dois ovos no café da manhã resolvem a refeição que, para muita gente, começa e termina em pão.",
  },
  {
    type: "table",
    headers: ["Proteína / 100 g", "Porção de referência"],
    rows: [["13 g", "6 g por unidade (ovo grande cozido)"]],
  },
  { type: "h3", text: "Nutrientes de destaque" },
  {
    type: "list",
    items: [
      "Colina (essencial para memória e função hepática)",
      "Luteína e zeaxantina (saúde da visão)",
      "Selênio e vitamina D",
      "Vitamina B12",
    ],
  },
  { type: "h3", text: "Benefícios para a saúde" },
  {
    type: "list",
    items: [
      "Proteína completa: fornece todos os aminoácidos essenciais em proporção ideal para síntese muscular.",
      "A colina da gema participa da formação de membranas celulares e da função cognitiva.",
      "Estudos recentes mostram que, para a maioria das pessoas saudáveis, o consumo moderado de ovos não eleva de forma relevante o risco cardiovascular — o impacto do colesterol dietético é menor do que se pensava décadas atrás.",
    ],
  },
  { type: "h3", text: "Pontos de atenção" },
  {
    type: "list",
    items: [
      "Pessoas com diabetes tipo 2 ou dislipidemias devem conversar com o médico ou nutricionista sobre a quantidade individual recomendada.",
      "Prefira o cozimento com pouca ou nenhuma gordura extra (cozido, pochê) no dia a dia, guardando frituras para ocasiões pontuais.",
    ],
  },
  {
    type: "callout",
    variant: "dica",
    text: "Cozinhe uma dúzia de ovos no início da semana e mantenha na geladeira: é a proteína mais rápida de qualquer refeição de emergência, sem preparo no momento.",
  },

  { type: "h2", text: "2. Fígado de frango — o corte mais barato do açougue" },
  {
    type: "p",
    text: "São cerca de 24 g de proteína a cada 100 g, com ferro heme, vitamina B12 e vitamina A numa concentração que nenhum suplemento reproduz por esse preço. Uma porção pequena por semana já cobre boa parte da necessidade de ferro de uma mulher em idade fértil. Vinte minutos de molho no leite antes de refogar suavizam o sabor forte que afasta tanta gente.",
  },
  {
    type: "table",
    headers: ["Proteína / 100 g", "Porção de referência"],
    rows: [["24 g", "≈100 g = 1 porção pequena semanal recomendada"]],
  },
  { type: "h3", text: "Nutrientes de destaque" },
  {
    type: "list",
    items: [
      "Ferro heme (alta absorção pelo organismo)",
      "Vitamina B12 em concentração elevada",
      "Vitamina A (retinol)",
      "Ácido fólico",
    ],
  },
  { type: "h3", text: "Benefícios para a saúde" },
  {
    type: "list",
    items: [
      "O ferro heme do fígado é absorvido com muito mais eficiência do que o ferro de origem vegetal, ajudando na prevenção de anemia ferropriva.",
      "É uma das fontes mais concentradas de vitamina B12, importante para o sistema nervoso e a formação de glóbulos vermelhos.",
      "Fonte relevante de ácido fólico, nutriente associado à saúde cardiovascular e à formação celular.",
    ],
  },
  { type: "h3", text: "Pontos de atenção" },
  {
    type: "list",
    items: [
      "Por ser muito rico em vitamina A pré-formada, o consumo deve ser moderado — 1 a 2 porções pequenas por semana é suficiente para a maioria das pessoas.",
      "Gestantes devem ter atenção especial e conversar com o obstetra, pois o excesso de vitamina A está associado a riscos na gravidez.",
      "Também é rico em colesterol e purinas; pessoas com gota ou colesterol elevado devem moderar o consumo.",
    ],
  },
  {
    type: "callout",
    variant: "dica",
    text: "Deixe o fígado de molho em leite por 15–20 minutos antes de refogar: a técnica reduz o amargor e deixa o sabor mais suave sem perder nutrientes.",
  },

  { type: "h2", text: "3. Sardinha em lata — 25 g de proteína que dura anos na despensa" },
  {
    type: "p",
    text: "A sardinha em conserva junta proteína completa, ômega-3 e cálcio, porque a espinha amolece no processo de enlatamento e é consumida junto. Dispensa geladeira antes de aberta, dispensa preparo e custa uma fração do salmão que ocupa o feed. É o alimento de emergência ideal para o dia em que a rotina desmonta e a dieta quase ia junto.",
  },
  {
    type: "table",
    headers: ["Proteína / 100 g", "Porção de referência"],
    rows: [["25 g", "1 lata (≈84 g líquido escorrido) ≈ 20 g de proteína"]],
  },
  { type: "h3", text: "Nutrientes de destaque" },
  {
    type: "list",
    items: ["Ômega-3 (EPA e DHA)", "Cálcio (das espinhas comestíveis)", "Vitamina D e vitamina B12", "Selênio"],
  },
  { type: "h3", text: "Benefícios para a saúde" },
  {
    type: "list",
    items: [
      "O ômega-3 da sardinha tem ação anti-inflamatória e é reconhecido por seu papel na saúde cardiovascular.",
      "Por ser um peixe pequeno e de vida curta, a sardinha acumula pouco mercúrio comparada a peixes grandes e predadores.",
      "As espinhas amolecidas fornecem cálcio de boa biodisponibilidade, interessante para quem consome pouco laticínio.",
    ],
  },
  { type: "h3", text: "Pontos de atenção" },
  {
    type: "list",
    items: [
      "Conservas costumam ser ricas em sódio — vale conferir o rótulo e, se possível, escolher versões com menos sal ou escorrer bem o líquido.",
      "Prefira as latas em água ou azeite de oliva às versões em óleo de soja/vegetal comum, para melhorar a qualidade da gordura consumida.",
    ],
  },
  {
    type: "callout",
    variant: "dica",
    text: "Depois de aberta, transfira o conteúdo para um pote de vidro fechado e consuma em até 2 dias na geladeira — o metal da lata pode alterar o sabor com o tempo.",
  },

  { type: "h2", text: "4. Sobrecoxa de frango — a mesma ave, quase metade do preço" },
  {
    type: "p",
    text: "A sobrecoxa sem pele entrega proteína equivalente à do filé de peito, com um pouco mais de gordura e muito mais sabor. A diferença de preço por quilo tem a ver com a estética do corte e com a moda do peito grelhado, não com o valor nutricional. Para quem cozinha em casa, é o corte que perdoa erro de ponto e continua bom no dia seguinte.",
  },
  {
    type: "table",
    headers: ["Proteína / 100 g", "Porção de referência"],
    rows: [["≈24 g (sem pele, assada)", "1 sobrecoxa média (≈100 g) sem pele"]],
  },
  { type: "h3", text: "Nutrientes de destaque" },
  {
    type: "list",
    items: [
      "Ferro e zinco (mais concentrados do que no peito)",
      "Vitaminas do complexo B",
      "Gordura predominantemente insaturada quando sem pele",
    ],
  },
  { type: "h3", text: "Benefícios para a saúde" },
  {
    type: "list",
    items: [
      "É mais rica em ferro e zinco do que o peito de frango, minerais importantes para imunidade e transporte de oxigênio.",
      "A carne escura mantém-se suculenta mesmo com tempo de cozimento maior, o que reduz o desperdício por erro de ponto.",
      "Sem a pele, a gordura restante é majoritariamente insaturada.",
    ],
  },
  { type: "h3", text: "Pontos de atenção" },
  {
    type: "list",
    items: [
      "Com a pele, o teor de gordura (incluindo saturada) aumenta consideravelmente — retire-a se o objetivo for controlar calorias e gordura.",
      "Cuidado com molhos e marinadas prontas ricas em açúcar e sódio, comuns em receitas de sobrecoxa ao forno.",
    ],
  },
  {
    type: "callout",
    variant: "dica",
    text: "Asse em temperatura mais baixa por mais tempo (170 °C por 40–45 min): a gordura derrete lentamente e a carne fica macia sem precisar de excesso de óleo.",
  },

  { type: "h2", text: "5. Carne moída de músculo — 26 g de proteína depois de cozida" },
  {
    type: "p",
    text: "Músculo e acém são cortes de panela, cheios de colágeno, que rendem mais porções por quilo do que qualquer corte nobre. Moídos, viram base de molho, recheio e cozido, e congelam bem em porções de 150 g. O tempo de fogo é o que separa esse corte do preço do patinho — não a qualidade nutricional.",
  },
  {
    type: "table",
    headers: ["Proteína / 100 g", "Porção de referência"],
    rows: [["26 g (cozida)", "100 g cozidos ≈ 1 porção de refeição"]],
  },
  { type: "h3", text: "Nutrientes de destaque" },
  { type: "list", items: ["Ferro heme e zinco", "Vitamina B12", "Colágeno (glicina e prolina)"] },
  { type: "h3", text: "Benefícios para a saúde" },
  {
    type: "list",
    items: [
      "Excelente fonte de ferro heme e zinco, com alta biodisponibilidade — relevante na prevenção de anemia.",
      "O colágeno presente em cortes como músculo e acém, liberado no cozimento lento, contribui com aminoácidos ligados à saúde de pele, tendões e articulações.",
      "Rica em vitamina B12, essencial para o sistema nervoso.",
    ],
  },
  { type: "h3", text: "Pontos de atenção" },
  {
    type: "list",
    items: [
      "Escolha moída mais magra (menor percentual de gordura na embalagem) se o objetivo for reduzir gordura saturada.",
      "Cozimento longo em fogo baixo (ensopados, molhos) é o que amolece o colágeno; em fogo alto e rápido a carne fica dura — ajuste o método de preparo ao corte.",
    ],
  },
  {
    type: "callout",
    variant: "dica",
    text: "Congele em porções individuais de 150 g já temperadas: economiza tempo de preparo e evita descongelar mais carne do que o necessário.",
  },

  { type: "h2", text: "6. Pernil suíno — a carne mais barata do balcão" },
  {
    type: "p",
    text: "O pernil suíno magro entrega cerca de 27 g de proteína a cada 100 g, com teor de gordura próximo ao de cortes bovinos considerados magros. A suinocultura brasileira mudou de padrão nas últimas décadas — os animais são criados hoje com muito menos gordura — mas a reputação da carne ficou parada no tempo. Assado inteiro, resolve o almoço de vários dias com um custo por porção que nenhuma carne bovina alcança.",
  },
  {
    type: "table",
    headers: ["Proteína / 100 g", "Porção de referência"],
    rows: [["27 g (corte magro)", "100 g assados, sem excesso de gordura visível"]],
  },
  { type: "h3", text: "Nutrientes de destaque" },
  {
    type: "list",
    items: [
      "Tiamina / vitamina B1 (a mais rica entre as carnes comuns)",
      "Zinco e selênio",
      "Gordura majoritariamente monoinsaturada nos cortes magros",
    ],
  },
  { type: "h3", text: "Benefícios para a saúde" },
  {
    type: "list",
    items: [
      "O porco é a carne mais rica em tiamina (vitamina B1), nutriente ligado ao metabolismo energético e à saúde do sistema nervoso.",
      "Cortes magros do pernil têm perfil de gordura comparável ao de cortes bovinos considerados magros, contrariando a fama de carne gordurosa.",
      "Bom rendimento por quilo quando assado inteiro, o que reduz o custo por porção da refeição.",
    ],
  },
  { type: "h3", text: "Pontos de atenção" },
  {
    type: "list",
    items: [
      "Retire o excesso de gordura visível antes ou depois do preparo para manter o perfil mais magro.",
      "Temperos industrializados prontos para assar costumam ser ricos em sódio — quando possível, tempere em casa com ervas e especiarias.",
    ],
  },
  {
    type: "callout",
    variant: "dica",
    text: "Asse o pernil inteiro no fim de semana e porcione para a semana: rende almoços prontos com custo por porção geralmente menor do que qualquer corte bovino equivalente.",
  },

  { type: "h2", text: "7. Ricota — a melhor relação entre proteína e preço" },
  {
    type: "p",
    text: "São cerca de 12 g de proteína a cada 100 g, com pouca gordura e um sabor neutro que aceita preparo doce ou salgado. Amassada com azeite, substitui o requeijão no pão; batida, vira patê e recheio. É a forma mais barata de colocar proteína no lanche da tarde, o horário em que a fome costuma decidir sozinha.",
  },
  {
    type: "table",
    headers: ["Proteína / 100 g", "Porção de referência"],
    rows: [["12 g", "100 g (≈4 colheres de sopa cheias)"]],
  },
  { type: "h3", text: "Nutrientes de destaque" },
  { type: "list", items: ["Cálcio e fósforo", "Baixo teor de gordura e sódio (comparada a outros queijos)", "Vitamina B2 (riboflavina)"] },
  { type: "h3", text: "Benefícios para a saúde" },
  {
    type: "list",
    items: [
      "Entre os queijos, é uma das opções com menor teor de gordura e sódio por porção, o que ajuda a controlar calorias sem abrir mão de laticínio.",
      "Boa fonte de cálcio e fósforo, minerais importantes para a saúde óssea.",
      "Por passar por processo de fabricação que reduz a lactose, costuma ser mais bem tolerada por quem tem sensibilidade leve a laticínios — ainda assim, quem tem intolerância diagnosticada deve ter cautela.",
    ],
  },
  { type: "h3", text: "Pontos de atenção" },
  {
    type: "list",
    items: [
      "Ricotas industrializadas podem variar bastante em sódio — comparar rótulos vale a pena.",
      "Pessoas com alergia a proteína do leite devem evitar; a ricota continua sendo um laticínio.",
    ],
  },
  {
    type: "callout",
    variant: "dica",
    text: "Bata a ricota no processador com azeite, limão e ervas: em menos de 5 minutos vira um patê proteico para substituir cream cheese ou maionese no lanche.",
  },

  { type: "h2", text: "Quadro comparativo" },
  {
    type: "table",
    headers: ["Alimento", "Proteína / 100 g", "Nutriente-chave"],
    rows: [
      ["🥚 Ovo", "13 g", "Colina (memória e função hepática)"],
      ["🍗 Fígado de frango", "24 g", "Ferro heme (alta absorção)"],
      ["🐟 Sardinha em lata", "25 g", "Ômega-3 (EPA e DHA)"],
      ["🍖 Sobrecoxa de frango", "≈24 g (sem pele, assada)", "Ferro e zinco"],
      ["🥩 Carne moída de músculo", "26 g (cozida)", "Ferro heme e zinco"],
      ["🐖 Pernil suíno", "27 g (corte magro)", "Tiamina / vitamina B1"],
      ["🧀 Ricota", "12 g", "Cálcio e fósforo"],
    ],
  },
  { type: "h2", text: "Para fechar" },
  {
    type: "p",
    text: "Variar entre essas sete fontes ao longo da semana é uma forma simples de garantir proteína completa, boa densidade de micronutrientes e economia no orçamento — sem depender de suplementos ou de cortes nobres.",
  },
  {
    type: "callout",
    variant: "info",
    text: "Ajuste as quantidades ao seu contexto de saúde e, sempre que possível, conte com o acompanhamento de um nutricionista para personalizar as porções.",
  },
];

export default blocks;
