// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Array para almacenar los nombres de los amigos
let listaAmigos = document.getElementById('listaAmigos'); // Establece el array de amigos y el elemento HTML donde se mostrarán
let imagenTitulo = document.getElementById('imagentitulo'); // Obtiene el elemento de la imagen del título
let escribiendoCounter = 1; // Contador para cambiar la imagen del título al escribir

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value; // Obtiene el valor del campo de entrada
    if (nombre == "") {
        errorSorteo()
        asignarTextoElemento('descripcion', 'Por favor, ingresa un nombre válido', 'red'); // Muestra un mensaje de error si el campo está vacío
        return alert("Por favor, ingresa un nombre válido."); // Muestra una alerta si el campo está vacío
    }
    limpiarCaja(); // Limpia el campo de entrada después de obtener el valor
    if (amigos.includes(nombre)) { // Verificar si el nombre ya está en la lista de amigos
        errorSorteo()
        asignarTextoElemento('descripcion', `El amigo ${nombre} ya está en la lista`, 'red'); // Muestra un mensaje de error si el nombre ya está en la lista
        return alert("El amigo ya está en la lista.");
    } else {
        amigos.push(nombre); // Si no está, agregarlo a la lista
        asignarTextoElemento('descripcion', `Amigo ${nombre} agregado correctamente`, 'black'); // Muestra un mensaje de confirmación
        mostrarListaAmigos(); // Llama a la función para mostrar la lista actualizada
        return;
    }
}

function mostrarListaAmigos() {
    listaAmigos.innerHTML = ""; // Limpia la lista de amigos en el HTML
    let listaHTML = ""; // Inicializa una variable para almacenar el HTML de la lista
    for (let i = 0; i < amigos.length; i++) {
        listaHTML += `<li>${i+1}. <b>${amigos[i]}</b></li>`; // Crea un elemento de lista para cada amigo
    }
    listaAmigos.innerHTML = listaHTML;
    escribiendoCounter++;
    imagenTitulo.src = `assets/amigo-secreto-escribiendo-${escribiendoCounter % 2 ? '1' : '2'}.png`; // Cambia la imagen del título según el contador
    /* Esta línea es una alternativa para agregar un nuevo amigo a la lista, mas simple y directa
    listaAmigos.innerHTML += `<li>${amigos.length}.- <b>${nombre}</b> </li>`; // Agrega el nuevo amigo a la lista en el HTML*/
}

function sortearAmigo() {
    if (amigos.length === 0) {
        errorSorteo()
        return asignarTextoElemento('descripcion', 'No hay amigos para sortear', 'red'); // Muestra un mensaje si la lista de amigos está vacía
    } else if (amigos.length === 1) {        
        errorSorteo()
        return asignarTextoElemento('descripcion', `Te faltan amigos para sortear`, 'red'); // Muestra un mensaje si solo hay un amigo en la lista
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un índice aleatorio
        let amigoSorteado = amigos[indiceAleatorio]; // Selecciona un amigo al azar
        asignarTextoElemento('descripcion', `Tu amigo secreto es: ${amigoSorteado}`, 'green'); // Muestra el amigo sorteado
        statusBotones(true); // Deshabilita los botones de añadir y sortear
        imagenTitulo.src = 'assets/amigo-secreto-sorteado.png'; // Cambia la imagen del título
        return; 
    }
}

function statusBotones(status) {
    let botonAdd = document.getElementById('botonAdd');
    let botonSorteo = document.getElementById('botonSorteo');
    if (status) {
        botonAdd.disabled = true;
        botonSorteo.disabled = true;
        botonAdd.style.cursor = 'not-allowed'; // Cambia el cursor a no permitido
        botonSorteo.style.cursor = 'not-allowed'; // Cambia el cursor a no permit
    } else {
        botonAdd.disabled = false;
        botonSorteo.disabled = false;
        botonAdd.style.cursor = 'pointer'; // Cambia el cursor a permitido
        botonSorteo.style.cursor = 'pointer'; // Cambia el cursor a permitido
    }
}

function errorSorteo() {
    imagenTitulo.src = 'assets/amigo-secreto-error.png'; // Cambia la imagen del título a una de error
}

function reiniciarLista() {
    amigos = []; // Reinicia la lista de amigos
    listaAmigos.innerHTML = ""; // Vacía la lista en el HTML
    asignarTextoElemento('descripcion', 'Añada los nombres de sus amigos para realizar el sorteo del amigo secreto', 'green'); // Muestra un mensaje de reinicio
    limpiarCaja(); // Limpia el campo de entrada
    document.getElementById('descripcion').style.color = 'black'; // Restaura el color del texto
    imagenTitulo.src = 'assets/amigo-secreto.png'; // Restaura la imagen del título
    statusBotones(false); // Habilita los botones de añadir y sortear
    return;
}

function asignarTextoElemento(elemento, texto, color) {
    let elementoHTML = document.getElementById(elemento); // Obtiene el elemento HTML por su ID
    if (color) {
        elementoHTML.style.color = color; // Cambia el color del texto
    }
    return elementoHTML.innerHTML = texto; // Asigna el texto al elemento HTML especificado
}

function limpiarCaja() {
    return document.getElementById("amigo").value = ""; // Limpia el campo de entrada
}