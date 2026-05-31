# MocoSoft - Dashboard de Innovación Colectiva

## 📋 Información del Proyecto
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
Este proyecto representa la evolución tecnológica de la plataforma institucional de **MocoSoft**. Tomando como base la estructura estática tradicional (HTML, CSS y JavaScript Vanilla) desarrollada en el TP1, se ejecutó una migración integral hacia una **Single Page Application (SPA)** utilizando **React** y **Vite**. 

La interfaz se rediseñó bajo una arquitectura de **Dashboard centralizado**, donde la navegación se rige por una barra lateral (*Sidebar*) fija y los contenidos se renderizan de forma dinámica, optimizando la transferencia de datos y la fluidez de la experiencia de usuario (UX).

---

## Tecnologías y Arquitectura Utilizadas
* **React 18** & **Vite**: Entorno de desarrollo y empaquetamiento ultra rápido.
* **React Router Dom (v6)**: Implementación de enrutamiento jerárquico y parámetros dinámicos en URL (`/perfil/:id`).
* **React Hooks (`useState`, `useEffect`)**: Gestión de estados mutables locales y control del ciclo de vida para peticiones asíncronas.
* **CSS3 Modularizado**: Unificación de hojas de estilo heredadas, adaptadas mediante *Flexbox* y *CSS Grid* para un comportamiento responsivo.

---

## Estructura del Proyecto (Eje de Componentes)
La aplicación se organizó bajo criterios de modularidad y reutilización de código:
```text
src/
├── components/
│   ├── Card.jsx          # Componente reutilizable para la grilla de integrantes
│   └── Sidebar.jsx       # Eje estructural de navegación del Dashboard
├── data/
│   ├── data.json         # Base de datos local (20 objetos de tecnologías)
│   └── integrantes.json  # Modelos de datos para perfiles individuales
├── pages/
│   ├── Home.jsx          # Panel central de presentación del equipo
│   ├── Perfil.jsx        # Vista dinámica y paramétrica de perfiles profesionales
│   ├── Explorador.jsx    # Motor de búsqueda local con filtrado reactivo
│   ├── Bitacora.jsx      # Documentación y fundamentación técnica de la migración
│   └── ApiExterna.jsx    # Módulo de consumo asíncrono (API de GitHub)
├── App.jsx               # Enrutador central y Layout general del Dashboard
├── main.jsx              # Punto de entrada de la aplicación
└── index.css             # Estilos globales e integrados del sistema