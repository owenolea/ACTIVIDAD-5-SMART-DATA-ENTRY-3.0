# ACTIVIDAD 5: EVOLUCIÓN Y MEJORA DEL PROYECTO INTEGRADOR - MODIFICACIÓN DE LAS ACTIVIDADES 1 Y 2 - PWD 7° 2° Grupo B
EEST N°1 "Eduardo Ader" - 7° 2º Año - Prof. York

## 📅 Descripción del Proyecto

Sistema web de reporte de reclamos y trámites desarrollado con tecnologías web modernas (HTML5, CSS3, JavaScript). La aplicación permite a los ciudadanos registrar y reportar problemas en su comunidad con geolocalización integrada, gestión de imágenes y descripción detallada de incidentes.

**OTR (Observatorio de Trámites y Reclamos)** resuelve la necesidad de un sistema ágil y accesible para que los ciudadanos reporten problemas públicos como infraestructura dañada, basura, pozos, árboles caídos, entre otros, con la capacidad de asignar niveles de urgencia y ubicación geográfica precisa.


## 👥 Equipo de Desarrollo
Owen Olea

## 🛠️ Stack Tecnológico
Lenguajes: HTML5, CSS3, JavaScript (ES6+)
Librerías: Leaflet.js (mapas), Toastify-js (notificaciones)
Almacenamiento: Geolocalización mediante OpenStreetMap (Nominatim)
Entorno: Visual Studio Code
Control de Versiones: Git / GitHub

## 🏗️ Arquitectura del Sistema
Este proyecto sigue una arquitectura frontend:

Capa de Presentación: HTML5 semántico, CSS3 con diseño responsivo y gradientes, JavaScript para interactividad.
Capa de Mapas: Leaflet.js integrado para captura de ubicaciones geográficas.
Capa de Validación: Validación en cliente con feedback visual mediante Toastify.
Persistencia: Envío de datos a backend PHP (guardar.php).

## 📁 Estructura del Repositorio
otr/
├── index.html          # Página principal del formulario de reclamos
├── script.js           # Lógica JavaScript (mapas, validación, imagenes)
├── style.css           # Estilos CSS (diseño responsivo, temas oscuros)
├── LICENSE             # Licencia MIT
├── README.md           # Este archivo
└── .gitignore          # Archivos excluidos del control de versiones

## 🚀 Instalación y Ejecución
Clonar repositorio:

git clone https://github.com/usuario/otr.git

Abrir en navegador:

Navegar a la carpeta del proyecto
Abrir index.html en cualquier navegador web moderno
No requiere instalación de dependencias adicionales.

## 📄 Licencia
Este proyecto se distribuye bajo la licencia MIT.
