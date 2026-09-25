import type { Block } from "../types";

const blocks: Block[] = [
  {
    type: "p",
    text: "Nem toda suplementação precisa ser cara ou seguir modismo. Os cinco itens abaixo têm respaldo científico consistente e cobrem necessidades comuns de quem treina e cuida da alimentação — vale guardar as doses de referência mais usadas.",
  },
  {
    type: "table",
    headers: ["Suplemento", "Dose e forma de uso"],
    rows: [
      [
        "Creatina",
        "3 g a 5 g por dia, todos os dias — inclusive em dias sem treino. Pode ser tomada em qualquer horário, com água, suco ou junto de outra bebida; o que mais importa é a regularidade.",
      ],
      [
        "Whey Protein",
        "25 g a 40 g por dose, de 1 a 2 vezes ao dia. Boa opção no pós-treino ou em qualquer refeição para completar a meta diária de proteína.",
      ],
      [
        "Ômega 3",
        "1 g a 3 g por dia, somando EPA e DHA. Tomar junto de uma refeição com gordura melhora a absorção.",
      ],
      [
        "Vitamina D3",
        "Costuma variar entre 1.000 UI e 5.000 UI por dia, tomada pela manhã junto de uma refeição com gordura. O ideal é ajustar a dose com exame de sangue e acompanhamento profissional.",
      ],
      [
        "Magnésio",
        "200 mg a 400 mg por dia, preferencialmente à noite, antes de dormir — o que também pode favorecer a qualidade do sono. Formas como glicinato ou citrato tendem a ter melhor absorção.",
      ],
    ],
  },
  {
    type: "callout",
    variant: "aviso",
    text: "Essas são faixas gerais usadas por pessoas saudáveis. A dose ideal varia com peso, objetivo, função renal e outros fatores individuais — antes de iniciar qualquer suplementação, especialmente vitamina D3 em doses mais altas, converse com um médico ou nutricionista, sobretudo se você tiver alguma condição de saúde ou usar outros medicamentos.",
  },
];

export default blocks;
