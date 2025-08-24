let listaNombresSorteados = [];

function asignarElementoTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value;

    if (nombreDeAmigo === '') {
        alert('Escribe un nombre.')
        return;
    }

    listaNombresSorteados.push(nombreDeAmigo);
    lista();
    nombreDeAmigo.value = '';

}


function lista() {
    let nombresSorteados = (document.getElementById('listaAmigos'));
    nombresSorteados.innerHTML = '';
    let i = 0; 

    while (i < listaNombresSorteados.length) {
        let crearLista = document.createElement('li');
        crearLista.textContent = listaNombresSorteados[i];
        nombresSorteados.appendChild(crearLista);
        i++;
    }


    return;

}



function sortearAmigo() {
    let  indice = Math.floor(Math.random()* listaNombresSorteados.length);
    let ganador = listaNombresSorteados[indice];
    document.getElementById('resultado').textContent = `¡El amigo secreto sorteado es ${ganador}!`;
}


