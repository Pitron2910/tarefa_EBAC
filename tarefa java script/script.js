document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-deposito');
    const mensagemElemento = document.getElementById('mensagem');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const campoA = parseInt(document.getElementById('campoA').value, 10);
        const campoB = parseInt(document.getElementById('campoB').value, 10);

        if (campoB > campoA) {
            exibirMensagem("Formulário válido! B é maior que A.", true);
        } else {
            exibirMensagem("Formulário inválido! B deve ser maior que A.", false);
        }
    });

    function exibirMensagem(mensagem, ehValido) {
        mensagemElemento.textContent = mensagem;

        if (ehValido) {
            mensagemElemento.style.color = 'green';
        } else {
            mensagemElemento.style.color = 'red';
        }
    }
});

