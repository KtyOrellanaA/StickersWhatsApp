// Elementos DOM
const mainContainer = document.getElementById('main-content');
const categoriesContainer = document.getElementById('categories-container');

// Funciones de título y mensaje
const titleHeading = (title) => {
    clearContent();
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    mainContainer.appendChild(titleElement);
};

function showMessage(messageContent) {
    const messageElement = document.createElement('p');
    messageElement.textContent = messageContent;
    mainContainer.appendChild(messageElement);
}

// Variable global para almacenar el nombre del usuario
let firstName;

// Otras variables globales
let selectedCategories = [];
let selectedStickers = new Set();

const categories = [
    {
        name: "San Valentín",
        iconUrl: "/Proyecto_STICKERS/3raEntrega_Katty/Images/01_ValentinesDay/01.png",
        stickers: [
            { name: "Niña ilusionada", code: "SV1", imageUrl: "/Proyecto_STICKERS/3raEntrega_Katty/Images/01_ValentinesDay/01.png" },
            { name: "Niña ilusionada LOVE", code: "SV2", imageUrl: "/Proyecto_STICKERS/3raEntrega_Katty/Images/01_ValentinesDay/02.png" },
            { name: "Niña cupido", code: "SV3", imageUrl: "/Proyecto_STICKERS/3raEntrega_Katty/Images/01_ValentinesDay/03.png" },
            { name: "Niña cupido LOVE", code: "SV4", imageUrl: "/Proyecto_STICKERS/3raEntrega_Katty/Images/01_ValentinesDay/04.png" },
            { name: "Abrazo con texto: BEST FRIENDS", code: "SV5", imageUrl: "/Proyecto_STICKERS/3raEntrega_Katty/Images/01_ValentinesDay/05.png" },
            { name: "Niñas con texto: BEST FRIENDS", code: "SV6", imageUrl: "/Proyecto_STICKERS/3raEntrega_Katty/Images/01_ValentinesDay/06.png" },
            { name: "Saludando con texto: BEST FRIENDS", code: "SV7", imageUrl: "/Proyecto_STICKERS/3raEntrega_Katty/Images/01_ValentinesDay/07.png" },
            // Agrega más stickers según sea necesario
        ],
    },
    {
        name: "Día de la madre",
        iconUrl: "/Proyecto_STICKERS/3raEntrega_Katty/Images/02_MothersDay/01.png" ,
        stickers: [
            { name: "Abrazo de mamá, texto en inglés", code: "DM1", imageUrl: "/Proyecto_STICKERS/3raEntrega_Katty/Images/02_MothersDay/01.png" },
            { name: "Abrazo de mamá, texto en español", code: "DM2", imageUrl: "/Proyecto_STICKERS/3raEntrega_Katty/Images/02_MothersDay/02.png" },
            { name: "Cocinando con mamá, texto en inglés", code: "DM3", imageUrl: "/Proyecto_STICKERS/3raEntrega_Katty/Images/02_MothersDay/03.png" },
            { name: "Cocinando con mamá, texto en español", code: "DM4", imageUrl: "/Proyecto_STICKERS/3raEntrega_Katty/Images/02_MothersDay/04.png" },
            { name: "Estrellas con mamá, texto en inglés", code: "DM5", imageUrl: "/Proyecto_STICKERS/3raEntrega_Katty/Images/02_MothersDay/05.png" },
            { name: "Estrellas con mamá, texto en español", code: "DM6", imageUrl: "/Proyecto_STICKERS/3raEntrega_Katty/Images/02_MothersDay/06.png" },
            { name: "Happy day mon", code: "DM7", imageUrl: "/Proyecto_STICKERS/3raEntrega_Katty/Images/02_MothersDay/07.png" },
            { name: "Feliz día mamá", code: "DM8", imageUrl: "/Proyecto_STICKERS/3raEntrega_Katty/Images/02_MothersDay/08.png" },
            // Agrega más stickers según sea necesario
        ],
    },
    {
        name: "Día del padre",
        iconUrl: "/Proyecto_STICKERS/3raEntrega_Katty/Images/03_FathersDay/01.png",
        stickers: [
            { name: "Niña abrazando a papá", code: "DP1", imageUrl: "/Proyecto_STICKERS/3raEntrega_Katty/Images/03_FathersDay/01.png" },
            { name: "Niña deseando ¡Feliz día papá!", code: "DP2", imageUrl: "/Proyecto_STICKERS/3raEntrega_Katty/Images/03_FathersDay/01.png" },
            // Agrega más stickers según sea necesario
        ],
    },
];

