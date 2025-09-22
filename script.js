const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual tipo de show você prefere? ",
        alternativas: [
            {
                texto: " Uma apresentação com coreografias elaboradas e figurinos chamativos.",
                afirmacao: "Ama apresentações com coreografias complexas e figurinos impactantes."
            },
            {
                texto: "Um show mais intimista, com foco na melodia e nas letras poéticas. ",
                afirmacao: "Prefere shows intimistas que valorizam a melodia e as letras poéticas."
            }
        ]
    },
    {
        enunciado: "Em qual desses cenários você se sentiria mais à vontade? ?",
        alternativas: [
            {
                texto: "Em um evento com um público jovem e bastante animado, cantando em uníssono",
                afirmacao: "Prefere ambientes com um público jovem e enérgico, onde a energia é contagiante."
            },
            {
                texto: "Em um barzinho aconchegante, curtindo uma voz e um violão.",
                afirmacao: "Gosta mais de um barzinho aconchegante, onde posso apreciar uma voz e um violão."
            }
        ]
    },
    {
        enunciado: "Qual desses elementos é mais importante para você em uma música?",
        alternativas: [
            {
                texto: " O ritmo dançante e a produção musical moderna. ",
                afirmacao:  "Para você, o ritmo e a produção moderna são os aspectos mais importantes em uma música."
            },
            {
                texto: "A profundidade da letra e a harmonia dos instrumentos acústicos. ",
                afirmacao: "Valoriza a profundidade das letras e a harmonia dos instrumentos acústicos."
            }
        ]
    },
    {
        enunciado: "Ao ouvir uma nova música, o que mais chama sua atenção? ? ",
        alternativas: [
            {
                texto: "O visual do artista e a performance no videoclipe.  ",
                afirmacao: "O visual do artista e a performance no videoclipe são o que mais me chamam a atenção."
            },
            {
                texto: "A riqueza dos arranjos e a história contada na canção. ",
                afirmacao: "A riqueza dos arranjos e a história contada na canção são o que mais me prendem."
            }
        ]
    },
    {
        enunciado: " Se tivesse que escolher um estilo para ouvir em uma viagem de carro, qual seria? ",
        alternativas: [
            {
                texto: "Uma playlist cheia de energia e batidas marcantes para manter o ânimo. ",
                afirmacao: "Em uma viagem de carro, gosta de playlists com batidas fortes para manter a animação."
            },
            {
                texto: " Uma coletânea de canções calmas e clássicas para relaxar e apreciar a paisagem. ",
                afirmacao: "Durante uma viagem de carro, prefiro ouvir canções calmas e clássicas para relaxar ."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();