const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O sol se põe sobre a Floresta Blackwood, tingindo as árvores de vermelho-sangue, enquanto o carro de Lena, Jake e Mia balança na estrada de terra, com faróis cortando a névoa; Lena menciona a lenda do Wendigo, Jake zomba da ideia, mas, ao chegarem ao acampamento, Mia encontra um osso longo com marcas de dentes humanas, sugerindo um perigo real.",
        alternativas: [
            {
                texto: "Ignorar e montar o acampamento.",
                afirmacao: "Você empurra o osso com o pé,Provavelmente um cervo.O grupo segue em frente, mas o vento sussurra algo entre as árvores."
            },
            {
                texto: " Investigar os ossos.",
                afirmacao: "Mia os examina e empalidece.(Isso... isso é humano.) O silêncio que se segue é cortado por um galho quebrando na floresta."
            },
            {
                texto: "Brincar, dizendo que são restos de um churrasco.",
            afirmacao: "Jake ri, mas Derek olha fixo para a floresta.Tem algo errado aqui..."
            },
        ]
        },
    {
        enunciado: "O grupo se acomoda em silêncio ao redor da fogueira, a luz das chamas projetando sombras inquietas. O clima tenso é interrompido por um urro profundo que ressoa entre as árvores - um som impossível, que não pertence a nenhum animal conhecido. Derek se ergue num movimento brusco, os dedos se fechando com força no cabo do machado.Alguém ouviu isso? Mia aperta a lanterna contra o peito, as mãos tremendo visivelmente.Não era o vento, ela murmura, os olhos fixos na escuridão além da clareira.",
        alternativas: [
            {
                texto: "Pegar uma lanterna e investigar.",
                
                afirmacao: "Você avança entre as árvores. A lanterna revela pegadas enormes, com garras. Então, algo respira atrás de você."
            },
            {
                texto: "Apagar o fogo e ficar em silêncio.",
                afirmacao: "A escuridão os envolve. Algo se move rastejando no chão, farejando o ar. Uma mão enlameada arranha a barraca."
            },
    {texto: "Gritar se Tem alguém aí?!",
    afirmacao: "O silêncio. Então... risadas. E um vulto corre entre as árvores, rápido demais para ser humano."

    },
        ]
    },
    {
        enunciado: "Uma escuridão densa envolve o acampamento, interrompida apenas pelo brilho trêmulo da fogueira que lança sombras distorcidas nos rostos tensos do grupo. O silêncio é quebrado por um urro gutural que parece vir de todos os lados ao mesmo tempo, fazendo Derek saltar em pé com o machado já nas mãos. Mia aperta a lanterna contra o peito, seus dedos tremendo visivelmente, enquanto sussurra que aquilo definitivamente não era o vento. Quando seus olhos encontram os ossos espalhados no chão, seu rosto perde toda cor - as marcas de dentes e fraturas contam uma história macabra demais para ser de qualquer animal conhecido. Antes que o pânico possa se espalhar completamente, outro urro, agora tão próximo que faz o ar vibrar, anuncia a chegada da criatura. Das sombras entre os pinheiros surge uma silhueta que desafia a lógica - membros alongados demais, costelas visíveis sob pele esbranquiçada, e olhos que brilham com uma fome ancestral. O Wendigo os observa, sua mandíbula se distendendo num sorriso de presas amareladas, enquanto o grupo congela diante da decisão mais importante de suas vidas: fugir, lutar ou se esconder, sabendo que qualquer escolha pode ser a última.",

        alternativas: [
            {
                texto: "Correr para o carro.",
                afirmacao: "O motor não liga. Algo bate no teto. Garras arranham o vidro."
            },
            {
                texto: "Se esconder na barraca.",
                afirmacao: "Vocês se amontoam. O cheiro de sangue e terra podre enche o ar. Algo fareja do lado de fora.Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores."
            },
            {
                texto: "Lutar.",
                afirmacao: "Derek avança com o machado. O Wendigo esquiva e arranca seu braço com um movimento rápido. Seus gritos enchem a noite."
            },
        ]
    },
    {
        enunciado: "A cabana em ruínas exibe símbolos vermelhos nas paredes enquanto Mia, ao encontrar um diário sob a mesa, descobre a terrível verdade: Eles sacrificavam pessoas aqui para acalmar o Wendigo", 
        
        alternativas: [
            {
                texto: "Arrombar o porão.",

                afirmacao: "A porta cede com um rangido. Lá embaixo, corpos pendurados como carne em um açougue. E um amuleto brilhando no chão."
            },
            {
                texto: "Barricar a porta e esperar.",
                afirmacao: "Vocês escutam o Wendigo arranhando o telhado. Ele sabe que vocês estão lá."
            },
            {
                texto: " Usar isca humana.",
                afirmacao: "Quem vai sair? Derek, ferido? Mia, a mais assustada? Ou você?"
            },
        ]
    }, 
    {
        enunciado: "Enquanto a água negra e gelada envolve a ponte podre, Lena olha para trás e grita: Ele está vindo.",
        alternativas: [
            {
                texto: " Correr pela ponte.",
                afirmacao: "A madeira quebra. Alguém cai. O Wendigo pula atrás."
            },
            {
                texto: "Atravessar o rio.",
                afirmacao: "A água paralisa seus músculos. Algo se mexe debaixo da superfície. "
            },
            {
                texto: "Enfrentar o Wendigo.",
                afirmacao: "Vocês se viram. Ele sorri, mostrando dentes afiados. Alguém não vai voltar."
            }
        ]
    },
    {
        enunciado: "Sua lanterna está fraca. Derek sangra muito. Mia está em choque.",
        alternativas: [
            {
                texto: "Usar fogo.",
                afirmacao: "Você ateia chamas. O Wendigo grita, mas o fogo se espalha rápido demais."
            },
            {
                texto: " Esperar o amanhecer.",
                afirmacao: "A noite parece eterna. Alguém começa a ver coisas."
            },
            {
                texto: "Sacrifício.",
                afirmacao: "Quem você escolhe? Lena? Derek? Você mesmo?"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
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

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Final";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
