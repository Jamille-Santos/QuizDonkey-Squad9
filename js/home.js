document.getElementById('inicio-btn').addEventListener('click', function() {
    document.getElementById('inicio').classList.add('esconder');
    document.getElementById('escolha-tema').classList.remove('esconder');
});

document.querySelectorAll('.tema-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        let temaSelecionado = btn.id;
        loadPerguntas(temaSelecionado);
        iniciarQuiz();
    });
});

document.getElementById('voltar-inicio-btn').addEventListener('click', function() {
    document.getElementById('quiz').classList.add('esconder');
    document.getElementById('inicio').classList.remove('esconder');
    pontos = 0;
    resetCronometro();
});

document.getElementById('squad9-btn').addEventListener('click', function() {
    document.querySelector('.container').classList.add('esconder');
    document.getElementById('squad9').classList.remove('esconder');
});

document.getElementById('voltar-btn').addEventListener('click', function() {
    document.getElementById('squad9').classList.add('esconder');
    document.querySelector('.container').classList.remove('esconder');
});

document.getElementById('voltar-inicio-btn').addEventListener('click', function() {
    jogarNovamente();
});
