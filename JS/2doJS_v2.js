// Funciones de título y mensaje
const titleHeading = title => console.log(`\n------ ${title} ------`);

function showMessage(messageContent) {
    console.log(messageContent);
}

titleHeading("Inicio"); // Inicio de flujo

let firstName;
do {
    firstName = prompt("Para empezar, por favor ingresa tu nombre:"); // Se solicita un nombre
} while (!firstName || !firstName.trim()); // Repetir si el nombre está vacío o solo contiene espacios en blanco

// Categorías y stickers organizados en un arreglo de objetos
const categories = [
    {
        name: "San Valentín",
        stickers: [
            { name: "Niña ilusionada con palabra LOVE", code: "SV1" },
            { name: "Cupido con arco y flecha", code: "SV2" },
            { name: "Niña con símbolo de corazón", code: "SV3" },
            { name: "Niñas con texto de Best friends", code: "SV4" },
            { name: "Frase: Best friends for ever", code: "SV5" },
            // Agrega más stickers según sea necesario
        ],
    },
    {
        name: "Día de la madre",
        stickers: [
            { name: "Niña abrazando a mamá", code: "DM1" },
            { name: "Niña deseando ¡Feliz día mamá!", code: "DM2" },
            { name: "Mami e hija en la cocina", code: "DM3" },
            { name: "Madre e hijo con texto: Happy day Mom", code: "DM4" },
            { name: "Solo texto: Feliz día mamá", code: "DM5" },
            // Agrega más stickers según sea necesario
        ],
    },
    {
        name: "Día del padre",
        stickers: [
            { name: "Niña abrazando a papá", code: "DP1" },
            { name: "Niña deseando ¡Feliz día papá!", code: "DP2" },
            { name: "Papi e hija dibujando", code: "DP3" },
            { name: "Padre e hijo jugando con texto: Father's day", code: "DP4" },
            { name: "Solo texto: Happy Father's Day", code: "DP5" },
            // Agrega más stickers según sea necesario
        ],
    },
];

// Función para mostrar las categorías de manera interactiva
function chooseCategoryInteractive(categories) {
    let contentChoiceOfACategory = `${firstName}, elige una categoría de stickers para comenzar.\nSelecciona una opción y escribe el número correspondiente:\n \n`;

    categories.forEach((category, index) => { //Itera cada categoría
        contentChoiceOfACategory += `${index + 1}. ${category.name}\n`;
    });

    let selectedCategoryIndex; 
    do { // Se solicita al usuario seleccionar una categoría
        selectedCategoryIndex = parseInt(prompt(contentChoiceOfACategory));
    } while (isNaN(selectedCategoryIndex) || selectedCategoryIndex < 1 || selectedCategoryIndex > categories.length);
    // isNaN(selectedCategoryIndex): verifica si no es un número. isNaN significa "Is Not a Number"
    // selectedCategoryIndex < 1: Verifica si el valor de selectedCategoryIndex es menor que 1.
    // selectedCategoryIndex > categories.length: Esto asegura que el usuario elija un número dentro del rango de opciones disponibles.    

    return selectedCategoryIndex - 1; // Se coloca -1, dado que los índices empiezan desde 0
}

let selectedCategories = [];
let selectedStickers = [];

