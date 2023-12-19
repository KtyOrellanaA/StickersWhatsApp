const titleHeading = title => console.log(`\n------ ${title} ------`); // Funciones de título

function message (messageContent) { // Mensaje
    alert (messageContent);
    console.log(messageContent);
}

titleHeading ("Inicio"); // Inicio de flujo
message ("¡Bienvenido! Explora y descarga stickers para tus conversaciones en WhatsApp.");

let firstName = prompt ("Para empezar ¿Cuál es tu nombre?"); // Nombre de usuario

let category1 = "San valentín";
let category2 = "Día de la madre";
let category3 = "Día del padre";

function categoryChoice (categoryName) { // Texto para el Switch de selección de categoría
    alert (`¡Excelente elección ${firstName}! Descubre los stickers disponibles en ${categoryName}`);
    console.log (`¡Excelente elección ${firstName}! Descubre los stickers disponibles en ${categoryName}`);
    keepRunning = false; // Salir del bucle
}

let contentChoiceOfACategory = `${firstName}, elige una categoría de stickers para comenzar.\nSelecciona una opción y escribe el número correspondiente:\n \n1. ${category1} \n2. ${category2}\n3. ${category3}`; // Texto para empezar a seleccionar una categoría

let keepRunning = true;
console.log(contentChoiceOfACategory); // Para imprimir en consola la lista de categorías

while (keepRunning) { // Esta línea permite mantener el ciclo
    const optionCategory = prompt(contentChoiceOfACategory);

    switch (optionCategory) {
        case "1":
            categoryChoice(category1); break;
        case "2":
            categoryChoice(category2); break;
        case "3":
            categoryChoice(category3); break;
        default:
            // console.log("Opción no válida. Por favor, selecciona una opción del 1 al 3.");
            // keepRunning permanece true, por lo que el bucle se ejecutará nuevamente
            break;
    }
}

titleHeading ("Categoría seleccionada"); // Categorías de stickers

let category1Sticker1 = `Sticker de ${category1} 1`;
let category1Sticker2 = `Sticker del ${category1} 2`;
let category1Sticker3 = `Sticker del ${category1} 3`;

let contentChoiceOfACategory1 = `${firstName}, elige tu sticker favorito.\nSelecciona una opción y escribe el número correspondiente:\n \n1. ${category1Sticker1} \n2. ${category1Sticker2}\n3. ${category1Sticker3}`; // Texto para empezar a seleccionar una categoría

function stickerChoice1 (categoryName1) { // Texto para el Switch de selección de categoría
    alert (`¡Excelente elección ${firstName}! Tu sticker favorito es: \n${categoryName1}`);
    console.log (`¡Excelente elección ${firstName}! Tu sticker favorito es: \n${categoryName1}`);
    keepRunningCategory1 = false; // Salir del bucle
}

let keepRunningCategory1 = true;
// console.log(contentChoiceOfACategory1); // Para imprimir en consola la lista de categorías

while (keepRunningCategory1) { // Esta línea permite mantener el ciclo
    const optionCategory1 = prompt(contentChoiceOfACategory1);

    switch (optionCategory1) {
        case "1":
            stickerChoice1(category1Sticker1); break;
        case "2":
            stickerChoice1(category1Sticker2); break;
        case "3":
            stickerChoice1(category1Sticker3); break;
        default:
            // console.log("Opción no válida. Por favor, selecciona una opción del 1 al 3.");
            break;
    }
}

// let category2Sticker1 = `Sticker de: ${category2} 1`;
// let category2Sticker2 = `Sticker de: ${category2} 2`;
// let category2Sticker3 = `Sticker de: ${category2} 3`;

// let category3Sticker1 = `Sticker de: ${category3} 1`;
// let category3Sticker2 = `Sticker de: ${category3} 2`;
// let category3Sticker3 = `Sticker de: ${category3} 3`;

// titleHeading ("Continuar agregando stickers"); // Si quiere agregar otros stickers

titleHeading ("Descarga de stickers"); // Descarga exitosa

let downloadSticker = false; // Variable para indicar si el usuario desea descargar el sticker
let keepRunningDownload = true;

while (keepRunningDownload) {
    // Muestra las opciones para descargar el sticker
    console.log (`${firstName}, para proceder con la descarga del esticker, elige entre las opciones: \n \n1. Descargar el sticker \n 2. No descargar y volver atrás`);

    const optionDownload = prompt(`${firstName}, para proceder con la descarga del esticker, elige entre las opciones: \n \n1. Descargar el sticker \n 2. No descargar y volver atrás`);

    switch (optionDownload) {
        case "1":
            downloadSticker = true;
            keepRunningDownload = false;
            break;
        case "2":
            keepRunningDownload = false;
            break;
        default:
            alert("Opción no válida. Por favor, selecciona una opción del 1 o 2.");
            break;
    }
}

// Mostrar mensaje según la elección del usuario
if (downloadSticker) {
    message(`¡Excelente elección ${firstName}! El sticker ha sido descargado.`);
} else {
    message("No se ha descargado ningún sticker. Volviendo a la selección de stickers.");
}