# MocoSoft - Plataforma Institucional y Dashboard de Gestión

## Información del Proyecto
**Institución:** IFTS N°29  
**Materia:** Desarrollo Web Frontend  
**Trabajo Práctico:** TP N°2 - Proyecto React MocoSoft  
**Carrera:** Tecnicatura Superior en Desarrollo de Software  
**Año:** 2026  
**Tablero de Trello:** [Sprint Planning - MocoSoft](https://trello.com/invite/b/6a2e0356521eb5ac626becc1/ATTI173e23d4ab0643c870b76cea2da572fc70588C20/tp2-mocosoft-frontend)  
**Deploy en Vercel:** (https://front-tp2-grupal.vercel.app/)

---

## Integrantes del Equipo y Repositorios
* **Sergio Daniel Galván**
* **Victor Álvarez**
* **Alejandro Sebastian Rodriguez**

---

## Descripción del Proyecto
Este proyecto representa la evolución arquitectural del sitio web estático desarrollado inicialmente en el TP1. Para esta entrega, se migró la totalidad de la estructura hacia el ecosistema de **React 18** utilizando **Vite** como empaquetador y entorno de desarrollo. La plataforma fue transformada en una Single Page Application (SPA) modular, optimizando los tiempos de respuesta y la transferencia de datos.

La interfaz fue diseñada bajo la estética formal de un **Dashboard de Producción Corporativo**. El flujo de navegación se encuentra regido por una barra lateral fija (Sidebar) vinculada al enrutador de React. Esto permite un intercambio de pantallas instantáneo mediante la inyección dinámica de componentes en el bloque elástico derecho, suprimiendo las recargas completas del navegador y la pérdida de estados en memoria.

---

## Tecnologías y Herramientas Utilizadas
* **Core:** React 18, JavaScript ES6+
* **Herramientas de Construcción:** Vite, Node.js
* **Enrutamiento:** React Router Dom (v6)
* **Estilos y Layouts:** CSS3 (Variables Globales, Flexbox, CSS Grid)
* **Integraciones Externas:** Formspree SDK React, Dev.to REST API
* **Gestión y Despliegue:** GitHub, Trello (Kanban), Vercel

---

## Guía de Estilos y Recursos

### Paleta de Colores (Hexadecimal)
* **Color Primario (Textos oscuros/Títulos):** `#2d3436`
* **Color de Acento (Interactividad/Botones):** `#00b894`
* **Color de Fondo (Fondo Light):** `#f9f9f9`
* **Texto Secundario:** `#636e72`
* **Fondo Modo Oscuro:** `#1e252b` / `#2c353d`

### Tipografías (Google Fonts)
* **Títulos (h1, h2, h3, h4):** [Poppins](https://fonts.google.com/specimen/Poppins)
* **Textos de Cuerpo:** [Roboto](https://fonts.google.com/specimen/Roboto)

### Iconografía y Logotipos
Para la representación visual del stack técnico individual y de los elementos interactivos del explorador, se integró la librería oficial de [Devicon](https://devicon.dev/) mediante clases de fuentes CSS persistentes.

---

## Características Clave e Interactividad (UX/UI)

* **Navegación Estilo Dashboard:** En entornos de escritorio, la Sidebar lateral se mantiene fija (`position: fixed; width: 260px`) sobre el eje izquierdo de la pantalla. En dispositivos móviles, la interfaz se adapta automáticamente ocultando el menú e incorporando un panel deslizable (Slide-In) activado por un controlador de estado booleano vinculado al botón de menú tipo hamburguesa, bloqueando desbordes horizontales.
* **Modo Oscuro Reactivo:** Implementation de un switch de estado global que inyecta dinámicamente la clase `dark-theme` en el `body` del documento. Este proceso altera en tiempo real las variables de entorno CSS, transformando la paleta de colores de tarjetas, textos, formularios y fondos para la comodidad visual del usuario.
* **Control de Scroll Asíncrono:** Desarrollo del componente especializado `ScrollToTop` acoplado al hook `useLocation`. Al registrarse un cambio en el historial de rutas, se resetea la posición del scroll del contenedor central a cero de manera automática, emulando el comportamiento de carga de una página nativa.
* **Pausa por Hover en Carrusel:** Para no frustrar la lectura de los proyectos técnicos de cada integrante, los carruseles manuales detienen su temporizador automático (`setInterval`) en el momento exacto en que el cursor del usuario interactúa con el área de la tarjeta, reanudando la ejecución al retirar el mismo.
* **Slider Infinito de Marcas:** En la sección inferior de la Home se estructuró un carrusel continuo de logotipos institucionales resuelto exclusivamente mediante propiedades y animaciones `@keyframes` en CSS, eludiendo la sobrecarga de scripts sobre el hilo principal de ejecución de React.

---

## Separación de Capas y Estructuras de Datos (JSON)

Garantizando el cumplimiento de las buenas prácticas de la ingeniería de software frontend, se desacopló por completo la capa de datos de la lógica de renderizado visual. La información técnica e institucional fue centralizada en archivos de estructura estática locales:
* `alejandro.json`
* `sergio.json`
* `victor.json`
* `data.json`
* `proyectos.json`
* `bitacora.json`

Gracias a este desacoplamiento, componentes clave como la vista de perfiles (`Perfil.jsx`) y la galería funcionan de manera genérica y polimórfica: interpretan los parámetros de la URL mediante el hook `useParams` (ej: `/perfil/sergio`) e inyectan el mapa de objetos correspondiente. Esto simula fielmente la arquitectura de una aplicación de producción conectada a un servicio de Base de Datos profesional.

---

## Recorrido por las Secciones y Capturas de Pantalla

### 1. Panel de Inicio (Home)
[Dashboard de Inicio](./public/img/screenshots/dashboard.jpg)  
**Consigna cumplida:** Presentación formal de la sección institucional "Quiénes Somos", mapa interactivo de ubicación y grilla de accesos rápidos parametrizados para cada integrante con avatares circulares. Incorpora lógica de renderizado condicional para alternar la visibilidad del propósito del equipo.

### 2. Vista Detallada de Perfil Profesional
[Sección de Películas](./public/img/screenshots/peliculas.jpg)  
[Sección de Álbumes](./public/img/screenshots/discos.jpg)  
Páginas individuales administradas dinámicamente por el enrutador. Incluyen barras de progreso animadas para la ponderación del stack técnico, un mínimo de 5 íconos interactivos, enlaces a redes con efectos de escalado posicional y carrusel manual para la visualización de proyectos propios. Cuenta con módulos personalizados independientes para la integración de material cinematográfico y reproductores asíncronos de Spotify.

### 3. Explorador de Datos Indexado
[Explorador JSON Dinámico](./public/img/screenshots/explorador.jpg)  
Renderizado dinámicamente un archivo JSON de configuración compuesto por más de 20 objetos de desarrollo. Implementa un campo de búsqueda indexado por texto y lógica de filtrado por categorías en tiempo real acoplada al estado del componente.

### 4. Módulo de API Externa (Noticias Tech)
[Módulo de Noticias](./public/img/screenshots/noticias.jpg)  
Consumo asíncrono en tiempo real desde los endpoints públicos de la API de *Dev.to*. Estructura un manejo estricto de los estados del ciclo de vida de la petición: carga (`Loading`), éxito de renderizado y pantallas de contingencia ante errores de red, acoplado a un sistema de paginación manual incremental.

### 5. Galería de Imágenes Interactiva (Lightbox)
[Galería Interactiva](./public/img/screenshots/galeria.jpg)  
Visualizador estructurado sobre una cuadrícula elástica (CSS Grid) que consume dinámicamente el archivo `proyectos.json`. Cuenta con un módulo de Lightbox integrado: la selección de una tarjeta despliega un contenedor modal opaco a pantalla completa con controles de navegación interna. Las dimensiones se encuentran limitadas de forma responsive (`55vh`) para mitigar desbordes verticales en dispositivos móviles, incorporando el cierre obligatorio mediante eventos de escucha para la tecla **ESC** y clics en zonas externas.

### 6. Bitácora del Proyecto y Evolución
[Bitácora de Desarrollo](./public/img/screenshots/bitacora.jpg)  
Renderizado cronológico modular de las fases de desarrollo extraídas desde `bitacora.json`. Documenta la organización interna del equipo para cumplir con los requerimientos del proyecto.

#### Tablero Organizacional (Trello Kanban)
Para la coordinación sincrónica del equipo de desarrollo, se implementó un flujo Kanban en Trello, distribuyendo las consignas e hitos obligatorios del documento de requerimientos en cuatro columnas de estado continuo: *Backlog (Por Hacer)*, *En Proceso*, *En Revisión* y *Hecho (Done)*. Esto permitió asegurar el control de tiempos, el estado actual de las entregas y la asignación transparente de responsabilidades técnicas.

#### Justificación Técnica de la Migración Arquitectural
La transición desde los archivos HTML/JS imperativos del TP1 hacia React se fundamenta en criterios de rendimiento y mantenibilidad:
* **Componentización:** Fragmentación de la UI en bloques autónomos, andando la redundancia de código y centralizando las actualizaciones estructurales.
* **Virtual DOM:** React gestiona las actualizaciones de la pantalla calculando las diferencias en memoria y modificando estrictamente los nodos del DOM alterados, optimizando de manera drástica el consumo de recursos en hardware móvil.
* **Single Page Application:** La supresión de peticiones de archivos HTML independientes al servidor agiliza la navegación del cliente y estabiliza la persistencia de datos globales de la aplicación.

### 7. Formulario de Contacto (Formspree SDK)
[Formulario de Contacto](./public/img/screenshots/formulario.jpg)  
Formulario de validación asíncrona enlazado directamente a través del SDK de `@formspree/react`, procesando estados de envío, éxito y contingencias de datos de manera declarativa.

---

App (Componente Raíz)
└── BrowserRouter (Contexto Global de Rutas)
    └── div.dashboard-layout (Maquetado de Contención)
        ├── Sidebar (Menú de Navegación Lateral Fijo)
        │   ├── div.sidebar-header (Logo del Grupo MocoSoft)
        │   ├── NavLink (path="/") -> Home
        │   ├── NavLink (path="/bitacora") -> Bitacora
        │   ├── NavLink (path="/explorador") -> Explorador
        │   ├── NavLink (path="/api-externa") -> ApiNoticias
        │   ├── NavLink (path="/galeria") -> Galeria
        │   ├── NavLink (path="/arbol") -> Arbol 
        │   ├── NavLink (path="/contacto") -> Contacto
        │   └── ToggleButton (Switch de Control de Modo Oscuro)
        └── DashboardContent (Contenedor Elástico Central Derecho)
            └── Routes (Manejador Dinámico de Vistas)
                ├── Route (/) -> Home
                │   └── Card
                ├── Route (/perfil/:id) -> Perfil
                ├── Route (/bitacora) -> Bitacora
                ├── Route (/explorador) -> Explorador
                ├── Route (/api-externa) -> ApiNoticias
                ├── Route (/galeria) -> Galeria 
                ├── Route (/arbol) -> Arbol
                └── Route (/contacto) -> Contacto