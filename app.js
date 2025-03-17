// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo(){
    let input = document.getElementById("amigo").value;
    if(input === '')
    {
        alert("Ingresa un nombre");
        return
    }
    listaAmigos.push(input);
    console.log(listaAmigos);

    mostrarLista();

    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){

    if(listaAmigos.length===0){
        alert("No hay amigos para sortear");
        return;
    }

    let amigoSorteado = listaAmigos[Math.floor(Math.random()*listaAmigos.length)];
    console.log(`El amigo sorteado es: ${amigoSorteado}`);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    let listaResultado = document.createElement("li");
    listaResultado.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
    resultado.appendChild(listaResultado);

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
}

function mostrarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    listaAmigos.forEach((listaAmigos) => {
        let li = document.createElement("li");
        li.textContent = listaAmigos;
        lista.appendChild(li);
    });
}

