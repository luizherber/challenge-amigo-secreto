//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert('Por favor, insira um nome.')
    } else {
        listaAmigos.push(amigo);
        amigo = document.getElementById('amigo');
        amigo.value = '';
    }
    exibeAmigos();
}

function exibeAmigos(){
    let ulElement = document.getElementById('listaAmigos');
    ulElement.innerHTML = '';
    listaAmigos.forEach(amigo => {
        let liElement = document.createElement('li');
        liElement.textContent = amigo;
        ulElement.appendChild(liElement);
    })
    console.log(listaAmigos);
}

function sortearAmigo(){
    if (listaAmigos.length == 0) {
        alert('Você não possui amigos na sua lista!');
    } else {
        let indice = parseInt(Math.random() * (listaAmigos.length - 1));
        let amigoSorteado = listaAmigos[indice];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = amigoSorteado;
    }
}