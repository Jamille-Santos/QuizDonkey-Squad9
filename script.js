let pontos = 0;
let erros = 0;
let cronometro;
let tempoRestante = 15;

//iniciar o quiz
function iniciarQuiz() {
    document.getElementById('escolha-tema').classList.add('esconder');
    document.getElementById('quiz').classList.remove('esconder');
    perguntaAtual = 0;
    erros = 0;
    exibirPergunta();
}

//exibir a pergunta atual
function exibirPergunta() {
    if (perguntaAtual < perguntas.length) {
        // reinicia o cronômetro para cada pergunta
        reiniciarCronometro();

        const perguntaContainer = document.getElementById('perguntas');
        perguntaContainer.innerHTML = ""; // limpar conteúdo anterior

        const perguntaObj = perguntas[perguntaAtual];
        const perguntaElemento = document.createElement('p');
        perguntaElemento.innerText = perguntaObj.pergunta;
        perguntaContainer.appendChild(perguntaElemento);

        perguntaObj.opcoes.forEach((opcao, index) => {
            const opcaoElemento = document.createElement('button');
            opcaoElemento.innerText = opcao;
            opcaoElemento.classList.add('opcao-btn');
            opcaoElemento.addEventListener('click', function() {
                verificarResposta(index);
            });
            perguntaContainer.appendChild(opcaoElemento);
        });
    } else {
        fimDoJogo();
    }
}

//verificar a resposta
function verificarResposta(opcaoSelecionada) {
    if (opcaoSelecionada === perguntas[perguntaAtual].correta) {
        alert("Resposta Correta!");
    } else {
        alert("Resposta Incorreta!");
        erros++;
        if (erros >= 2) {
            fimDeJogoPorErros();
            return;
        }
    }
    perguntaAtual++;
    exibirPergunta();
}

//reiniciar o cronômetro
function reiniciarCronometro() {
    clearInterval(cronometro); // limpa o cronômetro anterior
    tempoRestante = 15; // reinicia para 15 segundos
    document.getElementById('cronometro').innerText = `Tempo restante: ${tempoRestante}s`;

    cronometro = setInterval(function() {
        tempoRestante--;
        document.getElementById('cronometro').innerText = `Tempo restante: ${tempoRestante}s`;
        if (tempoRestante <= 0) {
            clearInterval(cronometro);
            alert("Tempo esgotado!");
            erros++;
            if (erros >= 2) {
                fimDeJogoPorErros();
            } else {
                perguntaAtual++;
                exibirPergunta();
            }
        }
    }, 1000);
}

// finalizar o jogo por erros
function fimDeJogoPorErros() {
    clearInterval(cronometro);
    document.getElementById('quiz').classList.add('esconder');
    document.getElementById('game-over').classList.remove('esconder');
    document.getElementById('game-over-mensagem').innerText = `Game Over, ${nomeUsuario}. Você errou 2 vezes.`;
}

// finalizar o jogo ao completar o quiz
function fimDoJogo() {
    clearInterval(cronometro);
    document.getElementById('quiz').classList.add('esconder');
    document.getElementById('game-over').classList.remove('esconder');
    document.getElementById('game-over-mensagem').innerText = `Parabéns, ${nomeUsuario}! Você completou o quiz.`;
}

// reiniciar o jogo
document.getElementById('reiniciar-btn').addEventListener('click', function() {
    document.getElementById('game-over').classList.add('esconder');
    document.getElementById('inicio').classList.remove('esconder');
});
