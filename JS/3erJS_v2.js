// Elementos DOM
const startPage = document.getElementById('startPage');
const nameForm = document.getElementById('nameForm');
const selectionPage = document.getElementById('selectionPage');
const cartPage = document.getElementById('cartPage');
const categoriesContainer = document.createElement('div');
categoriesContainer.classList.add('container', 'mt-3');
if (selectionPage) {
    selectionPage.appendChild(categoriesContainer);
}

// Funciones de título y mensaje
const titleHeading = (title) => {
    // Modificado: Limpiar contenido antes de mostrar el título
    clearContent();
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    document.body.appendChild(titleElement);
};

function showMessage(messageContent) {
    // Modificado: Limpiar contenido antes de mostrar el mensaje
    clearContent();
    const messageElement = document.createElement('p');
    messageElement.textContent = messageContent;
    document.body.appendChild(messageElement);
}

// Modificado: Nueva función para limpiar el contenido actual
function clearContent() {
    document.body.innerHTML = '';
}

let firstName;

do {
    firstName = prompt("Para empezar, por favor ingresa tu nombre:");
} while (!firstName || !firstName.trim()); // Repetir si el nombre está vacío o solo contiene espacios en blanco

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

// Nueva función para mostrar las categorías al cargar la página
function showCategoriesPage() {
    titleHeading("Bienvenido a Kty&Pili Stickers");
    showMessage(`¡Hola ${firstName}! Explora nuestras increíbles categorías de stickers.`);
    renderCategories(categories);
}

function showInstallationSteps() {
    // Aquí se muestra la sección de instalación de stickers
    titleHeading("Instalación de Stickers");
    showMessage(`¡Descarga tus stickers favoritos y comparte emociones! Sigue estos pasos:\n1. Abre tu aplicación de mensajería.\n2. Selecciona tu conversación.\n3. Encuentra la opción de stickers en el menú de emojis.\n4. ¡Envía stickers y diviértete!`);
}

function showNewStickersSection() {
    // Aquí se muestra información sobre los nuevos stickers
    titleHeading("Nuevos Stickers");
    showMessage("¡Descubre nuestras últimas adiciones para expresar emociones únicas!");
    // Incluye imágenes y detalles sobre los nuevos stickers aquí
}

function showCart() {
    // Aquí se muestra el contenido del carrito
    titleHeading("Carrito de Stickers");
    showMessage(`Tu carrito tiene ${selectedStickers.length} stickers. ¡Listos para ser descargados!`);
    // Incluye detalles sobre los stickers en el carrito y opciones de descarga
}

// Modificado: Agregar una clase a los elementos de sticker para identificarlos fácilmente
function renderCategories(categories) {
    console.log("Renderizando categorías:", categories);

    if (categoriesContainer) {
        categories.forEach(category => {
            // Crea un contenedor para cada categoría
            const categoryContainer = document.createElement('div');
            categoryContainer.classList.add('card', 'mt-3');

            // Añade el título de la categoría al contenedor
            const categoryTitle = document.createElement('div');
            categoryTitle.classList.add('card-header');
            categoryTitle.textContent = category.name;

            // Modificado: Agrega un evento de clic para mostrar los stickers al hacer clic en el título de la categoría
            categoryTitle.addEventListener('click', () => showStickers(category));
            
            categoryContainer.appendChild(categoryTitle);

            // Añade el contenedor de categoría al contenedor principal
            categoriesContainer.appendChild(categoryContainer);
        });
    }
}

// Nueva función para mostrar la información de "Sobre Kty&Pili"
function showAboutUs() {
    clearContent();
    titleHeading("Sobre Kty&Pili");
    showMessage("Somos Kty&Pili, tu fuente de stickers emocionantes. Descubre la magia en cada imagen.");
    // Modificado: Agregar imagen de referencia
    const imageElement = document.createElement('img');
    imageElement.src = "URL_DE_LA_IMAGEN";
    imageElement.alt = "Kty&Pili";
    document.body.appendChild(imageElement);
}

// Nueva función para mostrar los stickers al hacer clic en una categoría
function showStickers(category) {
    clearContent();
    titleHeading(`Stickers de ${category.name}`);

    // Mostrar los stickers
    category.stickers.forEach(sticker => {
        const stickerElement = document.createElement('div');
        stickerElement.classList.add('sticker');
        stickerElement.innerHTML = `
            <img src="${sticker.imageUrl}" alt="${sticker.name}" class="sticker-image">
            <div class="sticker-info">
                <p>${sticker.name}</p>
                <button onclick="addToCart('${category.name}', '${sticker.name}')">Agregar al carrito</button>
            </div>
        `;
        document.body.appendChild(stickerElement);
    });
}

