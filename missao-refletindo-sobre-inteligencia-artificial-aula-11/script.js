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
                texto: "Você empurra o osso com o pé,Provavelmente um cervo.O grupo segue em frente, mas o vento sussurra algo entre as árvores.",
                afirmacao: "Mia os examina e empalidece.(Isso... isso é humano.) O silêncio que se segue é cortado por um galho quebrando na floresta."
            },
            {
                texto: "Mia os examina e empalidece.(Isso... isso é humano.) O silêncio que se segue é cortado por um galho quebrando na floresta.",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            },
            {
                texto: "Jake ri, mas Derek olha fixo para a floresta.Tem algo errado aqui...",
            afirmacao: "Mia os examina e empalidece.(Isso... isso é humano.) O silêncio que se segue é cortado por um galho quebrando na floresta."
            },
        ]
        },
    {
        enunciado: "O grupo se acomoda em silêncio ao redor da fogueira, a luz das chamas projetando sombras inquietas. O clima tenso é interrompido por um urro profundo que ressoa entre as árvores - um som impossível, que não pertence a nenhum animal conhecido. Derek se ergue num movimento brusco, os dedos se fechando com força no cabo do machado.Alguém ouviu isso? Mia aperta a lanterna contra o peito, as mãos tremendo visivelmente.Não era o vento, ela murmura, os olhos fixos na escuridão além da clareira.",
        alternativas: [
            {
                texto: "Você avança entre as árvores. A lanterna revela pegadas enormes, com garras. Então, algo respira atrás de você.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "A escuridão os envolve. Algo se move rastejando no chão, farejando o ar. Uma mão enlameada arranha a barraca.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            },
    {texto: "O silêncio. Então... risadas. E um vulto corre entre as árvores, rápido demais para ser humano.",
    afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."

    },
        ]
    },
    {
        enunciado: "O grupo se acomoda em silêncio ao redor da fogueira, a luz das chamas projetando sombras inquietas enquanto o clima pesado paira no ar. De repente, um urro profundo e sobrenatural ecoa pela floresta, fazendo Derek se levantar rapidamente com o machado em punho. Alguém ouviu isso?, ele pergunta, voz tensa. Mia segura a lanterna com mãos trêmulas e sussurra: Não era o vento...",
        "Ao examinar os ossos encontrados anteriormente, Mia entra em pânico. Isso não é de animal... é humano, ela diz, recuando da fogueira com olhos arregalados de terror. Precisamos sair daqui. Agora.",
        "Antes que possam reagir, um novo urro responde ao grupo - mais próximo e mais agudo. Da escuridão entre as árvores emerge uma figura horrenda: alta, esquelética, com pele pálida esticada sobre ossos salientes. Seus olhos brilham com fome insaciável enquanto uma boca cheia de dentes afiados se abre num ricto grotesco. O Wendigo está aqui, e agora o grupo deve decidir rapidamente - correr, lutar ou se esconder - antes que seja tarde demais.",

        alternativas: [
            {
                texto: "O motor não liga. Algo bate no teto. Garras arranham o vidro.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Vocês se amontoam. O cheiro de sangue e terra podre enche o ar. Algo fareja do lado de fora.Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            },
            {
                texto: "Derek avança com o machado. O Wendigo esquiva e arranca seu braço com um movimento rápido. Seus gritos enchem a noite.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            },
        ]
    },
    {
        enunciado: "A cabana em ruínas exibe símbolos vermelhos nas paredes enquanto Mia, ao encontrar um diário sob a mesa, descobre a terrível verdade: Eles sacrificavam pessoas aqui para acalmar o Wendigo", 
        "(Ou, se preferir ainda mais conciso:)",
        "Em meio aos símbolos vermelhos da cabana arruinada, Mia descobre no diário que sacrificavam pessoas para apaziguar o Wendigo."
        "(Ou na sua estrutura exata: A cabana está em ruínas com símbolos vermelhos nas paredes, e Mia encontra um diário revelando que sacrificavam pessoas ali para acalmar o Wendigo.",
        
        alternativas: [
            {
                texto: "A porta cede com um rangido. Lá embaixo, corpos pendurados como carne em um açougue. E um amuleto brilhando no chão.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Vocês escutam o Wendigo arranhando o telhado. Ele sabe que vocês estão lá.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }, 
            {
                texto: "Quem vai sair? Derek, ferido? Mia, a mais assustada? Ou você?",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