function clearContent() {
    if (mainContainer) {
        mainContainer.innerHTML = '';
    }
}

// Función para inicializar la página principal con formulario
function initializeHomePage() {
    clearContent(); 
    titleHeading("Explora y descarga stickers para tus conversaciones en WhatsApp. Para empezar, ¿Cuál es tu nombre?");

    // Crear formulario para capturar el nombre del usuario
    const formElement = document.createElement('form');
    formElement.addEventListener('submit', function(event) {
        event.preventDefault();
        // Obtener el valor del nombre del usuario del formulario
        firstName = event.target.elements.name.value;
        // Mostrar mensaje de bienvenida personalizado
        showMessage(`¡Bienvenido, ${firstName}! Explora nuestra colección única de stickers.`);
        // Agregar menú de navegación después de mostrar el mensaje
        showNavigationMenu();
    });

    // Crear campo de entrada para el nombre
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('placeholder', 'Ingresa tu nombre');
    nameInput.setAttribute('required', true);

    // Crear botón de envío del formulario
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Ingresar';

    // Agregar elementos al formulario
    formElement.appendChild(nameInput);
    formElement.appendChild(submitButton);

    // Agregar el formulario al contenedor principal
    mainContainer.appendChild(formElement);
}

// Añadido: Función para inicializar el flujo del programa
function startFlow() {
    initializeHomePage();
}

// Añadido: Función para mostrar la página "Sobre Kty&Pili"
function showAboutUsPage() {
    clearContent();
    titleHeading("Sobre Kty&Pili");
    showMessage("Somos Kty&Pili, tu fuente de stickers emocionantes. Descubre la magia en cada imagen.");

    // Simula el contenido de "Sobre Kty&Pili" con un botón para avanzar
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Siguiente';
    nextButton.addEventListener('click', showInstallationPage);
    mainContainer.appendChild(nextButton);
}

// Función para mostrar la página de instalación de stickers
function showInstallationPage() {
    titleHeading("Instalar Stickers");
    showMessage("¡Es fácil instalar nuestros stickers! Sigue estos simples pasos y disfruta de la diversión.");

    showMessage("1. Abre tu aplicación de mensajería.");
    showMessage("2. Selecciona tu conversación.");
    showMessage("3. Encuentra la opción de stickers en el menú de emojis.");
    showMessage("4. ¡Envía stickers y diviértete!");

    // Simula el contenido de instalación con un botón para avanzar
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Siguiente';
    nextButton.addEventListener('click', showNewStickersPage);
    mainContainer.appendChild(nextButton);
}

