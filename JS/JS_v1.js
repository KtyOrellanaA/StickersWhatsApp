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

// Verificar si hay un nombre de usuario almacenado en el Local Storage
let firstName = localStorage.getItem('firstName');

// Definición de variables globales
let selectedStickers = []; // Arreglo para almacenar los stickers seleccionados
let cartCount = 0; // Contador para el carrito
const selectedCategories = [];

// Función para iniciar el flujo principal
function startFlow() {
    saveUserFirstName();
    showNavigationMenu();
    // Aquí podrías continuar con el resto del flujo principal
}

// Añadido: Función para guardar el nombre de usuario en LocalStorage
function saveUserFirstName() {
    const firstName = prompt("Por favor, ingresa tu nombre:");
    localStorage.setItem('firstName', firstName);
}

// Verificar si ya hay un nombre de usuario en el local storage
let userName = localStorage.getItem('userName');

// Recuperar el nombre del usuario del Local Storage si existe
const storedName = localStorage.getItem('firstName');
if (storedName) {
    firstName = storedName;
}

const categories = [
    {
        name: "San Valentín",
        iconUrl: "./Images/01_ValentinesDay/01.png",
        stickers: [
            { name: "Niña ilusionada", code: "SV1", imageUrl: "./Images/01_ValentinesDay/01.png" },
            { name: "Niña ilusionada LOVE", code: "SV2", imageUrl: "./Images/01_ValentinesDay/02.png" },
            { name: "Niña cupido", code: "SV3", imageUrl: "./Images/01_ValentinesDay/03.png" },
            { name: "Niña cupido LOVE", code: "SV4", imageUrl: "./Images/01_ValentinesDay/04.png" },
            { name: "Abrazo con texto: BEST FRIENDS", code: "SV5", imageUrl: "./Images/01_ValentinesDay/05.png" },
            { name: "Niñas con texto: BEST FRIENDS", code: "SV6", imageUrl: "./Images/01_ValentinesDay/06.png" },
            { name: "Saludando con texto: BEST FRIENDS", code: "SV7", imageUrl: "./Images/01_ValentinesDay/07.png" },
            // Agrega más stickers según sea necesario
        ],
    },
    {
        name: "Día de la madre",
        iconUrl: "./Images/02_MothersDay/01.png" ,
        stickers: [
            { name: "Abrazo de mamá, texto en inglés", code: "DM1", imageUrl: "./Images/02_MothersDay/01.png" },
            { name: "Abrazo de mamá, texto en español", code: "DM2", imageUrl: "./Images/02_MothersDay/02.png" },
            { name: "Cocinando con mamá, texto en inglés", code: "DM3", imageUrl: "./Images/02_MothersDay/03.png" },
            { name: "Cocinando con mamá, texto en español", code: "DM4", imageUrl: "./Images/02_MothersDay/04.png" },
            { name: "Estrellas con mamá, texto en inglés", code: "DM5", imageUrl: "./Images/02_MothersDay/05.png" },
            { name: "Estrellas con mamá, texto en español", code: "DM6", imageUrl: "./Images/02_MothersDay/06.png" },
            { name: "Happy day mon", code: "DM7", imageUrl: "./Images/02_MothersDay/07.png" },
            { name: "Feliz día mamá", code: "DM8", imageUrl: "./Images/02_MothersDay/08.png" },
            // Agrega más stickers según sea necesario
        ],
    },
    {
        name: "Día del padre",
        iconUrl: "./Images/03_FathersDay/01.png",
        stickers: [
            { name: "Niña abrazando a papá", code: "DP1", imageUrl: "./Images/03_FathersDay/01.png" },
            { name: "Niña deseando ¡Feliz día papá!", code: "DP2", imageUrl: "./Images/03_FathersDay/01.png" },
            // Agrega más stickers según sea necesario
        ],
    },
];

// Función para limpiar el contenido principal
function clearContent() {
    mainContainer.innerHTML = '';
}

