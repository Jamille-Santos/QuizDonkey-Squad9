let pontos = 0;
let cronometroInterval;
let tempoRestante = 30; // 30 segundos por pergunta

// Função para iniciar o quiz
function iniciarQuiz() {
    document.getElementById('escolha-tema').classList.add('esconder');
    document.getElementById('quiz').classList.remove('esconder');
    exibirPergunta();
    iniciarCronometro();
}

// Função para exibir as perguntas
function exibirPergunta() {
    let perguntaAtualObj = perguntas[perguntaAtual];
    let perguntasDiv = document.getElementById('perguntas');
    perguntasDiv.innerHTML = '';

    let perguntaEl = document.createElement('p');
    perguntaEl.textContent = perguntaAtualObj.pergunta;
    perguntasDiv.appendChild(perguntaEl);

    perguntaAtualObj.opcoes.forEach((opcao, index) => {
        let opcaoBtn = document.createElement('button');
        opcaoBtn.textContent = opcao;
        opcaoBtn.classList.add('opcao-btn');
        opcaoBtn.addEventListener('click', function() {
            if (index === perguntaAtualObj.correta) {
                opcaoBtn.classList.add('resposta-correta');
                pontos++;
            }
            setTimeout(() => {
                proximaPergunta();
            }, 1000);
        });
        perguntasDiv.appendChild(opcaoBtn);
    });
}


// Função para passar para a próxima pergunta
function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        exibirPergunta();
    } else {
        finalizarQuiz();
    }
}

// Função para finalizar o quiz
function finalizarQuiz() {
    document.getElementById('quiz').classList.add('esconder');
    document.getElementById('voltar-inicio-btn').classList.remove('esconder');
}

// Função para reiniciar o quiz
function jogarNovamente() {
    perguntaAtual = 0;
    pontos = 0;
    document.getElementById('inicio').classList.remove('esconder');
    document.getElementById('voltar-inicio-btn').classList.add('esconder');
    resetCronometro();
}

// Função para iniciar o cronômetro
function iniciarCronometro() {
    tempoRestante = 30;
    cronometroInterval = setInterval(function() {
        document.getElementById('cronometro').textContent = `Tempo restante: ${tempoRestante} segundos`;
        tempoRestante--;
        if (tempoRestante < 0) {
            clearInterval(cronometroInterval);
            proximaPergunta();
        }
    }, 1000);
}

// Função para resetar o cronômetro
function resetCronometro() {
    clearInterval(cronometroInterval);
    document.getElementById('cronometro').textContent = '';
}

// Adicionando um evento para salvar o nome e exibi-lo
document.getElementById('save-name-btn').addEventListener('click', function() {
    const userName = document.getElementById('user-name').value;
    if (userName) {
        document.getElementById('user-greeting').textContent = `Olá, ${userName}!`;
        document.getElementById('user-greeting').classList.remove('esconder');
    }
});