// Añadido: Función para mostrar la página de stickers de una categoría específica
function showStickersPage(categoryName) {
    clearContent();
    const selectedCategory = categories.find(category => category.name === categoryName);
    titleHeading(`Stickers de ${selectedCategory.name}`);
    
    // Verificamos si hay stickers en la categoría seleccionada
    if (selectedCategory.stickers && selectedCategory.stickers.length > 0) {
        selectedCategory.stickers.forEach(sticker => {
            const stickerElement = document.createElement('div');
            stickerElement.classList.add('sticker-card');
            
            // Agregamos una imagen pequeña de sticker (actualiza el URL de la imagen)
            stickerElement.innerHTML = `
                <img src="${sticker.imageUrl}" alt="${sticker.name}" class="sticker-image">
                <p>${sticker.name}</p>
                <button onclick="addToCart('${selectedCategory.name}', '${sticker.name}')">Agregar al carrito</button>
            `;
            mainContainer.appendChild(stickerElement);
        });
    } else {
        showMessage(`¡Ups! No hay stickers disponibles en la categoría ${categoryName} actualmente.`);
    }

    // Añadido: Mostrar botón para volver a la página de categorías
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Volver a Categorías';
    returnButton.addEventListener('click', showCategoriesPage);
    mainContainer.appendChild(returnButton);
}

// Añadido: Función para mostrar mensajes en el contenedor principal
function showMessage(messageContent) {
    const messageElement = document.createElement('p');
    messageElement.textContent = messageContent;
    mainContainer.appendChild(messageElement);
}

// Añadido: Función para mostrar la página de nuevos stickers
function showNewStickersPage() {
    clearContent();
    titleHeading("Nuevos Stickers");

    showMessage("¡Descubre nuestros nuevos stickers! Ingresa tu correo electrónico para recibir las últimas actualizaciones.");

    // Crear el formulario
    const emailForm = document.createElement('form');
    emailForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Obtener el valor del correo electrónico del formulario
        const emailInput = event.target.elements.email.value;

        // Validar el formato del correo electrónico (puedes usar expresiones regulares)
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (emailRegex.test(emailInput)) {
            // Acción a realizar con el correo electrónico (puedes enviarlo a un servidor, almacenarlo localmente, etc.)
            showMessage(`¡Gracias por suscribirte, te informaremos sobre nuestros nuevos stickers a ${emailInput}!`);
        } else {
            showMessage("El formato del correo electrónico no es válido. Inténtalo nuevamente.");
        }
    });

    // Crear el campo de entrada de correo electrónico
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('placeholder', 'Ingresa tu correo electrónico');
    emailInput.setAttribute('required', true);

    // Crear el botón de envío del formulario
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Suscribirse';

    // Agregar elementos al formulario
    emailForm.appendChild(emailInput);
    emailForm.appendChild(submitButton);

    // Agregar el formulario al contenedor principal
    mainContainer.appendChild(emailForm);

    // Añadido: Mostrar botón para volver al menú principal
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Volver al Menú Principal';
    returnButton.addEventListener('click', initializeHomePage);
    mainContainer.appendChild(returnButton);
}

// Función para mostrar la página de redes sociales
function showFollowUsPage() {
    titleHeading("Síguenos en Redes Sociales");
    showMessage("Conéctate con nosotros en las redes sociales para mantenerte actualizado sobre nuevos lanzamientos y promociones.");

    // Simula el contenido de la página de redes sociales con un botón para avanzar
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Siguiente';
    nextButton.addEventListener('click', showCartPage);
    mainContainer.appendChild(nextButton);
}

// Añadido: Función para mostrar la página del carrito
function showCartPage() {
    titleHeading("Tu Carrito de Compras");
    showMessage("Revisa tu carrito y procede al pago para llevar la diversión de nuestros stickers a tu vida.");

    // Agregado: Mostrar contenido del carrito (simulado)
    showCartContent();

    // Simula el contenido del carrito con un botón para avanzar
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Finalizar Compra';
    nextButton.addEventListener('click', showThankYouPage);
    mainContainer.appendChild(nextButton);
}

// Añadido: Función para mostrar la página de agradecimiento
function showThankYouPage() {
    titleHeading(`¡Gracias, ${firstName}!`);
    showMessage("¡Tu compra se ha realizado con éxito! Gracias por elegir Stickers Kty&Pili.");

    // Agregado: Mostrar contenido de agradecimiento
    showThankYouContent();
}

