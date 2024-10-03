let nomeUsuario = "";
let perguntaAtual = 0;
let perguntas = [];

// salvar nome
document.getElementById('salvar-nome-btn').addEventListener('click', function() {
    const nomeInput = document.getElementById('nome-jogador').value.trim();
    if (nomeInput === "") {
        alert("Por favor, insira seu nome antes de prosseguir!");
    } else {
        nomeUsuario = nomeInput;
        document.getElementById('saudacao').innerText = `Bom jogo, ${nomeUsuario}!`;
        document.getElementById('saudacao').classList.remove('esconder');
    }
});

// Botão de início
document.getElementById('inicio-btn').addEventListener('click', function() {
    if (nomeUsuario === "") {
        alert("Por favor, insira seu nome antes de iniciar o jogo!");
    } else {
        document.getElementById('inicio').classList.add('esconder');
        document.getElementById('escolha-tema').classList.remove('esconder');
        document.getElementById('squad9-btn').classList.add('esconder'); // Esconde o botão Squad9
    }
});

// escolha do tema e início do quiz
document.querySelectorAll('.tema-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        let temaSelecionado = btn.id;
        loadPerguntas(temaSelecionado);
        iniciarQuiz();
    });
});

// iniciar o quiz
function iniciarQuiz() {
    document.getElementById('escolha-tema').classList.add('esconder');
    document.getElementById('quiz').classList.remove('esconder');
    document.getElementById('squad9-btn').classList.add('esconder'); // Garante que o botão Squad9 fique escondido durante o quiz
    perguntaAtual = 0;
    erros = 0;
    pontos = 0; // reinicia os pontos
    exibirPergunta();
}

// página do squad
document.getElementById('squad9-btn').addEventListener('click', function() {
    document.querySelector('#inicio').classList.add('esconder');
    document.querySelector('#escolha-tema').classList.add('esconder');
    document.getElementById('quiz').classList.add('esconder');
    document.getElementById('squad9').classList.remove('esconder');
});

// voltar para a tela inicial a partir da página do squad
document.getElementById('voltar-btn').addEventListener('click', function() {
    document.getElementById('squad9').classList.add('esconder');
    document.getElementById('inicio').classList.remove('esconder');
    document.getElementById('squad9-btn').classList.remove('esconder'); // Mostrar botão Squad9 ao voltar
});

// reiniciar o jogo
document.getElementById('reiniciar-btn').addEventListener('click', function() {
    document.getElementById('game-over').classList.add('esconder');
    document.getElementById('inicio').classList.remove('esconder');
    document.getElementById('squad9-btn').classList.remove('esconder'); // Reexibe o botão ao voltar para o início
});
