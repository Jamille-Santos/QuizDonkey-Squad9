function loadPerguntas(tema) {
    if (tema === "tema-1") {
        perguntas = [
            { pergunta: "Quem ganhou a Copa do Mundo de 2018?", opcoes: ["A) Alemanha", "B) Brasil", "C) França", "D) Argentina"], correta: 2 },
            { pergunta: "Qual jogador tem o maior número de Bolas de Ouro?", opcoes: ["A) Pelé", "B) Cristiano Ronaldo", "C) Lionel Messi", "D) Zidane"], correta: 2 },
            { pergunta: "Em que ano foi realizada a primeira Copa do Mundo?", opcoes: ["A) 1930", "B) 1940", "C) 1950", "D) 1960"], correta: 0 },
            
            { pergunta: "Quando o gigantesco BOTAFOGO foi campeão brasileiro pela última vez?", opcoes: ["A) 1997", "B) 2000", "C)  1995", "D) 1999"], correta: 2 },
            { pergunta: "Qual foi o motivo para o segundo uniforme do Brasil ser azul?", opcoes: ["A) Por causa do céu azul", "B) Por causa da nossa senhora aparecida", "C) Por causa do hino do nacional", "D) por causa do Cruzeiro"], correta: 1},
            { pergunta: "Quem é o maior artilheiro da seleção brasileira?", opcoes: ["A) Ronaldo", "B) Pelé", "C) Romário", "D) Neymar "], correta: 3 }
                    ];
    } else if (tema === "tema-2") {
        perguntas = [
            { pergunta: "Qual foi a primeira empresa a lançar um smartphone?", opcoes: ["A) Apple", "B) Nokia", "C) BlackBerry", "D) Motorola"], correta: 2 },
            { pergunta: "Quem inventou a World Wide Web (WWW)?", opcoes: ["A) Bill Gates", "B) Steve Jobs", "C) Tim Berners-Lee", "D) Mark Zuckerberg"], correta: 2 },
            { pergunta: "Qual empresa criou o primeiro processador comercial?", opcoes: ["A) Intel", "B) AMD", "C) IBM", "D) Microsoft"], correta: 0 },
            
            { pergunta: "Qual foi o primeiro veículo elétrico de produção em massa?", opcoes: ["A) Nissan Leaf", "B) Tesla Model S", "C) Chevrolet Volt", "D) Toyota Prius"], correta: 0},
            { pergunta: "Qual tecnologia está por trás das criptomoedas como o Bitcoin?", opcoes: ["A)Inteligência Artificial", "B) Blockchain", "C) Computação Quântica", "D) Cloud Computing"], correta: 1},
            { pergunta: "Quem é considerado o “pai” da Inteligência Artificial moderna?", opcoes: ["A) Alan Turing", "B) John McCarthy", "C) Elon Musk", "D) Steve Jobs"], correta: 1 }
            
        ];
    } else if (tema === "tema-3") {
        perguntas = [
            { pergunta: "Quem é o arqui-inimigo do Batman?", opcoes: ["A) Lex Luthor", "B) Coringa", "C) Duas-Caras", "D) Thanos"], correta: 1 },
            { pergunta: "Qual é o nome do lar dos super-heróis da Marvel conhecido como Vingadores", opcoes: ["A) Asgard", "B) Xandar", "C) Torre Dos Vingadores", "D) Gothan City"], correta: 2},
            { pergunta: "Qual é o verdadeiro nome do Super Choque?", opcoes: ["A) Marta", "B) Virgil", "C) Norberto", "D) Archie"], correta: 1 }
        ];
    } else if (tema === "tema-4") {
        perguntas = [
            { pergunta: "Qual é o nome do personagem principal em “O Rei Leão”?", opcoes: ["A) Simba", "B) Mufasa", "C) Scar", "D) Zazu"], correta: 0 },
            { pergunta: "Em que filme uma jovem chamada Bella se apaixona por um vampiro?", opcoes: ["A) Crepúsculo", "B) Amanhecer", "C) Harry Potter", "D) A Garota da Capa Vermelha"], correta: 0 },
            { pergunta: "No Filme os vingadores Qual personagem diz a famosa frase: “Eu sou o que sou”? ", opcoes: ["A) Thor", "B) Hulk", "C) Loki", "D) Capitão América"], correta: 2 },

            { pergunta: "No filme Harry Potter Qual objeto mágico Harry precisa destruir para derrotar Voldemort?", opcoes: ["A) A varinha das varinhas", "B) O diário de Tom Riddle", "C) As horcruxes", "D) A pedra filosofal"], correta: 2 },
            { pergunta: "No filme “Titanic” Qual é a causa do naufrágio do Titanic?", opcoes: ["A) Um incêndio", "B) Uma colisão com um iceberg", "C) Uma explosão", "D) Falha mecânica"], correta: 1 },
            { pergunta: "No filme “Barbie” Qual famoso artista da música contribui com uma canção para a trilha sonora do filme? ", opcoes: ["A) Taylor Swift", "B) Dua Lipa", "C) Billie Eilish", "D) Ariana Grande"], correta: 1 }
        ];
    }else if (tema === "tema-5") {
        perguntas = [
            { pergunta: "Qual é a origem da capoeira?", opcoes: ["A) Brasil", "B) África", "C) Portugal", "D) Espanha"], correta: 0 },
            { pergunta: "Qual é o principal objetivo da capoeira?", opcoes: ["A) Luta", "B) Dança e expressão cultural", "C) Combate militar", "D) Terapia"], correta: 1},
            { pergunta: "Qual é o nome do instrumento de percussão frequentemente usado na capoeira?", opcoes: ["A) Berimbau", "B) Pandeiro", "C) Atabaque", "D) Cavaquinho"], correta: 0 },

            { pergunta: "Como os praticantes de capoeira são chamados?", opcoes: ["A) Capoeiristas", "B) Lutadores", "C) Dançarinos", "D) Jogadores"], correta: 0 },        
            { pergunta: "Qual é um dos principais elementos culturais associados à capoeira?", opcoes: ["A) Samba de roda", "B) Maculelê", "C) Carimbó", "D) Todas as alternativas"], correta: 3 },
            { pergunta: "Qual é a vestimenta tradicional utilizada na capoeira?", opcoes: ["A) Terno e gravata", "B) Camiseta e calça branca", "C) Roupa de ginástica", "D) Traje de banho"], correta: 1 }        
        ];
    }else if (tema === "tema-6") {
        perguntas = [
            { pergunta: "Qual é a origem da capoeira?", opcoes: ["A) Brasil", "B) África", "C) Portugal", "D) Espanha"], correta: 0 },
            { pergunta: "Qual é o principal objetivo da capoeira?", opcoes: ["A) Luta", "B) Dança e expressão cultural", "C) Combate militar", "D) Terapia"], correta: 1},
            { pergunta: "Qual é o nome do instrumento de percussão frequentemente usado na capoeira?", opcoes: ["A) Berimbau", "B) Pandeiro", "C) Atabaque", "D) Cavaquinho"], correta: 0 },

            { pergunta: "Como os praticantes de capoeira são chamados?", opcoes: ["A) Capoeiristas", "B) Lutadores", "C) Dançarinos", "D) Jogadores"], correta: 0 },        
            { pergunta: "Qual é um dos principais elementos culturais associados à capoeira?", opcoes: ["A) Samba de roda", "B) Maculelê", "C) Carimbó", "D) Todas as alternativas"], correta: 3 },
            { pergunta: "Qual é a vestimenta tradicional utilizada na capoeira?", opcoes: ["A) Terno e gravata", "B) Camiseta e calça branca", "C) Roupa de ginástica", "D) Traje de banho"], correta: 1 }        
        
        ];
   
    }
    perguntaAtual = 0;
    }
