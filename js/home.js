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
document.getElementById('inicio-btn').addEventListener('click', function() {
    if (nomeUsuario === "") {
        alert("Por favor, insira seu nome antes de iniciar o jogo!");
    } else {
        document.getElementById('inicio').classList.add('esconder');
        document.getElementById('escolha-tema').classList.remove('esconder');
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
});