// Puedes usar forEach para simplificar la creación de elementos.
function showThankYouContent() {
    const thankYouContentContainer = document.createElement('div');
    thankYouContentContainer.classList.add('thank-you-content-container');
    mainContainer.appendChild(thankYouContentContainer);

    // Simula mostrar detalles de la compra
    const purchaseDetails = [
        { name: "Sticker 1", quantity: 2, price: 2.99 },
        { name: "Sticker 2", quantity: 1, price: 1.99 },
        { name: "Sticker 3", quantity: 3, price: 3.99 },
    ];

    purchaseDetails.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} x${item.quantity} - $${(item.quantity * item.price).toFixed(2)}`;
        thankYouContentContainer.appendChild(itemElement);
    });

    // Simula mostrar el total
    const totalElement = document.createElement('div');
    const totalPrice = purchaseDetails.reduce((total, item) => total + item.quantity * item.price, 0);
    totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    thankYouContentContainer.appendChild(totalElement);

    // Simula mensaje de agradecimiento
    const thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = `¡Gracias por elegir Stickers Kty&Pili, ${firstName}! Te agradecemos por tu compra.`;
    thankYouContentContainer.appendChild(thankYouMessage);

    // Mostrar botón para volver a la página principal
    const returnHomeButton = document.createElement('button');
    returnHomeButton.textContent = 'Volver a la Página Principal';
    returnHomeButton.addEventListener('click', initializeHomePage);
    thankYouContentContainer.appendChild(returnHomeButton);
}

// Añadido: Plantilla para visualizar categorías de stickers
function renderCategories(categories) {
    // Verificamos si hay categorías para mostrar
    if (categories && categories.length > 0) {
        categories.forEach(category => {
            const categoryElement = document.createElement('div');
            categoryElement.classList.add('category-card', 'col-md-4', 'mt-3');

            // Agregamos un icono a la categoría de manera dinámica
            const categoryIcon = document.createElement('img');
            categoryIcon.src = category.iconUrl;
            categoryIcon.alt = category.name;
            categoryIcon.classList.add('category-icon');

            // Agregamos un párrafo con el nombre de la categoría
            const categoryName = document.createElement('p');
            categoryName.textContent = category.name;

            // Agregamos un botón para ver stickers de la categoría
            const viewStickersButton = document.createElement('button');
            viewStickersButton.textContent = 'Ver Stickers';
            viewStickersButton.addEventListener('click', () => showStickersPage(category.name));

            // Añadimos los elementos al contenedor de categoría
            categoryElement.appendChild(categoryIcon);
            categoryElement.appendChild(categoryName);
            categoryElement.appendChild(viewStickersButton);

            mainContainer.appendChild(categoryElement);
        });
    } else {
        showMessage("¡Ups! Parece que no hay categorías disponibles actualmente.");
    }
}

// Función para limpiar el contenedor de categorías
function clearCategoriesContainer() {
    if (categoriesContainer) {
        categoriesContainer.innerHTML = '';
    }
}

// Puedes simplificar el código usando findIndex y spread operator.
function toggleStickerSelection(categoryName, stickerName) {
    const existingSelectionIndex = selectedStickers.findIndex(selected => selected.category === categoryName && selected.sticker.name === stickerName);

    if (existingSelectionIndex !== -1) {
        // Si ya está seleccionado, eliminarlo
        selectedStickers.splice(existingSelectionIndex, 1);
    } else {
        // Si no está seleccionado, agregarlo
        selectedStickers.push({ category: categoryName, sticker: { name: stickerName } });
    }
}

// Añadido: Función para elegir la categoría interactivamente
function chooseCategoryInteractive(categories) {
    let optionCategory;

    do {
        optionCategory = parseInt(prompt(`Elige una categoría (1-${categories.length}):`));
    } while (isNaN(optionCategory) || optionCategory < 1 || optionCategory > categories.length);

    return optionCategory - 1;  // Ajustamos el índice para coincidir con el arreglo
}

// Función para mostrar los stickers de una categoría específica
function showStickers(categoryIndex) {
    clearContent();
    const selectedCategory = categories[categoryIndex];
    titleHeading(`Stickers de ${selectedCategory.name}`);
    
    selectedCategory.stickers.forEach(sticker => {
        const stickerElement = document.createElement('div');
        stickerElement.classList.add('sticker');
        stickerElement.innerHTML = `
            <p>${sticker.name}</p>
            <button onclick="addToCart('${selectedCategory.name}', '${sticker.name}')">Agregar al carrito</button>
        `;
        mainContainer.appendChild(stickerElement);
    });
}

// Añadido: Función para agregar stickers al carrito
function addToCart(category, sticker) {
    showMessage(`¡Excelente elección ${firstName}! "${sticker}" ha sido agregado al carrito de compras.`);
    // Puedes realizar aquí la lógica para agregar el sticker al carrito
}

// Añadido: Volver al menú principal después de la instalación
function returnToMainMenu() {
    startFlow(); // Cambiado de initializeHomePage a startFlow
}

// Añadido: Función para mostrar la página de categorías
function showCategoriesPage() {
    clearContent();
    titleHeading("Categorías de Stickers");
    showMessage(`¡Hola ${firstName}! Explora nuestras increíbles categorías de stickers.`);

    // Renderizar las categorías de manera dinámica
    renderCategories(categories);

    // Añadido: Mostrar botón para volver al menú principal
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Volver al Menú Principal';
    returnButton.addEventListener('click', initializeHomePage);
    mainContainer.appendChild(returnButton);
}

// Añadido: Función para mostrar el menú de navegación
function showNavigationMenu() {
    const logoElement = document.createElement('div');
    logoElement.innerHTML = `
        <img src="URL_DEL_LOGO" alt="Stickers KTY&Pili" class="logo">
    `;
    mainContainer.appendChild(logoElement);

    // Agregado: Mostrar accesos a la derecha
    const navigationLinks = [
        { name: "Categorías de stickers", action: showCategoriesPage },
        { name: "Sobre Kty&Pili", action: showAboutUsPage },
        { name: "Instalar stickers", action: showInstallationPage },
        { name: "Sobre nuevos stickers", action: showNewStickersPage },
        { name: "Redes sociales", action: showFollowUsPage },
        { name: "Carrito", action: showCartPage },
    ];

    const navigationContainer = document.createElement('div');
    navigationContainer.classList.add('navigation-container');

    navigationLinks.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = "#";  // Agrega la URL correspondiente
        linkElement.textContent = link.name;
        linkElement.addEventListener('click', link.action);
        navigationContainer.appendChild(linkElement);
    });

    mainContainer.appendChild(navigationContainer);
}

// Llamamos a la función principal al cargar la página
document.addEventListener('DOMContentLoaded', startFlow);

// Bucle principal
let continueFlow = true;
while (continueFlow) {
    let selectedCategoryIndex = chooseCategoryInteractive(categories);
    let selectedCategory = categories[selectedCategoryIndex];
    showMessage(`¡Excelente elección ${firstName}! Descubre los stickers disponibles en ${selectedCategory.name}`);

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

        // Verificamos si el sticker ya fue seleccionado
        if (!selectedStickers.has(selectedSticker.code)) {
            showMessage(`¡Excelente elección ${firstName}! Tu sticker favorito es: ${selectedSticker.name}`);

            const selectedStickerObject = {
                category: selectedCategory.name,
                sticker: selectedSticker,
            };

            selectedStickers.add(selectedSticker.code);
            selectedStickers.push(selectedStickerObject);
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
                continueFlow = false;
                keepRunningSticker = false;
                break;
            default:
                continueFlow = false;
                keepRunningSticker = false;
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
                            // Continuar con el flujo principal
                            startFlow();
                        } else {
                            continueFlow = false;
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
}