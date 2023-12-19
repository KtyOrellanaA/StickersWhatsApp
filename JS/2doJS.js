// Funciones de título y mensaje
const titleHeading = title => console.log(`\n------ ${title} ------`);
function showMessage(messageContent) {
    alert(messageContent);
    console.log(messageContent);
}

titleHeading("Inicio"); // Inicio de flujo
showMessage("¡Bienvenido! Explora y descarga stickers para tus conversaciones en WhatsApp.");

let firstName = prompt("Para empezar ¿Cuál es tu nombre?"); // Nombre de usuario

// Categorías y stickers organizados en un arreglo de objetos
const categories = [
    {
        name: "San Valentín",
        stickers: [
            { name: "Corazón Rojo", code: "SV1" },
            { name: "Flecha del Amor", code: "SV2" },
            { name: "Cupido Feliz", code: "SV3" },
            // Agrega más stickers según sea necesario
        ]
    },
    {
        name: "Día de la madre",
        stickers: [
            { name: "Flores para Mamá", code: "DM1" },
            { name: "Abrazo Cálido", code: "DM2" },
            { name: "Mensaje Dulce", code: "DM3" },
            // Agrega más stickers según sea necesario
        ]
    },
    {
        name: "Día del padre",
        stickers: [
            { name: "Héroe del Día", code: "DP1" },
            { name: "Super Papá", code: "DP2" },
            { name: "Mejor Papá del Mundo", code: "DP3" },
            // Agrega más stickers según sea necesario
        ]
    }
];

// Función para mostrar las categorías de manera interactiva
function chooseCategoryInteractive(categories) {
    let contentChoiceOfACategory = `${firstName}, elige una categoría de stickers para comenzar.\nSelecciona una opción y escribe el número correspondiente:\n`;

    categories.forEach((category, index) => {
        contentChoiceOfACategory += `${index + 1}. ${category.name}\n`;
    });

    let selectedCategoryIndex;
    do {
        selectedCategoryIndex = parseInt(prompt(contentChoiceOfACategory));
    } while (isNaN(selectedCategoryIndex) || selectedCategoryIndex < 1 || selectedCategoryIndex > categories.length);

    return selectedCategoryIndex - 1;
}

let selectedCategories = [];

