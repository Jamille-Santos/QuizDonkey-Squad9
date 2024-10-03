let perguntaAtual = 0;
let perguntas = [];

function loadPerguntas(tema) {
    if (tema === "tema-1") {
        perguntas = [
            { pergunta: "Quem ganhou a Copa do Mundo de 2018?", opcoes: ["Alemanha", "Brasil", "França", "Argentina"], correta: 2 },
            { pergunta: "Qual jogador tem o maior número de Bolas de Ouro?", opcoes: ["Pelé", "Cristiano Ronaldo", "Lionel Messi", "Zidane"], correta: 2 },
            { pergunta: "Em que ano foi realizada a primeira Copa do Mundo?", opcoes: ["1930", "1940", "1950", "1960"], correta: 0 },
            
            { pergunta: "Quando o gigantesco BOTAFOGO foi campeão brasileiro pela última vez?", opcoes: ["1997", "2000", " 1995", "1999"], correta: 2 },
            { pergunta: "Qual foi o motivo para o segundo uniforme do Brasil ser azul?", opcoes: ["Por causa do céu azul", "Por causa da nossa senhora aparecida", "Por causa do hino do nacional", "por causa do Cruzeiro"], correta: 1},
            { pergunta: "Quem é o maior artilheiro da seleção brasileira?", opcoes: ["Ronaldo", "Pelé", "Romário", "Neymar "], correta: 3 }
                    ];
    } else if (tema === "tema-2") {
        perguntas = [
            { pergunta: "Qual foi a primeira empresa a lançar um smartphone?", opcoes: ["A) Apple", "B) Nokia", "C) BlackBerry", "D) Motorola"], correta: 2 },
            { pergunta: "Quem inventou a World Wide Web (WWW)?", opcoes: ["A) Bill Gates", "B) Steve Jobs", "C) Tim Berners-Lee", "D) Mark Zuckerberg"], correta: 2 },
            { pergunta: "Qual empresa criou o primeiro processador comercial?", opcoes: ["A) Intel", "B) AMD", "C) IBM", "D) Microsoft"], correta: 0 },
            
            { pergunta: "Qual foi o primeiro veículo elétrico de produção em massa?", opcoes: ["A) Nissan Leaf", "B) Tesla Model S", "C) Chevrolet Volt", "D) Toyota Prius"], correta: 0},
            { pergunta: "Qual tecnologia está por trás das criptomoedas como o Bitcoin?", opcoes: ["A)Inteligência Artificial", "B) Blockchain", "C) Computação Quântica", "D) Cloud Computing"], correta: 1},
            { pergunta: "Quem é considerado o ¨pai¨ da Inteligência Artificial moderna?", opcoes: ["A) Alan Turing", "B) John McCarthy", "C) Elon Musk", "D) Steve Jobs"], correta: 1 }
            
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
            { pergunta: "1", opcoes: ["1997", "2000", " 1995", "1999"], correta: 2 },
            { pergunta: "2", opcoes: ["Por causa do céu azul", "Por causa da nossa senhora aparecida", "Por causa do hino do nacional", "por causa do Cruzeiro"], correta: 1},
            { pergunta: "3", opcoes: ["Ronaldo", "Pelé", "Romário", "Neymar "], correta: 3 }
        ];
   
    }
    
    }
