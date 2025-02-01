//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo');
    let nomeDoAmigo = nome.value;

    if (!nomeDoAmigo){
        alert('Por favor, insira um nome.');
        return;
    } else if (listaDeAmigos.includes(nomeDoAmigo)){
        alert('Esse nome já foi adicionado.');
        limparCampo();
        return;
    } else {
        listaDeAmigos.push(nomeDoAmigo);
        console.log(listaDeAmigos);
        limparCampo();
        atualizarListaDeAmigos();
    }
}

function limparCampo(){
    nome = document.getElementById('amigo');
    nome.value = '';
}

function atualizarListaDeAmigos(){
    let campo = document.getElementById('listaAmigos');
    campo.innerHTML = '';

    for (let i = 0; i < listaDeAmigos.length; i++) {
            let li = document.createElement('li');
            li.textContent = listaDeAmigos[i];
            campo.appendChild(li);
    }
}

function sortearAmigo() {
    let resultadoSorteio = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    let resultado = document.getElementById('resultado');
    console.log(resultadoSorteio);

    if (listaDeAmigos.length === 0){
        alert('Nenhum nome foi adicionado ainda.');
    } else {
        resultado.innerHTML = `O amigo secreto sorteado é: ${resultadoSorteio}`;
    }
    
}