while (true) {
    let selectedCategoryIndex = chooseCategoryInteractive(categories);
    let selectedCategory = categories[selectedCategoryIndex];

    showMessage(`¡Excelente elección ${firstName}! Descubre los stickers disponibles en ${selectedCategory.name}`);

    // Mostrar opciones de stickers de la categoría seleccionada
    let keepRunningSticker = true;

    while (keepRunningSticker) {
        let contentChoiceOfACategory1 = `${firstName}, elige tu sticker favorito.\nSelecciona una opción y escribe el número correspondiente:\n \n`;

        selectedCategory.stickers.forEach((sticker, index) => {
            contentChoiceOfACategory1 += `${index + 1}. ${sticker.name}\n`;
        });

        let optionCategory1;
        do {
            optionCategory1 = parseInt(prompt(contentChoiceOfACategory1));
        } while (isNaN(optionCategory1) || optionCategory1 < 1 || optionCategory1 > selectedCategory.stickers.length);

        const selectedSticker = selectedCategory.stickers[optionCategory1 - 1];

        showMessage(`¡Excelente elección ${firstName}! Tu sticker favorito es: ${selectedSticker.name}`);

        // Almacena la selección en un objeto para llevar un registro
        const selectedStickerObject = {
            category: selectedCategory.name,
            sticker: selectedSticker,
        };

        selectedStickers.push(selectedStickerObject);

        // Preguntar si desea agregar más stickers o modificar su selección
        let continueOption;
        do {
            continueOption = parseInt(prompt(`${firstName}, ¿quieres agregar más stickers o modificar tu selección?\n \n1. Agregar más stickers\n2. Modificar selección\n3. Finalizar`));
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

    selectedCategories.push(selectedCategory); // Almacena la categoría seleccionada para revisión

    // Mostrar opciones de exploración y revisión
    let exploreMoreOption;
    do {
        exploreMoreOption = parseInt(prompt(`${firstName}, ¿quieres explorar más categorías o revisar tus selecciones?\n \n1. Explorar más categorías\n2. Revisar selecciones\n3. Finalizar`));
    } while (isNaN(exploreMoreOption) || exploreMoreOption < 1 || exploreMoreOption > 3);

    switch (exploreMoreOption) {
        case 1:
            break; // Continuar en el bucle principal
        case 2:
            // Mostrar opciones de modificación
            let modifiedSelection = false;

            while (!modifiedSelection) {
                let modifyOption;
                do {
                    // Muestra las categorías y stickers seleccionados para revisión
                    showMessage(selectedCategories.map((category, index) => `Categoría ${index + 1}: ${category.name}\nStickers:\n${selectedStickers
                        .filter(selected => selected.category === category.name)
                        .map(selected => `- ${selected.sticker.name}`)
                        .join('\n')}`).join('\n'));

                    modifyOption = parseInt(prompt(`${firstName}, elige una opción para modificar:\n \n1. Agregar más stickers\n2. Eliminar stickers\n3. Volver`));
                } while (isNaN(modifyOption) || modifyOption < 1 || modifyOption > 3);

                switch (modifyOption) {
                    case 1:
                        // Agregar más stickers
                        let addMoreStickers = true;

                        while (addMoreStickers) {
                            // Mostrar opciones de stickers de la categoría seleccionada
                            let addMoreStickersList = "";
                            selectedCategory.stickers.forEach((sticker, index) => {
                                addMoreStickersList += `${index + 1}. ${sticker.name}\n`;
                            });

                            let selectedStickerIndex;
                            do {
                                selectedStickerIndex = parseInt(prompt(`${firstName}, elige más stickers para agregar a tu selección en la categoría ${selectedCategory.name}:\n${addMoreStickersList}\n\nEscribe 0 para finalizar`));
                            } while (isNaN(selectedStickerIndex) || selectedStickerIndex < 0 || selectedStickerIndex > selectedCategory.stickers.length);

                            if (selectedStickerIndex === 0) {
                                addMoreStickers = false; // Salir del bucle de selección de stickers
                            } else {
                                const selectedSticker = selectedCategory.stickers[selectedStickerIndex - 1];

                                showMessage(`¡Excelente elección ${firstName}! Has agregado el sticker ${selectedSticker.name} a tu selección.`);

                                // Almacena la selección en el objeto para llevar un registro
                                const selectedStickerObject = {
                                    category: selectedCategory.name,
                                    sticker: selectedSticker,
                                };

                                selectedStickers.push(selectedStickerObject);
                            }
                        }

                        break;
                    case 2:
                        // Eliminar stickers
                        let deleteStickerOption;
                        do {
                            deleteStickerOption = parseInt(prompt(`${firstName}, elige un sticker para eliminar de tu selección en la categoría ${selectedCategory.name}:\n${selectedStickers.map((selected, index) => `${index + 1}. ${selected.sticker.name}`).join('\n')}\n\n1. Eliminar sticker\n2. Volver`));
                        } while (isNaN(deleteStickerOption) || deleteStickerOption < 1 || deleteStickerOption > 2);

                        if (deleteStickerOption === 1) {
                            let stickerToDeleteIndex;
                            do {
                                stickerToDeleteIndex = parseInt(prompt(`${firstName}, elige el número del sticker que deseas eliminar:\n${selectedStickers.map((selected, index) => `${index + 1}. ${selected.sticker.name}`).join('\n')}`));
                            } while (isNaN(stickerToDeleteIndex) || stickerToDeleteIndex < 1 || stickerToDeleteIndex > selectedStickers.length);

                            const deletedSticker = selectedStickers.splice(stickerToDeleteIndex - 1, 1)[0];

                            showMessage(`Se ha eliminado el sticker ${deletedSticker.sticker.name} de tu selección en la categoría ${deletedSticker.category}.`);
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
            // Finalizar y descargar stickers
            console.log(`${firstName}, aquí está el resumen de tus stickers seleccionados:`);

            for (const category of selectedCategories) {
                console.log(`Categoría: ${category.name}`);
                console.log("Stickers:");

                for (const selectedSticker of selectedStickers.filter(selected => selected.category === category.name)) {
                    console.log(`- ${selectedSticker.sticker.name}`);
                }

                console.log(); // Separador entre categorías
            }

            // Preguntar si desea descargar los stickers y dejar su email para notificaciones
            let downloadOption;
            do {
                downloadOption = parseInt(prompt(`${firstName}, ¿quieres descargar los stickers seleccionados y dejar tu email para notificaciones?\n \n1. Descargar y dejar email\n2. Solo descargar\n3. No descargar ni dejar email`));
            } while (isNaN(downloadOption) || downloadOption < 1 || downloadOption > 3);

            switch (downloadOption) {
                case 1:
                    // Finalizar y descargar
                    showMessage(`¡Excelente elección ${firstName}! Los stickers han sido descargados.`);

                    // Pedir email para notificar sobre nuevos stickers
                    let userEmail;
                    let notifyByEmail = true;

                    do {
                        userEmail = prompt(`${firstName}, por favor, ingresa tu email para recibir notificaciones sobre nuevos stickers:`);

                        if (!userEmail.trim()) {
                            showMessage("Por favor, ingresa un email válido.");
                        } else {
                            showMessage(`Gracias ${firstName}! Te notificaremos sobre nuevos stickers en ${userEmail}`);
                            notifyByEmail = false;
                        }
                    } while (notifyByEmail);

                    break;
                case 2:
                    // Solo descargar
                    showMessage("Los stickers han sido descargados. ¡Gracias por explorar!");
                    break;
                case 3:
                    // No descargar ni dejar email
                    showMessage("Gracias por explorar los stickers. ¡Hasta luego!");
                    break;
                default:
                    showMessage("Opción no válida. Los stickers no han sido descargados ni se ha dejado email para notificaciones.");
                    break;
            }

            break;
        default:
            showMessage("Opción no válida. Por favor, elige 1, 2 o 3.");
            break;
    }

    // Al finalizar la interacción, ocultar el mensaje de categorías
    titleHeading("Fin");
    ;
}