// Función para inicializar la página principal con formulario
function initializeHomePage() {
    clearContent();
    titleHeading("¡Hola! Explora y descarga stickers para tus conversaciones en WhatsApp. Para empezar, ¿Cuál es tu nombre?");

    // Crear formulario para capturar el nombre del usuario
    const formElement = document.createElement('form');
    formElement.addEventListener('submit', function (event) {
        event.preventDefault();
        // Obtener el valor del nombre del usuario del formulario
        let firstName = event.target.elements.name.value;
        // Mostrar mensaje de bienvenida personalizado
        showMessage(`¡Bienvenido, ${firstName}! Explora nuestra colección única de stickers.`);
        // Mostrar las categorías de stickers
        showCategoriesPage();
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

    // Verificar si ya se tiene el nombre guardado
    if (!firstName) {
        // Crear formulario solo si no se tiene el nombre
        const formElement = document.createElement('form');
        formElement.addEventListener('submit', function (event) {
            event.preventDefault();
            // Obtener el valor del nombre del usuario del formulario
            firstName = event.target.elements.name.value;
            // Guardar el nombre en el Local Storage
            localStorage.setItem('firstName', firstName);
            // Mostrar mensaje de bienvenida personalizado
            showMessage(`¡Bienvenido, ${firstName}! Explora nuestra colección única de stickers.`);
            // Mostrar las categorías de stickers
            showCategoriesPage();
        });
    
    } else {
        // Si ya se tiene el nombre, mostrar mensaje de bienvenida directamente
        showMessage(`¡Bienvenido de nuevo, ${firstName}! Explora nuestra colección única de stickers.`);
    }
}

// Función para mostrar el formulario de nombre
function showNameForm() {
    const nameForm = prompt("Por favor, ingresa tu nombre:");
    if (nameForm) {
        userName = nameForm;
        localStorage.setItem('userName', userName);
    }
}

// Función principal
function main() {
    if (!userName) {
        showNameForm();
    }

    // Verificar si la página actual es la de categoría de sticker
    if (window.location.href.includes("categoria_sticker.html")) {
        showStickerCategoryPage();
    } else if (window.location.href.includes("resumen_stickers.html")) {
        showStickerSummaryPage();
    }
}

// Llamada a la función principal
main();

// Añadido: Función para inicializar el flujo del programa
function startFlow() {
    initializeHomePage();
}

// Añadido: Función para mostrar la página "Sobre Kty&Pili"
function showAboutUsPage() {
    clearContent();
    titleHeading("Sobre Kty&Pili");
    showMessage(`Somos un equipo conformado por Katty Orellana y Pilar Orellana, con más de 18 años de experiencia en el mundo del diseño gráfico, ilustración y animación 2D.`);
    showMessage(`En este proyecto tenemos el agrado de compartir algunos stickers para que disfrutes en tu comunicación por WhatsApp.`);
}

// Añadido: Función para mostrar la página "Instalar Stikers"
function showInstallationPage() {
    clearContent();
    titleHeading("Instalar Stickers");
    showMessage (`Para instalar tus stickers, sigue estos pasos:`);
    showMessage (`1. Abre tu aplicación de mensajería favorita.`);
    showMessage (`2. Selecciona la conversación o chat donde deseas enviar los stickers.`);
    showMessage (`3. Busca la opción de stickers en el menú de emojis.`);
    showMessage (`4. ¡Disfruta enviando tus nuevos stickers!`);
}

// Añadido: Función para mostrar la página de stickers de una categoría específica
function showStickersPage(categoryName) {
    clearContent();
    const selectedCategory = categories.find(category => category.name === categoryName);
    titleHeading(`Stickers de ${selectedCategory.name}`);
    showMessage(`Descubre los stickers de ${selectedCategory.name} y elige tus favoritos.`);
    
    // Verificamos si hay stickers en la categoría seleccionada
    if (selectedCategory.stickers && selectedCategory.stickers.length > 0) {
        selectedCategory.stickers.forEach(sticker => {
            const stickerCard = document.createElement('div');
            stickerCard.classList.add('sticker-card');

            // Agregamos una imagen pequeña de sticker (actualiza el URL de la imagen)
            const stickerImage = document.createElement('img');
            stickerImage.src = sticker.imageUrl;
            stickerImage.alt = sticker.name;
            stickerImage.classList.add('sticker-image');
            
            // Contenedor para el nombre del sticker
            const stickerNameContainer = document.createElement('div');
            stickerNameContainer.classList.add('sticker-name-container');

            // Nombre del sticker
            const stickerName = document.createElement('p');
            stickerName.textContent = sticker.name;

            // Botón para añadir o eliminar el sticker
            const actionButton = document.createElement('button');
            actionButton.textContent = selectedStickers.has(sticker.code) ? 'Eliminar' : 'Añadir';
            actionButton.addEventListener('click', () => toggleStickerSelection(selectedCategory.name, sticker.name));

            // Añadir elementos al contenedor de la tarjeta de sticker
            stickerCard.appendChild(stickerImage);
            stickerNameContainer.appendChild(stickerName);
            stickerCard.appendChild(stickerNameContainer);
            stickerCard.appendChild(actionButton);

            mainContainer.appendChild(stickerCard);
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
function showStickersPage(categoryName) {
    clearContent();
    const selectedCategory = categories.find(category => category.name === categoryName);
    titleHeading(`Stickers de ${selectedCategory.name}`);
    showMessage(`Descubre los stickers de ${selectedCategory.name} y elige tus favoritos.`);

    // Verificamos si hay stickers en la categoría seleccionada
    if (selectedCategory.stickers && selectedCategory.stickers.length > 0) {
        selectedCategory.stickers.forEach(sticker => {
            const stickerElement = document.createElement('div');
            stickerElement.classList.add('sticker-card');

            // Agregamos una imagen pequeña de sticker (actualiza el URL de la imagen)
            stickerElement.innerHTML = `
                <img src="${sticker.imageUrl}" alt="${sticker.name}" class="sticker-image">
                <p>${sticker.name}</p>
                <button onclick="toggleStickerSelection('${selectedCategory.name}', '${sticker.name}')">Seleccionar</button>
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

// Añadido: Función para mostrar la página "Sobre Nuevos Stickers" con un formulario para ingresar el email
function showNewStickersPage() {
    clearContent();
    titleHeading("Sobre Nuevos Stickers");

    const emailForm = document.createElement('form');
    emailForm.innerHTML = `
        <label for="email">Ingresa tu email para recibir notificaciones sobre nuevos stickers:</label>
        <input type="email" id="email" name="email" required>
        <button type="submit">Enviar</button>
    `;
    emailForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = event.target.email.value;
        // Aquí podrías hacer algo con el email, como enviarlo a tu servidor para su procesamiento
        showMessage(`¡Gracias por registrarte! Te mantendremos informado sobre los nuevos stickers.`);
    });
    mainContainer.appendChild(emailForm);
}

// Función para mostrar la página de redes sociales
function showFollowUsPage() {
    clearContent();
    titleHeading("Síguenos en Redes Sociales");
    showMessage("Conéctate con nosotros en las redes sociales para mantenerte actualizado sobre nuevos lanzamientos y promociones.");

    const socialLinks = [
        { name: "Facebook Kty&Pili", url: "https://www.facebook.com/KtyPili/" },
        { name: "LinkedIn Kty&Pili", url: "https://www.linkedin.com/company/kty&pili/" },
        { name: "Twitter Kty&Pili", url: "https://twitter.com/ktypili" },
    ];

    const socialList = document.createElement('ul');
    socialLinks.forEach(link => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.textContent = link.name;
        listItem.appendChild(anchor);
        socialList.appendChild(listItem);
    });

    mainContainer.appendChild(socialList);
}

// Añadido: Función para mostrar el número de stickers en el carrito
function showCartItemCount() {
    const cartItemCount = selectedStickers.length;
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartItemCount.toString();
    }
}

// Añadido: Función para mostrar la página de "Resumen de Stickers" y descargar los stickers seleccionados
function showCartPage() {
    clearContent();
    titleHeading("Carrito - Resumen de Stickers");

    const stickerList = document.createElement('ul');
    selectedStickers.forEach(selectedSticker => {
        const listItem = document.createElement('li');
        listItem.textContent = `Categoría: ${selectedSticker.category}, Sticker: ${selectedSticker.sticker.name}`;
        stickerList.appendChild(listItem);
    });

    mainContainer.appendChild(stickerList);

    // Añadido: Mostrar botón de descargar stickers
    const downloadButton = document.createElement('button');
    downloadButton.textContent = 'Descargar';
    downloadButton.addEventListener('click', function() {
        downloadStickers(); // Llama a la función para descargar los stickers al hacer clic en el botón
    });
    mainContainer.appendChild(downloadButton);
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
    // Actualizar el contador del carrito
    showCartItemCount();
}

// Añadido: Función para seleccionar una categoría de manera interactiva
function chooseCategoryInteractive(categories) {
    return 0;  // Selecciona la primera categoría por defecto
}

// Función para mostrar los stickers de una categoría específica
function showStickers(categoryIndex) {
    clearContent();
    const selectedCategory = categories[categoryIndex];
    titleHeading(`Stickers de ${selectedCategory.name}`);
    
    // Ordenar stickers alfabéticamente por nombre
    const sortedStickers = selectedCategory.stickers.sort((a, b) => a.name.localeCompare(b.name));
    
    sortedStickers.forEach(sticker => {
        const stickerCard = document.createElement('div');
        stickerCard.classList.add('sticker-card');
    
        // Contenedor para la imagen del sticker
        const stickerImageContainer = document.createElement('div');
        stickerImageContainer.classList.add('sticker-image-container');
    
        // Imagen del sticker
        const stickerImage = document.createElement('img');
        stickerImage.src = sticker.imageUrl;
        stickerImage.alt = sticker.name;
        stickerImage.classList.add('sticker-image');
        // Reducir tamaño de imagen a 100px por lado
        stickerImage.style.width = '100px';
        stickerImage.style.height = '100px';
    
        // Contenedor para el nombre del sticker
        const stickerNameContainer = document.createElement('div');
        stickerNameContainer.classList.add('sticker-name-container');
    
        // Nombre del sticker
        const stickerName = document.createElement('p');
        stickerName.textContent = sticker.name;
    
        // Botón para añadir o eliminar el sticker
        const actionButton = document.createElement('button');
        actionButton.textContent = selectedStickers.find(selected => selected.category === selectedCategory.name && selected.sticker.name === sticker.name) ? 'Eliminar' : 'Añadir';
        actionButton.addEventListener('click', () => {
            toggleStickerSelection(selectedCategory.name, sticker.name);
            showSummaryPage(); // Actualiza el resumen después de cambiar la selección
        });
    
        // Añadir elementos al contenedor del sticker
        stickerImageContainer.appendChild(stickerImage);
        stickerNameContainer.appendChild(stickerName);
        stickerCard.appendChild(stickerImageContainer);
        stickerCard.appendChild(stickerNameContainer);
        stickerCard.appendChild(actionButton);
    
        mainContainer.appendChild(stickerCard);
    });
}

// Añadido: Función para agregar stickers al resumen de selección
function addToSelection(category, sticker) {
}

// Añadido: Función para agregar stickers al carrito y actualizar el contador del carrito
function addToCart(category, sticker) {
    cartCount++; // Incrementar el contador del carrito
    // Mostrar mensaje de confirmación con el nombre del sticker y la cantidad en el carrito
    showMessage(`¡Excelente elección ${localStorage.getItem('firstName')}! "${sticker}" ha sido agregado al carrito de compras. (${cartCount} en el carrito)`);
}

// Añadido: Función para mostrar la página principal después de la instalación
function returnToMainMenu() {
    startFlow();
}

// Añadido: Función para mostrar la página de categorías solo si el nombre de usuario está guardado en LocalStorage
function showCategoriesPage() {
    clearContent();
    titleHeading("Categorías de Stickers");
    showMessage(`¡Hola ${localStorage.getItem('firstName')}! Explora nuestras increíbles categorías de stickers.`);
    // Renderizar las categorías de manera dinámica
    renderCategories(categories);
}

// Añadido: Función para mostrar el resumen de stickers seleccionados
function showSummaryPage() {
    clearContent();
    titleHeading("Resumen de Stickers Seleccionados");

    // Verificar si hay stickers seleccionados
    if (selectedStickers.length === 0) {
        showMessage("Aún no has seleccionado ningún sticker.");
    } else {
        // Mostrar la lista de stickers seleccionados
        showMessage(selectedStickers.map(selectedSticker => {
            return `Categoría: ${selectedSticker.category}\nSticker: ${selectedSticker.sticker.name}`;
        }).join('\n\n'));
    }

    // Mostrar botón para volver al menú principal
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Volver al Menú Principal';
    returnButton.addEventListener('click', showMainMenu);
    mainContainer.appendChild(returnButton);
}

// Añadido: Función para mostrar el resumen de stickers seleccionados y opciones adicionales
function showSummaryPageWithOptions() {
    showSummaryPage();
    showCartItemCount();
}

// Añadido: Función para descargar los stickers seleccionados y redirigir después de la descarga
function downloadStickers() {
    // Aquí podrías implementar la lógica para descargar los stickers
    showMessage('¡Descarga exitosa!');
    setTimeout(() => {
        showInstallationPage(); // Redirige a la página de instalación después de 2 segundos
    }, 2000);
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
        { name: "Nuevos stickers", action: showNewStickersPage },
        { name: "Redes sociales", action: showFollowUsPage },
        { name: "Resumen de stickers", action: showSummaryPage },
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

// Añadido: Función para mostrar el menú principal y actualizar el contador del carrito
function showMainMenu() {
    clearContent();
    titleHeading("Menú Principal");
    showMessage(`¡Hola ${localStorage.getItem('firstName')}! Bienvenido a Stickers Kty&Pili. ¿Qué te gustaría hacer hoy?`);
    // Mostrar opciones de navegación
    showNavigationMenu();
    // Mostrar contador del carrito
    showCartItemCount();
}

// Añadido: Verificar si el nombre de usuario ya está guardado en LocalStorage
document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('firstName')) {
        saveUserFirstName();
    }
    showMainMenu();
    showCategoriesPage();
});

// Bucle principal
let continueFlow = true;
while (continueFlow) {
    let selectedCategoryIndex = chooseCategoryInteractive(categories);
    let selectedCategory = categories[selectedCategoryIndex];
    showMessage(`¡Excelente elección ${localStorage.getItem('firstName')}! Descubre los stickers disponibles en ${selectedCategory.name}`);

    let keepRunningSticker = true;

    while (keepRunningSticker) {
        // Mostrar stickers de la categoría seleccionada
        showStickers(selectedCategoryIndex);

        let contentChoiceOfACategory1 = `${localStorage.getItem('firstName')}, elige tu sticker favorito.\nSelecciona una opción y escribe el número correspondiente:\n \n`;

        selectedCategory.stickers.forEach((sticker, index) => {
            contentChoiceOfACategory1 += `${index + 1}. ${sticker.name}\n`;
        });

        let optionCategory1;

        // Cambiado: La selección del sticker ahora se simula programáticamente
        optionCategory1 = Math.floor(Math.random() * selectedCategory.stickers.length) + 1;

        const selectedSticker = selectedCategory.stickers[optionCategory1 - 1];

        // Verificamos si el sticker ya fue seleccionado
        if (!selectedStickers.find(selected => selected.category === selectedCategory.name && selected.sticker.name === selectedSticker.name)) {
            showMessage(`¡Excelente elección ${localStorage.getItem('firstName')}! Tu sticker favorito es: ${selectedSticker.name}`);

            selectedStickers.push({ category: selectedCategory.name, sticker: selectedSticker });
            addToCart(selectedCategory.name, selectedSticker.name); // Agregar al carrito
        } else {
            showMessage(`Ya has seleccionado el sticker ${selectedSticker.name}. Elige otro.`);
        }

        // Verificar si el usuario desea agregar más stickers o modificar su selección
        let continueOption;
        do {
            continueOption = Math.floor(Math.random() * 3) + 1;
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

    addToSelection(selectedCategory.name);

    selectedCategories.push(selectedCategory);

    let exploreMoreOption;
    do {
        exploreMoreOption = Math.floor(Math.random() * 3) + 1;
    } while (isNaN(exploreMoreOption) || exploreMoreOption < 1 || exploreMoreOption > 3);

    switch (exploreMoreOption) {
        case 1:
            break;
        case 2:
            let modifiedSelection = false;

            while (!modifiedSelection) {
                // Mostrar el resumen de stickers seleccionados y opciones para descargar o volver
                showSummaryPageWithOptions();

                // Agregar lógica para descargar stickers y volver al menú principal
                let closeOption;
                do {
                    closeOption = Math.floor(Math.random() * 2) + 1;
                } while (isNaN(closeOption) || (closeOption !== 1 && closeOption !== 2));

                if (closeOption === 1) {
                    // Continuar con el flujo principal
                    startFlow();
                } else {
                    continueFlow = false;
                }

                break;
            }

            break;
        case 3:
            // Mostrar el resumen de stickers seleccionados y opciones para descargar o volver
            showSummaryPageWithOptions();

            console.log(`${localStorage.getItem('firstName')}, aquí está el resumen de tus stickers seleccionados:`);

            for (const selectedCategory of selectedCategories) {
                console.log(`Categoría: ${selectedCategory.name}\nStickers:`);

                for (const selectedSticker of selectedStickers.filter(selected => selected.category === selectedCategory.name)) {
                    console.log(`- ${selectedSticker.sticker.name}`);
                }

                console.log("\n");
            }

            let downloadOption;
            do {
                downloadOption = Math.floor(Math.random() * 2) + 1;
            } while (isNaN(downloadOption) || (downloadOption !== 1 && downloadOption !== 2));

            switch (downloadOption) {
                case 1:
                    showMessage(`¡Descarga confirmada, ${localStorage.getItem('firstName')}! Los stickers han sido descargados.`);
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
}