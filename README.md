# MocoSoft - Innovación Colectiva

## Información del Proyecto
* **Institución:** IFTS N°29
* **Carrera:** Tecnicatura Superior en Desarrollo de Software
* **Materia:** Desarrollo Web Frontend
* **Trabajo Práctico:** TP N°2 - Migración a Single Page Application (SPA) con React
* **Equipo:** MocoSoft
* **Año:** 2026

---

## Integrantes del Equipo
* **Sergio Daniel Galván** - *Full Stack Developer*
* **Victor Álvarez** - *Frontend Specialist*
* **Alejandro Sebastian Rodriguez** - *Software & Logic Developer / Gestión de Rutas*

---

## Descripción General
Este proyecto es la evolución tecnológica de la plataforma web de **MocoSoft**. Tomando como base el sitio web estático (HTML, CSS y JavaScript Vanilla) que armamos para el TP1, realizamos una migración completa hacia una **Single Page Application (SPA)** utilizando **React** y **Vite**.

Rediseñamos la interfaz para que funcione como un **Dashboard centralizado**. La navegación se maneja desde una barra lateral fija (*Sidebar*) y los contenidos de las distintas secciones se cargan de forma dinámica. Esto hace que la página no tenga que recargarse por completo en cada clic, logrando una experiencia de usuario mucho más fluida y rápida.

---

## Capturas de Pantalla y Estructuración de Datos (JSON)

Para hacer que el sistema sea fácil de mantener y escalar, decidimos **separar la información del código fuente utilizando archivos locales en formato JSON** para cada uno de los integrantes (`alejandro.json`, `sergio.json` y `victor.json`).

Gracias a este enfoque, la página de perfiles (`Perfil.jsx`) funciona como una estructura única que lee y muestra los datos de forma automática según la URL que se visite (`/perfil/:id`), simulando el funcionamiento de una aplicación real conectada a una base de datos.

A continuación, mostramos los puntos clave del desarrollo y las mejoras visuales a través de las capturas de la aplicación:

### 1. Panel de Inicio (Dashboard General)
![Dashboard de Inicio](./public/img/screenshots/dashboard.jpg)
* **Captura de referencia:** `dashboard.jpg`
* **Detalle del trabajo:** Armamos el diseño general adaptativo. Corregimos un error visual que hacía que el contenido se encogiera hacia el centro de la pantalla. Ahora el banner principal y las tarjetas de los integrantes aprovechan el 100% del espacio disponible.
* **Componente arreglado:** Rediseñamos los estilos del botón del inicio ("Conocer/Ocultar Propósito") para que sea un botón redondeado, cómodo y con efectos visuales sutiles al pasar el cursor.

### 2. Rediseño de Películas y Álbumes Favoritos
![Peliculas](./public/img/screenshots/peliculas.jpg)
![Discos](./public/img/screenshots/discos.jpg)
* **Captura de referencia:** `peliculas.jpg` y `discos.jpg`
* **Detalle del trabajo:** Eliminamos las etiquetas nativas `<details>` de HTML porque causaban problemas de lectura en el modo oscuro (los títulos no se veían) y rompían el diseño al abrirse.
* **Resultado final:** Pasamos las películas y discos a un formato de una sola columna. Pusimos los títulos en blanco y los textos informativos en gris claro para que se lean perfectamente en cualquier pantalla, alineando de manera prolija los reproductores de Spotify y YouTube.

### 3. Ajuste de Fotos y Efecto Destello
![Efecto](./public/img/screenshots/destello.jpg)
* **Captura de referencia:** `destello.jpg`
* **Detalle del trabajo:** Corregimos el efecto de destello de luz (*Shiny Glow*) en las imágenes de perfil. Para evitar que la luz se saliera de los bordes redondeados de las fotos, aplicamos la propiedad CSS `mask-image` junto con sus prefijos correspondientes. De esta manera, el brillo se mantiene estrictamente dentro de la foto circular.

### 4. Animación del Carrusel de Proyectos
![Efecto](./public/img/screenshots/deslizamiento.jpg)
* **Captura de referencia:** `deslizamiento.jpg`
* **Detalle del trabajo:** Quitamos el cambio brusco que tenían las diapositivas al pasar de un proyecto a otro. Usando estados de React (`useState`) y temporizadores enlazados con clases de CSS, logramos que los proyectos se deslicen de forma lateral y suave, imitando el movimiento de una pantalla táctil.

### 5. Formulario de Contacto Funcional (Conexión con API Externa)
![Formulario](./public/img/screenshots/formulario.jpg)
* **Captura de referencia:** `formulario.jpg`
* **Detalle del trabajo:** Reemplazamos los botones grises y planos que venían por defecto en el navegador por componentes estilizados modernos.
* **Resultado final:** Unificamos la estética de todos los botones de la app bajo las clases `.btn-primary` y `.btn-secondary`. Además, conectamos el formulario con la **API externa de Formspree** utilizando su librería oficial para React. Esto permite recibir las consultas reales de los usuarios directamente en nuestro correo electrónico, controlando los estados de "Enviando..." y "¡Mensaje enviado!" de manera automática.