while (true) {
    let selectedCategoryIndex = chooseCategoryInteractive(categories);
    let selectedCategory = categories[selectedCategoryIndex];

    showMessage(`¡Excelente elección ${firstName}! Descubre los stickers disponibles en ${selectedCategory.name}`);

    // Mostrar opciones de stickers de la categoría seleccionada
    let selectedStickers = [];
    let keepRunningSticker = true;

    while (keepRunningSticker) {
        let contentChoiceOfACategory1 = `${firstName}, elige tu sticker favorito.\nSelecciona una opción y escribe el número correspondiente:\n`;

        selectedCategory.stickers.forEach((sticker, index) => {
            contentChoiceOfACategory1 += `${index + 1}. ${sticker.name}\n`;
        });

        let optionCategory1;
        do {
            optionCategory1 = parseInt(prompt(contentChoiceOfACategory1));
        } while (isNaN(optionCategory1) || optionCategory1 < 1 || optionCategory1 > selectedCategory.stickers.length);

        const selectedSticker = selectedCategory.stickers[optionCategory1 - 1];

        showMessage(`¡Excelente elección ${firstName}! Tu sticker favorito es: ${selectedSticker.name}`);

        selectedStickers.push(selectedSticker);

        // Preguntar si desea agregar más stickers o modificar su selección
        let continueOption;
        do {
            continueOption = parseInt(prompt(`${firstName}, ¿quieres agregar más stickers o modificar tu selección?\n1. Agregar más stickers\n2. Modificar selección\n3. Finalizar`));
        } while (isNaN(continueOption) || continueOption < 1 || continueOption > 3);

        switch (continueOption) {
            case 1:
                break; // Continuar en el bucle de selección de stickers
            case 2:
                keepRunningSticker = false; // Salir del bucle de selección de stickers
                break;
            case 3:
                keepRunningSticker = false; // Salir del bucle de selección de stickers
                break;
            default:
                showMessage("Opción no válida. Por favor, elige 1, 2 o 3.");
                break;
        }
    }

    selectedCategories.push({
        name: selectedCategory.name,
        stickers: selectedStickers
    });

    // Preguntar si desea navegar por otras categorías o revisar las seleccionadas
    let exploreMoreOption;
    do {
        exploreMoreOption = parseInt(prompt(`${firstName}, ¿quieres explorar más categorías o revisar tus selecciones?\n1. Explorar más categorías\n2. Revisar selecciones\n3. Finalizar`));
    } while (isNaN(exploreMoreOption) || exploreMoreOption < 1 || exploreMoreOption > 3);

    switch (exploreMoreOption) {
        case 1:
            break; // Continuar en el bucle principal
        case 2:
            // Modificar selección
            let modifiedSelection = false;

            while (!modifiedSelection) {
                let modifyOption;
                do {
                    modifyOption = parseInt(prompt(`${selectedCategories.map((category, index) => `Categoría ${index + 1}: ${category.name}\nStickers:\n${category.stickers.map(sticker => `- ${sticker.name}`).join('\n')}`).join('\n')}\n\n${firstName}, elige una opción para modificar:\n1. Agregar más stickers\n2. Eliminar stickers\n3. Volver`));
                } while (isNaN(modifyOption) || modifyOption < 1 || modifyOption > 3);

                switch (modifyOption) {
                    case 1:
                        // Agregar más stickers
                        let addMoreStickers = false;
                        while (!addMoreStickers) {
                            let addMoreOption;
                            do {
                                addMoreOption = parseInt(prompt(`${firstName}, elige más stickers para agregar a tu selección en la categoría ${selectedCategory.name}:\n${selectedCategory.stickers.map((sticker, index) => `${index + 1}. ${sticker.name}`).join('\n')}\n\n1. Agregar más stickers\n2. Finalizar`));
                            } while (isNaN(addMoreOption) || addMoreOption < 1 || addMoreOption > 2);

                            if (addMoreOption === 1) {
                                // Mostrar opciones de stickers de la categoría seleccionada
                                let addMoreStickersList = "";
                                selectedCategory.stickers.forEach((sticker, index) => {
                                    addMoreStickersList += `${index + 1}. ${sticker.name}\n`;
                                });

                                let selectedStickerIndex;
                                do {
                                    selectedStickerIndex = parseInt(prompt(`${firstName}, elige más stickers para agregar a tu selección en la categoría ${selectedCategory.name}:\n${addMoreStickersList}`));
                                } while (isNaN(selectedStickerIndex) || selectedStickerIndex < 1 || selectedStickerIndex > selectedCategory.stickers.length);

                                const selectedSticker = selectedCategory.stickers[selectedStickerIndex - 1];

                                showMessage(`¡Excelente elección ${firstName}! Has agregado el sticker ${selectedSticker.name} a tu selección.`);

                                selectedStickers.push(selectedSticker);

                                // Preguntar si desea agregar más stickers o finalizar
                                let addMoreStickersOption;
                                do {
                                    addMoreStickersOption = parseInt(prompt(`${firstName}, ¿quieres agregar más stickers o finalizar?\n1. Agregar más stickers\n2. Finalizar`));
                                } while (isNaN(addMoreStickersOption) || addMoreStickersOption < 1 || addMoreStickersOption > 2);

                                switch (addMoreStickersOption) {
                                    case 1:
                                        break; // Continuar en el bucle de selección de stickers
                                    case 2:
                                        addMoreStickers = true; // Salir del bucle de selección de stickers
                                        break;
                                    default:
                                        showMessage("Opción no válida. Por favor, elige 1 o 2.");
                                        break;
                                }
                            } else {
                                addMoreStickers = true; // Salir del bucle de selección de stickers
                            }
                        }

                        break;
                    case 2:
                        // Eliminar stickers
                        let deleteStickerOption;
                        do {
                            deleteStickerOption = parseInt(prompt(`${firstName}, elige un sticker para eliminar de tu selección en la categoría ${selectedCategory.name}:\n${selectedStickers.map((sticker, index) => `${index + 1}. ${sticker.name}`).join('\n')}\n\n1. Eliminar sticker\n2. Volver`));
                        } while (isNaN(deleteStickerOption) || deleteStickerOption < 1 || deleteStickerOption > 2);

                        if (deleteStickerOption === 1) {
                            let stickerToDeleteIndex;
                            do {
                                stickerToDeleteIndex = parseInt(prompt(`${firstName}, elige el número del sticker que deseas eliminar:\n${selectedStickers.map((sticker, index) => `${index + 1}. ${sticker.name}`).join('\n')}`));
                            } while (isNaN(stickerToDeleteIndex) || stickerToDeleteIndex < 1 || stickerToDeleteIndex > selectedStickers.length);

                            const deletedSticker = selectedStickers.splice(stickerToDeleteIndex - 1, 1)[0];

                            showMessage(`Se ha eliminado el sticker ${deletedSticker.name} de tu selección en la categoría ${selectedCategory.name}.`);
                        }

                        break;
                    case 3:
                        modifiedSelection = true; // Salir del bucle de modificación de selección
                        break;
                    default:
                        showMessage("Opción no válida. Por favor, elige 1, 2 o 3.");
                        break;
                }
            }

            break;
        case 3:
            modifiedSelection = true; // Salir del bucle de modificación de selección
            break;
        default:
            showMessage("Opción no válida. Por favor, elige 1, 2 o 3.");
            break;
    }
}

// Mostrar resumen de stickers seleccionados
console.log();

console.log (`${firstName}, aquí está el resumen de tus stickers seleccionados:`);

for (const category of selectedCategories) {
    console.log(`Categoría: ${category.name}`);
    console.log("Stickers:");
    
    for (const sticker of category.stickers) {
        console.log(`- ${sticker.name}`);
    }

    console.log(); // Separador entre categorías
}


// Preguntar si desea descargar los stickers
let downloadOption;
do {
    downloadOption = parseInt(prompt(`${firstName}, ¿quieres descargar los stickers seleccionados?\n1. Descargar\n2. No descargar`));
} while (isNaN(downloadOption) || downloadOption < 1 || downloadOption > 2);

if (downloadOption === 1) {
    showMessage(`¡Excelente elección ${firstName}! Los stickers han sido descargados.`);
} else {
    showMessage("No se han descargado los stickers. ¡Hasta luego!");
}

// Pedir email para notificar sobre nuevos stickers
let emailOption;
do {
    emailOption = parseInt(prompt(`${firstName}, ¿quieres dejar tu email para ser notificado sobre nuevos stickers?\n1. Sí\n2. No`));
} while (isNaN(emailOption) || emailOption < 1 || emailOption > 2);

if (emailOption === 1) {
    let userEmail = prompt("Ingresa tu email:");
    showMessage(`Gracias ${firstName}! Te notificaremos sobre nuevos stickers en ${userEmail}`);
} else {
    showMessage("Gracias por explorar los stickers. ¡Hasta luego!");
}