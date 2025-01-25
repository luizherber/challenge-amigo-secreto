//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    console.log(amigo);
    if (amigo == '') {
        alert('Por favor, insira um nome.')
    } else {
        listaAmigos.push(amigo);
        amigo = document.getElementById('amigo');
        amigo.value = '';
    }
    alert(listaAmigos);
}

