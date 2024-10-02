let perguntaAtual = 0;
let perguntas = [];

function loadPerguntas(tema) {
    if (tema === "tema-1") {
        perguntas = [
            { pergunta: "Qual é o maior oceano da Terra?", opcoes: ["Atlântico", "Pacífico", "Índico", "Ártico"], correta: 1 },
            { pergunta: "Quem pintou a Mona Lisa?", opcoes: ["Michelangelo", "Da Vinci", "Van Gogh", "Picasso"], correta: 1 },
            { pergunta: "Qual é a capital da França?", opcoes: ["Londres", "Paris", "Roma", "Berlim"], correta: 1 }
        ];
    } else if (tema === "tema-2") {
        perguntas = [
            { pergunta: "Quem ganhou a Copa do Mundo de 2018?", opcoes: ["Alemanha", "Brasil", "França", "Argentina"], correta: 2 },
            { pergunta: "Qual jogador tem o maior número de Bolas de Ouro?", opcoes: ["Pelé", "Cristiano Ronaldo", "Lionel Messi", "Zidane"], correta: 2 },
            { pergunta: "Em que ano foi realizada a primeira Copa do Mundo?", opcoes: ["1930", "1940", "1950", "1960"], correta: 0 }
        ];
    } else if (tema === "tema-3") {
        perguntas = [
            { pergunta: "Qual empresa desenvolveu o Windows?", opcoes: ["Apple", "Microsoft", "IBM", "Google"], correta: 1 },
            { pergunta: "O que significa HTML?", opcoes: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Transfer Markup Language"], correta: 0 },
            { pergunta: "Qual foi o primeiro motor de busca da Internet?", opcoes: ["Google", "Yahoo", "Bing", "Archie"], correta: 3 }
        ];
    } else if (tema === "tema-4") {
        perguntas = [
            { pergunta: "Quem é o arqui-inimigo do Batman?", opcoes: ["Lex Luthor", "Coringa", "Duas-Caras", "Thanos"], correta: 1 },
            { pergunta: "Qual é o nome do lar dos super-heróis da Marvel conhecido como Vingadores", opcoes: ["Asgard", "Xandar", "Torre Dos Vingadores", "Gothan City"], correta: 2},
            { pergunta: "Qual é o verdadeiro nome do Super Choque?", opcoes: ["Marta", "Virgil", "Norberto", "Archie"], correta: 1 }
        ];
    }else if (tema === "tema-5") {
        perguntas = [
            { pergunta: "1", opcoes: ["Lex Luthor", "Coringa", "Duas-Caras", "Thanos"], correta: 1 },
            { pergunta: "2", opcoes: ["Asgard", "Xandar", "Torre Dos Vingadores", "Gothan City"], correta: 2},
            { pergunta: "3", opcoes: ["Marta", "Virgil", "Norberto", "Archie"], correta: 1 }
        ];
    } else if (tema === "tema-6") {
        perguntas = [
            { pergunta: "1", opcoes: ["Lex Luthor", "Coringa", "Duas-Caras", "Thanos"], correta: 1 },
            { pergunta: "2", opcoes: ["Asgard", "Xandar", "Torre Dos Vingadores", "Gothan City"], correta: 2},
            { pergunta: "3", opcoes: ["Marta", "Virgil", "Norberto", "Archie"], correta: 1 }
        ];
    }
    
    }
