//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    // console.log(amigo);
    if (amigo == ''){
        alert("Por favor, insira um nome.");
    } else {
        listaAmigos.push(amigo);
        console.log(listaAmigos);
        limparCampo();
    }
}

