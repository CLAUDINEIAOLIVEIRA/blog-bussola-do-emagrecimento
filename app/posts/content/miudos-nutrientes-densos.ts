import type { Block } from "../types";

const blocks: Block[] = [
  {
    type: "p",
    text: "Fígado, moela, pé, coração, bucho, rabo, tutano, língua e rins costumam ser os cortes mais baratos do açougue — e, ao mesmo tempo, alguns dos mais concentrados em vitaminas e minerais que existem. Cada um deles é tratado a seguir com seus nutrientes de destaque e os cuidados específicos de consumo.",
  },
  {
    type: "p",
    text: "Os ovos, outra fonte densa e acessível de nutrientes, já foram tratados no post sobre as 7 fontes de proteína.",
  },

  { type: "h2", text: "Fígado" },
  {
    type: "p",
    text: "Um dos alimentos mais completos em micronutrientes que existem na natureza: vitamina A na forma ativa (retinol), vitamina B12 em altíssima concentração, ferro heme de alta absorção, cobre, zinco, selênio e colina. Uma porção de 100 g cobre com folga a necessidade diária de vitamina A e de B12 — nenhuma cápsula reúne esse pacote inteiro de uma vez, e o quilo costuma custar menos que um pote de multivitamínico.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Informação de saúde",
    text: "Por ser rico em vitamina A pré-formada, o consumo deve ficar entre 1 e 2 porções pequenas por semana para a maioria das pessoas — o excesso está associado a riscos, especialmente na gestação. Também é rico em colesterol e purinas; quem tem gota ou dislipidemia relevante deve moderar e conversar com o médico.",
  },

  { type: "h2", text: "Moela" },
  {
    type: "p",
    text: "Proteína densa pelo menor preço do açougue: proteína magra em alta concentração, zinco e selênio, ferro heme biodisponível, B12 e niacina. O músculo que tritura o alimento da ave é um dos tecidos mais densos em proteína que existem — relevante para quem busca preservar massa magra durante o emagrecimento.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Informação de saúde",
    text: "É um corte magro, mas pode conter mais colesterol do que outros cortes de frango. Cozinhar em fogo baixo por mais tempo amacia a textura naturalmente firme sem precisar de excesso de óleo.",
  },

  { type: "h2", text: "Pé de galinha" },
  {
    type: "p",
    text: "Colágeno de verdade vem do osso, do tendão e da pele: colágeno tipos I e II, glicosaminoglicanos naturais, cálcio e fósforo, magnésio e glicina. O caldo cozido lentamente extrai o que a indústria vende em sachê — a glicina participa da reparação da barreira intestinal e do tecido conjuntivo, pele, articulação e cartilagem incluídas.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Informação de saúde",
    text: "O colágeno alimentar fornece aminoácidos que o corpo pode usar como matéria-prima, mas a ciência ainda não confirma que ele seja direcionado especificamente para pele ou articulações — a resposta varia de pessoa para pessoa. Ainda assim, é uma forma econômica e saborosa de consumir esses aminoácidos via caldo caseiro.",
  },

  { type: "h2", text: "Coração" },
  {
    type: "p",
    text: "Uma das maiores concentrações alimentares de coenzima Q10: CoQ10 em nível elevado, taurina, ferro e zinco, complexo B (especialmente B12). A CoQ10 participa da produção de energia dentro da mitocôndria — o mesmo composto vendido em cápsula a preço elevado aparece aqui no espeto de churrasquinho.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Informação de saúde",
    text: "A CoQ10 é especialmente discutida para quem usa estatinas, medicamentos que podem reduzir os níveis naturais dessa substância no corpo — vale perguntar ao médico sobre a real necessidade de suplementação nesse caso. O coração também é rico em colesterol, o que pede moderação para quem tem dislipidemia.",
  },

  { type: "h2", text: "Bucho" },
  {
    type: "p",
    text: "A dobradinha que sustentou gerações de trabalhadores brasileiros: proteína de alta digestibilidade, colágeno abundante, zinco, selênio e manganês, poucas calorias por porção. Prato tradicional da cozinha brasileira, o bucho combina proteína estrutural com minerais que participam da imunidade e da função da tireoide, por uma fração do preço de um corte nobre.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Informação de saúde",
    text: "Por ser tradicionalmente preparado com bastante tempero e, às vezes, embutidos (como na dobradinha com linguiça), vale atenção ao sódio e à gordura adicionados no preparo — o bucho em si é magro.",
  },

  { type: "h2", text: "Rabo e tutano" },
  {
    type: "p",
    text: "O corte que reúne o que ajuda a reconstruir articulação, osso e medula: colágeno abundante, tutano com vitaminas lipossolúveis, cálcio, fósforo e ferro, compostos imunomoduladores da medula. A rabada cozida por horas vira um caldo espesso de colágeno, e o tutano concentra parte da gordura mais nutritiva do boi — juntos, fornecem matéria-prima que o corpo usa para repor osso e tecido conjuntivo.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Informação de saúde",
    text: "É um dos cortes mais calóricos e ricos em gordura saturada desta lista — vale equilibrar porção e frequência dentro do padrão alimentar da semana, especialmente para quem monitora colesterol.",
  },

  { type: "h2", text: "Língua bovina" },
  {
    type: "p",
    text: "Um dos cortes mais macios do boi — e um dos mais esquecidos por aqui: ferro heme biodisponível, vitaminas do complexo B, zinco e potássio, colágeno natural. Fora do Brasil, a língua é disputada: vira taco no México e é iguaria de churrascaria no Japão. Aqui ainda é encontrada por preço de miúdo na banca do açougue.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Informação de saúde",
    text: "É um corte com teor de gordura moderado a alto — cozinhar e remover a camada externa de gordura antes de fatiar reduz consideravelmente a gordura saturada da porção final.",
  },

  { type: "h2", text: "Rins" },
  {
    type: "p",
    text: "Riboflavina e selênio em concentração de suplemento: vitamina B2 em altíssima concentração, B12 e ácido fólico, selênio (relevante para a tireoide), ferro e zinco. No Uruguai e na Argentina, o rim faz parte da parrilla de domingo. O selênio participa da conversão do hormônio da tireoide — nutriente relevante para quem acompanha questões metabólicas.",
  },
  {
    type: "callout",
    variant: "info",
    title: "Informação de saúde",
    text: "Os rins filtram substâncias ao longo da vida do animal e podem concentrar mais colesterol e purinas do que outros cortes — pessoas com gota, doença renal ou dislipidemia significativa devem consumir com moderação e, idealmente, orientação profissional.",
  },

  { type: "h2", text: "Variedade também é estratégia" },
  {
    type: "p",
    text: "Incluir miúdos uma ou duas vezes por semana, alternando entre os cortes, é uma forma de ampliar a densidade nutricional da alimentação sem elevar muito o orçamento. Como a maioria concentra colesterol, purinas ou vitamina A em quantidade relevante, a palavra-chave aqui é variedade e moderação — não substituição total das demais proteínas do guia.",
  },
];

export default blocks;
