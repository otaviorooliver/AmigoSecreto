//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
let listaExibir = document.getElementById('listaAmigos');
console.log(listaAmigos.length);

function limparCampo() {
    entrada = document.querySelector('input');
    entrada.value = '';
}

function atualizarLista (){
    // console.log(listaExibir);
    listaExibir.innerHTML = "";

    for(var i = 0; i < listaAmigos.length; i++){
        let elemento = document.createElement('li');
        elemento.textContent = listaAmigos[i];
        listaExibir.appendChild(elemento);
        // console.log(listaExibir);
    }
}

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    // console.log(amigo);
    if (amigo == ''){
        alert("Por favor, insira um nome.");
    } else {
        listaAmigos.push(amigo);
        // console.log(listaAmigos);
        limparCampo();
        atualizarLista();
    }
}

function sortearAmigo(){
    if (listaAmigos.length == 0){
        alert('Insira um nome antes de sortear.');
    } else{
        let numero = Math.floor(Math.random()* listaAmigos.length);
        // console.log(numero);
        let resultadoSorteio = listaAmigos[numero]
        // console.log(resultadoSorteio);
        let campoResultado = document.getElementById('resultado');
        campoResultado.innerHTML = resultadoSorteio;

    }

}


