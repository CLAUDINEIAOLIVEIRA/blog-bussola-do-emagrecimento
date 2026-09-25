import type { Block } from "../types";

function receita(titulo: string, ingredientes: string, passos: string[]): Block[] {
  return [
    { type: "h3", text: titulo },
    { type: "p", text: `Ingredientes: ${ingredientes}` },
    { type: "list", ordered: true, items: passos },
  ];
}

const blocks: Block[] = [
  {
    type: "p",
    text: "Vinte receitas simples e rápidas, duas para cada uma das fontes de proteína do guia — dos ovos do café da manhã ao whey protein do lanche. Todas usam ingredientes fáceis de achar e um modo de preparo direto, sem complicação.",
  },
  {
    type: "callout",
    variant: "aviso",
    text: "As quantidades e o modo de preparo são sugestões gerais. Ajuste temperos, porções e substituições conforme sua rotina, restrições alimentares e orientação de um nutricionista.",
  },

  { type: "h2", text: "🥚 Receitas com ovo" },
  ...receita(
    "Receita 1: Omelete de forno proteico com legumes",
    "3 ovos inteiros + 2 claras, 1/2 xícara de espinafre ou couve picada, 1/2 tomate picado, 2 col. (sopa) de cottage ou queijo minas frescal, sal, pimenta e orégano a gosto.",
    [
      "Bata os ovos e as claras em uma tigela até ficar homogêneo.",
      "Adicione os legumes, o queijo e os temperos.",
      "Despeje em uma forma refratária pequena untada levemente com azeite ou em formas de silicone.",
      "Asse em forno pré-aquecido a 180 °C por 20–25 minutos ou até dourar.",
    ]
  ),
  ...receita(
    "Receita 2: Ovos mexidos turbinados com tomate e manjericão",
    "3 ovos inteiros, 50 g de peito de peru picado ou ricota esfarelada, 1 tomate picado, folhas de manjericão fresco, 1 col. (chá) de azeite extra-virgem.",
    [
      "Aqueça o azeite em fogo baixo em uma frigideira antiaderente.",
      "Adicione o tomate picado e refogue por 1 minuto.",
      "Despeje os ovos levemente batidos e mexa suavemente até começarem a coagular.",
      "Adicione o peito de peru (ou ricota) e o manjericão. Desligue o fogo antes de secar demais para manter a cremosidade.",
    ]
  ),

  { type: "h2", text: "🍗 Receitas com fígado de frango" },
  ...receita(
    "Receita 1: Fígado de frango acebolado com páprica",
    "200 g de fígado de frango limpo, 1 cebola média fatiada em tiras, 1 dente de alho picado, 1 col. (chá) de páprica defumada, sal, pimenta-do-reino e 1 col. (chá) de azeite.",
    [
      "Tempere o fígado com alho, sal, pimenta e páprica.",
      "Aqueça o azeite em uma frigideira antiaderente bem quente e doure os fígados por cerca de 3 a 4 minutos de cada lado (evite cozinhar demais para não ressecar).",
      "Retire o fígado, adicione a cebola na mesma frigideira e pingue um pouco de água para soltar o fundo do cozimento até a cebola amaciar.",
      "Misture a cebola ao fígado e sirva.",
    ]
  ),
  ...receita(
    "Receita 2: Patê proteico fit de fígado de frango",
    "200 g de fígado de frango grelhado/cozido, 2 col. (sopa) de queijo cottage ou creme de ricota light, 1 dente de alho assado ou refogado, sal, noz-moscada e cheiro-verde a gosto.",
    [
      "Cozinhe ou grelhe bem o fígado temperado com sal e alho.",
      "No processador ou liquidificador, bata o fígado morno com o cottage/creme de ricota e a noz-moscada até obter uma pasta cremosa.",
      "Ajuste o sal e finalize com cheiro-verde picado. Excelente para comer com palitos de pepino, cenoura ou torradas integrais.",
    ]
  ),

  { type: "h2", text: "🐟 Receitas com sardinha em lata" },
  ...receita(
    "Receita 1: Salada proteica de sardinha com grão-de-bico",
    "1 lata de sardinha em água (ou escorrida se for em óleo), 1/2 xícara de grão-de-bico cozido, 1/2 pepino picado, 1/2 tomate picado, 2 col. (sopa) de cebola roxa picada, suco de 1/2 limão, azeite e sal a gosto.",
    [
      "Limpe a sardinha removendo a espinha central (opcional) e desfie levemente.",
      "Em uma tigela, misture o grão-de-bico, o pepino, o tomate e a cebola.",
      "Adicione a sardinha e tempere com o limão, um fio de azeite, sal e pimenta. Misture delicadamente.",
    ]
  ),
  ...receita(
    "Receita 2: Hambúrguer/bolinho de sardinha e aveia",
    "2 latas de sardinha escorridas, 3 col. (sopa) de farinha ou farelo de aveia, 1 ovo, 2 col. (sopa) de cebola picada, salsinha picada, sal e pimenta a gosto.",
    [
      "Em uma tigela, amasse as sardinhas com um garfo.",
      "Adicione o ovo, a aveia, a cebola, a salsinha e os temperos. Misture bem até formar uma massa modelável.",
      "Molde no formato de hambúrgueres pequenos ou bolinhos.",
      "Grelhe em frigideira antiaderente untada até dourar os dois lados (ou asse na airfryer a 180 °C por 12–15 minutos).",
    ]
  ),

  { type: "h2", text: "🍖 Receitas com sobrecoxa de frango" },
  ...receita(
    "Receita 1: Sobrecoxa desossada (sem pele) grelhada ao molho de mostarda e ervas",
    "200 g de sobrecoxa desossada e sem pele, 1 col. (sopa) de mostarda amarela ou dijon, 1 dente de alho amassado, suco de 1/2 limão, alecrim, sal e pimenta.",
    [
      "Marine a sobrecoxa no limão, alho, mostarda, alecrim, sal e pimenta por pelo menos 15 minutos.",
      "Aqueça bem uma frigideira antiaderente (ou grelha).",
      "Grelhe o frango até dourar bem de um lado, vire e sele o outro lado até ficar completamente cozido por dentro.",
    ]
  ),
  ...receita(
    "Receita 2: Sobrecoxa assada com legumes de baixa caloria",
    "200 g de sobrecoxa sem pele, 1/2 abobrinha em rodelas, 1/2 pimentão amarelo em tiras, 5 tomates-cereja, 1 col. (chá) de azeite, páprica defumada, orégano, sal e alho.",
    [
      "Tempere a sobrecoxa e os legumes com alho, sal, páprica, orégano e o azeite.",
      "Coloque em uma assadeira e leve ao forno pré-aquecido a 200 °C por cerca de 30 a 35 minutos (ou na airfryer por 25 min a 180 °C), virando na metade do tempo.",
    ]
  ),

  { type: "h2", text: "🥩 Receitas com carne moída (músculo)" },
  ...receita(
    "Receita 1: Refogado de músculo moído com abobrinha e vagem",
    "200 g de músculo moído, 1/2 abobrinha picada em cubos, 1/2 xícara de vagem picada, 1/2 cebola picada, 1 dente de alho, 1/2 xícara de molho de tomate natural, sal e pimenta a gosto.",
    [
      "Em uma panela, doure o alho e a cebola.",
      "Adicione o músculo moído e refogue até perder a cor rosada e secar a água natural.",
      "Adicione a vagem, a abobrinha e o molho de tomate. Tampe e cozinhe em fogo baixo até os legumes ficarem macios e o molho encorpar.",
    ]
  ),
  ...receita(
    "Receita 2: Escondidinho fit de músculo moído com couve-flor",
    "200 g de músculo moído cozido e temperado, 2 xícaras de couve-flor cozida no vapor, 1 col. (sopa) de requeijão light ou creme de ricota, sal, pimenta e noz-moscada.",
    [
      "Processe a couve-flor cozida com o requeijão light, sal e noz-moscada até formar um purê bem liso.",
      "Em um refratário pequeno, coloque uma camada do músculo moído já preparado.",
      "Cubra com o purê de couve-flor e leve ao forno para gratinar por 15 minutos.",
    ]
  ),

  { type: "h2", text: "🐖 Receitas com pernil suíno" },
  ...receita(
    "Receita 1: Tiras de pernil com pimentões ao estilo oriental",
    "200 g de pernil suíno magro limpo (sem gordura visível) cortado em tiras, 1/2 pimentão vermelho e 1/2 pimentão verde em tiras, 1/2 cebola em tiras, 2 col. (sopa) de molho shoyu com sódio reduzido, 1 col. (chá) de óleo de gergelim ou azeite, gengibre ralado a gosto.",
    [
      "Tempere o pernil com sal, pimenta e o gengibre ralado.",
      "Em uma frigideira alta ou wok bem quente, adicione o azeite/óleo de gergelim e sele a carne até dourar.",
      "Adicione a cebola e os pimentões, refogando rapidamente para manter a crocância dos legumes.",
      "Finalize com o shoyu, mexa por 1 minuto e sirva.",
    ]
  ),
  ...receita(
    "Receita 2: Pernil suíno assado ao molho de limão e ervas",
    "200 g de bife de pernil magro, suco de 1 limão, 1 dente de alho amassado, tomilho e alecrim frescos, sal, pimenta e 1 col. (chá) de azeite.",
    [
      "Deixe o pernil marinando no limão, alho, ervas, sal e pimenta por 20 minutos.",
      "Leve ao forno a 190 °C coberto com papel-alumínio por 20 minutos.",
      "Retire o alumínio e deixe dourar por mais 10 minutos (ou faça na airfryer a 180 °C por cerca de 18–20 minutos).",
    ]
  ),

  { type: "h2", text: "🧀 Receitas com ricota" },
  ...receita(
    "Receita 1: Creme/patê de ricota com espinafre e frango desfiado",
    "100 g de ricota fresca, 100 g de peito de frango cozido e desfiado, 1/2 xícara de espinafre refogado, 2–3 col. (sopa) de leite desnatado ou iogurte natural desnatado (para dar ponto), sal, pimenta e noz-moscada.",
    [
      "Amasse a ricota com um garfo e misture com o leite/iogurte até virar uma pasta.",
      "Adicione o espinafre picado, o frango desfiado, o sal e os temperos.",
      "Misture bem. Pode ser consumido frio ou aquecido levemente no micro-ondas.",
    ]
  ),
  ...receita(
    "Receita 2: Panqueca proteica salgada de ricota",
    "100 g de ricota fresca amassada, 2 ovos, 1 col. (sopa) de farelo de aveia, salsinha picada, sal e pimenta.",
    [
      "Misture todos os ingredientes no mixer ou bata bem com o garfo até virar uma massa cremosa e homogênea.",
      "Aqueça uma frigideira antiaderente levemente untada.",
      "Despeje a massa e cozinhe em fogo baixo até firmar, vire com cuidado e doure o outro lado.",
    ]
  ),

  { type: "h2", text: "🥤 Receitas com whey protein" },
  ...receita(
    "Receita 1: Mousse proteico express de whey",
    "30 g (1 scoop) de whey protein (sabor chocolate, morango ou baunilha), 150 g de iogurte grego zero gordura / iogurte natural desnatado, 1 col. (chá) de cacau em pó 100% (opcional, se usar whey de chocolate).",
    [
      "Em uma tigela, adicione o iogurte desnatado e o whey protein.",
      "Misture vigorosamente com um garfo ou fouet até obter uma textura homogênea e aveludada.",
      "Leve ao congelador por 15–20 minutos antes de consumir para ficar bem gelado e firme.",
    ]
  ),
  ...receita(
    "Receita 2: Mingau proteico de aveia com whey",
    "30 g de aveia em flocos, 150 ml de água ou leite vegetal sem açúcar, 30 g (1 scoop) de whey protein, canela em pó a gosto.",
    [
      "Em uma panela pequena, cozinhe a aveia na água/leite com canela em fogo baixo até engrossar (cerca de 3–5 minutos).",
      "Desligue o fogo e espere o mingau amornar por 1 a 2 minutos (para não desnaturar/empelotar o whey).",
      "Adicione o whey protein e misture bem até incorporar completamente.",
    ]
  ),

  { type: "h2", text: "🍗 Receitas com moela de frango" },
  {
    type: "p",
    text: "A moela é um dos miúdos mais baratos do açougue e uma boa fonte de proteína magra, zinco e ferro heme — veja o perfil completo no post sobre miúdos.",
  },
  ...receita(
    "Receita 1: Moela ensopada com tomate e ervas",
    "200 g de moela de frango limpa, 1/2 cebola picada, 2 dentes de alho picados, 1/2 xícara de molho de tomate caseiro, 1 folha de louro, sal, pimenta e cheiro-verde.",
    [
      "Na panela de pressão, refogue o alho e a cebola.",
      "Adicione a moela limpa e doure ligeiramente.",
      "Adicione o molho de tomate, a folha de louro, sal, pimenta e cobertura de água (cerca de 1 xícara).",
      "Tampe a panela e cozinhe por 25 minutos após pegar pressão. Deixe sair a pressão naturalmente e finalize com cheiro-verde.",
    ]
  ),
  ...receita(
    "Receita 2: Moela acebolada grelhada na vinagrete",
    "200 g de moela limpa e pré-cozida na pressão com água e sal (por 20 min), 1 cebola grande em rodelas, 1 col. (chá) de azeite, pimenta-do-reino e suco de 1/2 limão.",
    [
      "Após cozinhar a moela na pressão e escorrer, corte as peças ao meio.",
      "Aqueça o azeite em uma frigideira antiaderente ou grelha e doure as moelas até ficarem fofas e levemente crocantes por fora.",
      "Adicione a cebola e refogue até amaciar.",
      "Finalize espremendo o limão por cima e ajuste o sal.",
    ]
  ),

  { type: "h2", text: "🥩 Receitas com carne patinho" },
  {
    type: "p",
    text: "O patinho é um dos cortes bovinos magros mais versáteis do dia a dia — rende tanto bifes rápidos quanto pratos moídos, com pouca gordura.",
  },
  ...receita(
    "Receita 1: Bife de patinho acebolado rápido",
    "200 g de bife de patinho, 1/2 cebola em rodelas, 1 dente de alho amassado, sal, pimenta-do-reino e 1 col. (chá) de azeite.",
    [
      "Tempere o bife com alho, sal e pimenta.",
      "Aqueça muito bem uma frigideira com o azeite (a frigideira deve estar fumaçando para selar a carne sem juntar água).",
      "Sele o bife por cerca de 2 minutos de cada lado.",
      "Retire o bife, adicione as rodelas de cebola na mesma frigideira e um pingo de água para puxar o suco da carne até a cebola dourar. Cubra o bife com as cebolas.",
    ]
  ),
  ...receita(
    "Receita 2: Kibe de bandeja fit (patinho com hortelã)",
    "200 g de patinho moído, 3 col. (sopa) de trigo para kibe (hidratado em água morna por 20 min e bem escorrido), 2 col. (sopa) de hortelã fresca picada, 1/4 de cebola bem picadinha, sal, pimenta-do-reino e pimenta-da-síria.",
    [
      "Em uma tigela, misture o patinho moído, o trigo escorrido, a cebola, a hortelã e os temperos até formar uma massa homogênea.",
      "Acomode a massa em um refratário pequeno, pressionando bem. Faça riscos superficiais com a faca por cima.",
      "Asse em forno pré-aquecido a 200 °C por 20 a 25 minutos.",
    ]
  ),
];

export default blocks;
