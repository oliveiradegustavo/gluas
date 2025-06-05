const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Capítulo 1: A Chegada – O Presságio" <br>" O sol se põe sobre a Floresta Blackwood, tingindo as árvores de vermelho-sangue. Seu carro balança na estrada de terra, faróis cortando a névoa que sobe do chão úmido." <br>" Lena, no banco do passageiro, segura o mapa com dedos tensos."<br>"— Segundo essa lenda, essa floresta é protegida por algo... um espírito chamado Wendigo."<br>" Jake, no banco de trás, ri enquanto abre uma cerveja."<br> "Ah, claro. E eu sou o Papai Noel. Relaxem, gente, é só um monte de árvore e urso."<br>"O carro para no acampamento. Enquanto descarregam as mochilas, Mia nota algo brilhando entre as folhas."<br>"— Ei... o que é isso?"<br>"Ela puxa um osso longo, rachado e com marcas de dentes. Não é de animal.",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 5",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
];