// Nueva función para mostrar los pasos de instalación
function showInstallationSteps() {
    clearContent();

    // Mostrar el título
    titleHeading("Instalación de Stickers");

    // Mostrar los pasos numerados
    showMessage("Sigue estos pasos para instalar tus stickers en WhatsApp:");
    showMessage("1. Abre tu aplicación de mensajería.");
    showMessage("2. Selecciona tu conversación.");
    showMessage("3. Encuentra la opción de stickers en el menú de emojis.");
    showMessage("4. ¡Envía stickers y diviértete!");
}

// Nueva función para mostrar información sobre nuevos stickers y permitir que el usuario deje su correo
function showNewStickersSection() {
    clearContent();

    // Mostrar el título
    titleHeading("Nuevos Stickers");

    // Mostrar mensaje y formulario de correo
    showMessage("¡Descubre nuestras últimas adiciones para expresar emociones únicas!");
    showMessage("Déjanos tu correo y te informaremos cuando saquemos más stickers:");

    // Modificado: Agregar un formulario de correo electrónico
    const emailForm = document.createElement('form');
    emailForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const userEmail = event.target.elements.email.value;
        showMessage(`¡Gracias por suscribirte! Te informaremos sobre nuevos stickers en ${userEmail}.`);
    });

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = 'Ingresa tu correo';
    emailForm.appendChild(emailInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Suscribirse';
    emailForm.appendChild(submitButton);

    document.body.appendChild(emailForm);
}

// Modificado: Nueva función para agregar al carrito
function addToCart(category, stickerName) {
    const selectedStickerObject = {
        category: category,
        sticker: { name: stickerName },
    };
    selectedStickers.push(selectedStickerObject);
    updateCartCount(); // Modificado: Llama a la función para actualizar el contador del carrito
}

// Modificado: Nueva función para actualizar el contador del carrito
function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = selectedStickers.length.toString();
    }
}

// Añadido: Función para mostrar el contenido de las páginas
function showPageContent(pageContent) {
    const contentElement = document.createElement('div');
    contentElement.innerHTML = pageContent;
    document.body.appendChild(contentElement);
}

// Añadido: Función para mostrar la página de inicio
function showStartPage() {
    showPageContent("Contenido de la página de inicio");
}

// Añadido: Función para mostrar la página de selección
function showSelectionPage() {
    showPageContent("Contenido de la página de selección");
}

// Añadido: Función para elegir una categoría de manera interactiva
function chooseCategoryInteractive(categories) {
    showSelectionPage(); // Muestra la página de selección

    let contentChoiceOfACategory = `Elige una categoría de stickers para comenzar.\nSelecciona una opción y escribe el número correspondiente:\n \n`;

    categories.forEach((category, index) => {
        // Itera cada categoría
        contentChoiceOfACategory += `${index + 1}. ${category.name}\n`;
    });

    let selectedCategoryIndex;
    do {
        // Se solicita al usuario seleccionar una categoría
        selectedCategoryIndex = parseInt(prompt(contentChoiceOfACategory));
    } while (isNaN(selectedCategoryIndex) || selectedCategoryIndex < 1 || selectedCategoryIndex > categories.length);

    return selectedCategoryIndex - 1; // Se coloca -1, dado que los índices empiezan desde 0
}

// Añadido: Función para mostrar el contenido de las páginas
function showPageContent(pageContent) {
    const contentElement = document.createElement('div');
    contentElement.innerHTML = pageContent;
    document.body.appendChild(contentElement);
}

let selectedCategories = [];
let selectedStickers = [];

