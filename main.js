const form = document.getElementById('cadastroSocios');
const campoA = document.getElementById('socioPagante');
const campoB = document.getElementById('socioBonus');
let formBvalido = false;

function validarFormulario(){
    return parseInt(campoB.value) > parseInt(campoA.value);
}
form.addEventListener('submit', function(e){
    formBvalido = validarFormulario();

    if (formBvalido){
        exibirMensagem(true);
    } else{
        exibirMensagem(false);
    }
})

campoB.addEventListener('change', function(){
    formBvalido = validarFormulario();
    if (!formBvalido){
        campoB.classList.add('error');
        exibirMensagem(false);
    } else{
        campoB.classList.remove('error');
        exibirMensagem(true);
    }
});

function exibirMensagem(valido) {
    const mensagemDiv = document.getElementById('mensagem');
    if (valido) {
        mensagemDiv.innerHTML = '<p>Formulário válido! B é maior que A.</p>';
        mensagemDiv.style.color = 'green';
    } else {
        mensagemDiv.innerHTML = '<p>Formulário inválido! B deve ser maior que A.</p>';
        mensagemDiv.style.color = 'red';
    }
}