---

## Características e Interactividad de la Interfaz (UX/UI)

La aplicación cuenta con varias funciones interactivas programadas con lógica de React y transiciones de CSS:

* **Modo Oscuro Integrado:** Implementamos un botón conmutador global (`ToggleButton`) que maneja el cambio de tema mediante estados de React. Cambia el color de fondo y de los textos de toda la aplicación automáticamente para garantizar una lectura cómoda de noche.
* **Carrusel con Pausa Inteligente:** Los proyectos cambian de diapositiva de forma automática cada 4 segundos. Además, agregamos eventos para que el temporizador se detenga si el usuario apoya el cursor sobre el proyecto para leer, y continúe cuando lo saca.
* **Transiciones Fluidas:** El carrusel se mueve lateralmente con animaciones en el eje X, evitando cortes secos en la pantalla.
* **Efecto de Brillo Interactivo:** Al pasar el mouse por encima de los avatares de los integrantes, un destello luminoso cruza la imagen de lado a lado de forma dinámica.
* **Diseño Expandido sin Espacios Vacíos:** Ajustamos los contenedores principales y las tablas para que tengan un ancho fluido de hasta 1200px. Esto evita que quede demasiado espacio en blanco a los costados en monitores grandes de escritorio y hace que las secciones queden alineadas y balanceadas.

---

## Tecnologías Utilizadas
* **React 18** & **Vite**: Entorno de desarrollo moderno y empaquetamiento rápido de la aplicación.
* **React Router Dom (v6)**: Manejo de rutas internas de la SPA y parámetros dinámicos en la URL (`/perfil/:id`).
* **React Hooks (`useState`, `useEffect`, `useRef`)**: Control de los estados de la aplicación, el modo oscuro, la persistencia de los tiempos del carrusel y llamadas externas.
* **SDK de Formspree (`@formspree/react`)**: Conexión con servicio de API externa para el procesamiento y envío de formularios por correo.
* **CSS3 Personalizado**: Estructuración del diseño mediante Flexbox y CSS Grid para que la aplicación sea responsiva y se adapte a celulares y computadoras.

---

## Declaración de Uso de Inteligencia Artificial

En el equipo de **MocoSoft** incorporamos el uso de **Inteligencia Artificial (IA Generativa)** como una herramienta de apoyo para optimizar los tiempos de desarrollo y asegurar la calidad del código.

### Tareas en las que nos asistió la IA:
1. **Organización del CSS:** Nos ayudó a ordenar el archivo general `index.css`, agrupándolo en secciones claras para que sea más fácil de leer y mantener.
2. **Control de Tiempos en Animaciones:** Nos dio soporte para coordinar los milisegundos de espera en los cambios de estado del carrusel de proyectos.
3. **Compatibilidad en Navegadores:** Nos ayudó a corregir advertencias de estilos agregando los prefijos específicos de los motores de renderizado (como `-webkit-mask-image`).

> **Nota del equipo:** La IA se utilizó únicamente como un asistente técnico de consulta. Todas las decisiones sobre la estética visual, la separación de los componentes de React, la lógica de navegación y el armado de las estructuras de datos en formato JSON fueron diseñadas, controladas y validadas por los integrantes de nuestro equipo.

---

## Estructura del Proyecto (Eje de Componentes)
La aplicación se organizó de forma modular para que los componentes puedan reutilizarse:
```text
src/
├── components/
│   ├── Card.jsx          # Componente para mostrar las tarjetas de los integrantes
│   ├── Sidebar.jsx       # Barra lateral fija que maneja el menú de navegación
│   └── ToggleButton.jsx  # Botón encargado de activar y desactivar el Modo Oscuro
├── data/
│   ├── data.json         # Base de datos local (tecnologías de la app)
│   ├── bitacora.json     # Historial de reuniones y acuerdos del equipo
│   ├── alejandro.json    # Datos profesionales de Alejandro
│   ├── sergio.json       # Datos profesionales de Sergio
│   └── victor.json       # Datos profesionales de Víctor
├── pages/
│   ├── Home.jsx          # Panel principal de presentación del equipo
│   ├── Perfil.jsx        # Vista dinámica que carga la información de cada integrante
│   ├── Explorador.jsx    # Buscador con filtrado en tiempo real
│   ├── Bitacora.jsx      # Tabla con el registro del desarrollo del proyecto
│   └── ApiExterna.jsx    # Módulo que consume datos de la API de GitHub
├── App.jsx               # Enrutador principal y diseño base del Dashboard
├── main.jsx              # Punto de entrada de la aplicación
└── index.css             # Estilos de diseño globales unificados