while (true) {
    let selectedCategoryIndex = chooseCategoryInteractive(categories);
    let selectedCategory = categories[selectedCategoryIndex];
    showMessage(`¡Excelente elección ${firstName}! Descubre los stickers disponibles en ${selectedCategory.name}`);

    let keepRunningSticker = true;
    let selectedStickersCodes = new Set(); // Usamos un conjunto para evitar repetir stickers

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

        // Verificamos si el sticker ya fue seleccionado
        if (!selectedStickersCodes.has(selectedSticker.code)) {
            showMessage(`¡Excelente elección ${firstName}! Tu sticker favorito es: ${selectedSticker.name}`);

            const selectedStickerObject = {
                category: selectedCategory.name,
                sticker: selectedSticker,
            };

            selectedStickers.push(selectedStickerObject);
            selectedStickersCodes.add(selectedSticker.code);
        } else {
            showMessage(`Ya has seleccionado el sticker ${selectedSticker.name}. Elige otro.`);
        }

        let continueOption;
        do {
            continueOption = parseInt(prompt(`${firstName}, ¿quieres agregar más stickers o modificar tu selección?\n \n1. Agregar más stickers\n2. Modificar selección\n3. Finalizar`));
        } while (isNaN(continueOption) || continueOption < 1 || continueOption > 3);

        switch (continueOption) {
            case 1:
                break;
            case 2:
                keepRunningSticker = false;
                break;
            case 3:
                keepRunningSticker = false;
                break;
            default:
                showMessage("Opción no válida. Por favor, elige 1, 2 o 3.");
                break;
        }
    }

    selectedCategories.push(selectedCategory);

    let exploreMoreOption;
    do {
        exploreMoreOption = parseInt(prompt(`${firstName}, ¿quieres explorar más categorías o revisar tus selecciones?\n \n1. Explorar más categorías\n2. Revisar selecciones\n3. Finalizar`));
    } while (isNaN(exploreMoreOption) || exploreMoreOption < 1 || exploreMoreOption > 3);

    switch (exploreMoreOption) {
        case 1:
            break;
        case 2:
            let modifiedSelection = false;

            while (!modifiedSelection) {
                showMessage(selectedCategories.map((category, index) => `Categoría ${index + 1}: ${category.name}\nStickers:\n${selectedStickers
                    .filter(selected => selected.category === category.name)
                    .map(selected => `- ${selected.sticker.name}`)
                    .join('\n')}`).join('\n'));

                let downloadOption;
                do {
                    downloadOption = parseInt(prompt(`${firstName}, ¿quieres descargar los stickers seleccionados?\n \n1. Descargar stickers\n2. Volver`));
                } while (isNaN(downloadOption) || (downloadOption !== 1 && downloadOption !== 2));

                switch (downloadOption) {
                    case 1:
                        console.log(`${firstName}, aquí está el resumen de tus stickers seleccionados:`);

                        let selectedStickersSet = new Set();

                        for (const selectedCategory of selectedCategories) {
                            console.log(`Categoría: ${selectedCategory.name}\nStickers:`);

                            for (const selectedSticker of selectedStickers.filter(selected => selected.category === selectedCategory.name && !selectedStickersSet.has(selected.sticker.code))) {
                                selectedStickersSet.add(selectedSticker.sticker.code);

                                console.log(`- ${selectedSticker.sticker.name}`);
                            }

                            console.log("\n");
                        }

                        showMessage(`¡Descarga confirmada, ${firstName}! Los stickers han sido descargados.`);

                        // Añadido: Volver al menú principal después de la instalación
                        titleHeading("Instalar Stickers");
                        showMessage("Para instalar tus stickers, sigue estos pasos:\n1. Abre tu aplicación de mensajería favorita.\n2. Selecciona la conversación o chat donde deseas enviar los stickers.\n3. Busca la opción de stickers en el menú de emojis.\n4. ¡Disfruta enviando tus nuevos stickers!");

                        let closeOption;
                        do {
                            closeOption = parseInt(prompt("Presiona 1 para cerrar e iniciar un nuevo ciclo de selección."));
                        } while (isNaN(closeOption) || closeOption !== 1);

                        if (closeOption === 1) {
                            modifiedSelection = true;
                        }

                        break;
                    case 2:
                        showMessage("Los stickers han sido descargados. ¡Gracias por explorar!");
                        modifiedSelection = true;
                        break;
                    default:
                        showMessage("Opción no válida. Los stickers no han sido descargados.");
                        break;
                }
            }

            break;
        case 3:
            console.log(`${firstName}, aquí está el resumen de tus stickers seleccionados:`);

            let selectedStickersSet = new Set();

            for (const selectedCategory of selectedCategories) {
                console.log(`Categoría: ${selectedCategory.name}\nStickers:`);

                for (const selectedSticker of selectedStickers.filter(selected => selected.category === selectedCategory.name && !selectedStickersSet.has(selected.sticker.code))) {
                    selectedStickersSet.add(selectedSticker.sticker.code);

                    console.log(`- ${selectedSticker.sticker.name}`);
                }

                console.log("\n");
            }

            let downloadOption;
            do {
                downloadOption = parseInt(prompt(`${firstName}, ¿quieres descargar los stickers seleccionados?\n \n1. Descargar stickers\n2. Volver`));
            } while (isNaN(downloadOption) || (downloadOption !== 1 && downloadOption !== 2));

            switch (downloadOption) {
                case 1:
                    showMessage(`¡Descarga confirmada, ${firstName}! Los stickers han sido descargados.`);
                    break;
                case 2:
                    showMessage("Los stickers han sido descargados. ¡Gracias por explorar!");
                    break;
                default:
                    showMessage("Opción no válida. Los stickers no han sido descargados.");
                    break;
            }

            break;
        default:
            showMessage("Opción no válida. Por favor, elige 1, 2 o 3.");
            break;
    }

    // Añadido: Volver al menú principal después de la instalación
    titleHeading("Fin");
    showStartPage();
}