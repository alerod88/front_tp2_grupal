# MocoSoft - Plataforma Institucional y Dashboard de Gestión

## 💻 Información del Proyecto
**Institución:** IFTS N°29
**Materia:** Desarrollo Web Frontend
**Trabajo Práctico:** TP N°2 - Proyecto React
MocoSoft
**Carrera:** Tecnicatura Superior en Desarrollo de Software
**Año:** 2026 [cite: 8]
**Deploy en Vercel:** 

---

## Integrantes del Equipo y Repositorios
**Sergio Daniel Galván**
**Victor Álvarez**
**Alejandro Sebastian Rodriguez**

---

## Descripción del Proyecto
Este proyecto es la evolución del sitio web estático que desarrollamos en el TP1. Para esta entrega, migramos toda la estructura hacia **React 18** y **Vite**, transformando la plataforma en una Single Page Application (SPA) modular, rápida y fluida.

Decidimos diseñar la interfaz bajo la estética de un **Dashboard de Producción**. El flujo de navegación está regido por una barra lateral fija (*Sidebar*) que se conecta al enrutador de React, logrando que el intercambio de pantallas sea instantáneo, cargando los contenidos en el bloque derecho sin necesidad de refrescar el navegador.

---

## Guía de Estilos y Recursos

### Paleta de Colores (Hexadecimal) 
**Color Primario (Textos oscuros/Títulos):** `#2d3436`
**Color de Acento (Interactividad/Botones):** `#00b894`
**Color de Fondo (Fondo Light):** `#f9f9f9`
**Texto Secundario:** `#636e72`
**Fondo Modo Oscuro:** `#1e252b` / `#2c353d` 

### Tipografías (Google Fonts)
**Títulos (h1, h2, h3, h4):** [Poppins](https://fonts.google.com/specimen/Poppins) 
**Textos de Cuerpo:** [Roboto](https://fonts.google.com/specimen/Roboto) 

### Iconografía y Logotipos
Para los iconos del stack técnico de cada integrante y del explorador utilizamos la librería oficial de [Devicon](https://devicon.dev/) integrada mediante clases de fuentes CSS.

---

##  Características Clave e Interactividad (UX/UI)

**Navegación Estilo Dashboard:** En computadoras de escritorio, la Sidebar lateral se mantiene completamente fija (`position: fixed; width: 260px`) en el lateral izquierdo, actuando como el eje estructural del sitio. En dispositivos móviles, se oculta automáticamente y se convierte en un menú lateral deslizable (*Slide-In*) que aparece al tocar el botón hamburguesa.
**Modo Oscuro Reactivo:** Implementamos un switch global que inyecta la clase `dark-theme` en el `body` de la página. Esto altera las variables CSS en caliente, cambiando instantáneamente los colores de las tarjetas, textos, formularios y fondos para la comodidad visual del usuario.
**Control de Scroll asíncrono:** Usamos un componente personalizado `ScrollToTop` que escucha los cambios de ruta mediante el hook `useLocation`. Al cambiar de página, resetea la posición del scroll de la caja central a cero de manera automática.
**Pausa por Hover en Carrusel:** Para no frustrar la lectura de los proyectos de cada integrante, programamos el carrusel para que detenga temporalmente su temporizador automático (`setInterval`) en el momento en que el usuario posa el cursor sobre la tarjeta.
**Slider Infinito de Marcas:** En la base de la Home desarrollamos un carrusel continuo de logos corporativos utilizando únicamente animaciones `@keyframes` en CSS, logrando un rendimiento fluido sin sobrecargar de scripts a React.

---

## Separación de Capas y Estructuras de Datos (JSON)

Para seguir las buenas prácticas de desarrollo y mantener el código ordenado, **desacoplamos por completo la información de la lógica visual usando archivos JSON locales** (`alejandro.json`, `sergio.json`, `victor.json`, `data.json` y `bitacora.json`).

De esta manera, componentes como la vista detallada de perfiles (`Perfil.jsx`) funcionan de manera genérica: leen el parámetro de la URL (ej: `/perfil/sergio`) e inyectan los datos correspondientes de forma dinámica, simulando el comportamiento real de una aplicación conectada a una Base de Datos profesional.

---

##  Recorrido por las Secciones y Capturas de Pantalla

### 1. Panel de Inicio (Home) 
[Dashboard de Inicio](./public/img/screenshots/dashboard.jpg)
**Consigna cumplida:** Presenta la sección institucional "Quiénes Somos", el mapa interactivo y la grilla dinámica de tarjetas de acceso rápido para cada integrante, mostrando sus nombres y avatares circulares. Incluye un botón interactivo para mostrar/ocultar el propósito del equipo mediante renderizado condicional.

### 2. Vista Detallada de Perfil Profesional 
[Sección de Películas](./public/img/screenshots/peliculas.jpg)
[Sección de Álbumes](./public/img/screenshots/discos.jpg)
Cada estudiante cuenta con su página individual gestionada por React Router. Muestra barras de progreso animadas para el stack técnico, un mínimo de 5 iconos interactivos, redes sociales con efectos hover de escalado y un carrusel manual para recorrer al menos 3 proyectos propios. También incluye secciones multimedia personalizadas para música y cine.

### 3. Explorador de Datos Indexado 
[Explorador JSON Dinámico](./public/img/screenshots/explorador.jpg) 
Renderiza dinámicamente un archivo JSON local con más de 20 objetos técnicos[cite: 44]. Cuenta con un buscador por texto y lógica de filtrado por categorías en tiempo real que actualiza la interfaz de React al instante.

### 4. Módulo de API Externa (Noticias Tech)
[Módulo de Noticias](./public/img/screenshots/noticias.jpg)
Consumo asíncrono en tiempo real desde la API pública de *Dev.to*. Cuenta con manejo estricto de estados de carga (Loading), éxito y pantallas de error ante caídas de red, sumado a un sistema de paginación manual (Anterior/Siguiente) con indicador de posición actual.

### 5. Galería de Imágenes Interactiva (Lightbox) 
*** ***
Diseñamos un visualizador tipo Grid con soporte para Lightbox integrado. Al hacer clic en una imagen, se despliega un modal a pantalla completa con navegación interna (flechas), zoom adaptativo y la funcionalidad obligatoria de cierre mediante la tecla **ESC**.

### 6. Bitácora del Proyecto y Roles
[Bitácora de Desarrollo](./public/img/screenshots/bitacora.jpg)
Registro cronológico de tareas donde documentamos el uso de **Trello** para la gestión ágil con metodología Kanban y **GitFlow** para la división de ramas en GitHub. También incluye la justificación del proceso de evolución de la estructura estática del TP1 a los componentes de React.

### 7. Formulario de Contacto (Formspree SDK)
[Formulario de Contacto](./public/img/screenshots/formulario.jpg)
Formulario de consulta enlazado de manera asíncrona mediante el SDK de `@formspree/react`, validando los campos de correo y procesando los estados de envío de forma nativa.

---

## Árbol de Renderizado del Proyecto

Para cumplir con el requerimiento técnico obligatorio de la cátedra, detallamos a continuación el esquema jerárquico de componentes y el flujo de renderizado de la SPA

```text
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