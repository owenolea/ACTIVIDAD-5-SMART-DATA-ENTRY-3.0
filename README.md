# ACTIVIDAD 5: SMART DATA ENTRY 3.0 - OBSERVATORIO DE TRÁMITES Y RECLAMOS

**PWD 7° 2° Grupo B** | **EEST N°1 "Eduardo Ader"** | **7° 2º Año - Prof. York**

---

## 📱 Descripción del Proyecto

Sistema web de reporte de reclamos y trámites desarrollado con tecnologías web modernas (HTML5, CSS3, JavaScript). La aplicación permite a los ciudadanos registrar y reportar problemas en su comunidad con geolocalización integrada, gestión de imágenes y descripción detallada de incidentes.

**OTR (Observatorio de Trámites y Reclamos)** resuelve la necesidad de un sistema ágil y accesible para que los ciudadanos reporten problemas públicos como infraestructura dañada, basura, pozos, árboles caídos, entre otros, con la capacidad de asignar niveles de urgencia y ubicación geográfica precisa.

---

## 👥 Equipo de Desarrollo

- **Owen Olea**

---

## 🛠️ Stack Tecnológico

- **Lenguajes:** HTML5, CSS3, JavaScript (ES6+)
- **Librerías:** Leaflet.js (mapas), Toastify-js (notificaciones)
- **Almacenamiento:** Geolocalización mediante OpenStreetMap (Nominatim)
- **Entorno:** Visual Studio Code
- **Control de Versiones:** Git / GitHub

---

## 🏗️ Arquitectura del Sistema

Este proyecto sigue una arquitectura **frontend-first**:

- **Capa de Presentación:** HTML5 semántico, CSS3 con diseño responsivo y gradientes, JavaScript para interactividad
- **Capa de Mapas:** Leaflet.js integrado para captura de ubicaciones geográficas
- **Capa de Validación:** Validación en cliente con feedback visual mediante Toastify
- **Persistencia:** Envío de datos a backend PHP (guardar.php)

---

## 📁 Estructura del Repositorio

```
OTR-SMART-DATA-ENTRY/
├── index.html          # Página principal del formulario de reclamos
├── script.js           # Lógica JavaScript (mapas, validación, imagenes)
├── style.css           # Estilos CSS (diseño responsivo, temas oscuros)
├── LICENSE             # Licencia MIT
├── README.md           # Este archivo
└── .gitignore          # Archivos excluidos del control de versiones
```

---

## 🚀 Instalación y Ejecución

### Clonar el repositorio:
```bash
git clone https://github.com/usuario/OTR-SMART-DATA-ENTRY.git
cd OTR-SMART-DATA-ENTRY
```

### Abrir en el navegador:
1. Navegar a la carpeta del proyecto
2. Abrir `index.html` en cualquier navegador web moderno (Chrome, Firefox, Safari, Edge)
3. No requiere instalación de dependencias adicionales

### Funcionalidades:
- ✅ Selecciona una ubicación en el mapa haciendo clic
- ✅ Carga automática de dirección mediante geolocalización inversa
- ✅ Selección de tipo de reclamo (Poste, Foco, Basura, Pozo, Árbol)
- ✅ Nivel de urgencia (Urgente / No urgente)
- ✅ Carga de imagen del problema
- ✅ Validación completa de formulario
- ✅ Notificaciones de error en tiempo real

---

## 📝 Características Principales

| Característica | Descripción |
|---|---|
| 🗺️ **Mapa Interactivo** | Integración de Leaflet.js para seleccionar ubicaciones |
| 📷 **Gestión de Imágenes** | Preview de imagen y opción de eliminar |
| 📍 **Geolocalización** | Obtención automática de dirección desde coordenadas |
| ⚠️ **Validación** | Validación de todos los campos requeridos |
| 🎨 **Diseño Responsivo** | Interfaz adaptable a dispositivos móviles |
| 🔔 **Notificaciones** | Feedback visual con Toastify-js |

---

## 📄 Licencia

Este proyecto se distribuye bajo la **Licencia MIT**.

### MIT License

**Copyright (c) 2026 Owen Olea**

Proyecto desarrollado en el marco de las materias:
- Proyecto de Implementación de Sitios Web Dinámicos (PWD)
- Escuela de Educación Técnica N°1 "Eduardo Ader" - Vicente López

Por la presente se concede permiso, sin cargo, a cualquier persona que obtenga una copia de este software y archivos de documentación asociados (el "Software"), para utilizar el Software sin restricciones, incluyendo, sin limitación, los derechos a usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender copias del Software, y a permitir a las personas a quienes se les proporcione el Software hacerlo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas las copias o partes sustanciales del Software.

**EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA**, incluyendo pero no limitado a garantías de comercialización, aptitud para un propósito particular y no infracción. En ningún caso los autores o titulares del copyright serán responsables por ninguna reclamación, daño u otra responsabilidad, ya sea en una acción contractual, agravio o de otro modo, derivada de, fuera de o en conexión con el software o el uso u otros tratos en el software.

---

## 🔗 Enlaces Útiles

- [GitHub Repository](https://github.com/owenolea/ACTIVIDAD-5-SMART-DATA-ENTRY-3.0)
- [OpenStreetMap](https://www.openstreetmap.org/)
- [Leaflet.js Documentation](https://leafletjs.com/)
- [Toastify-js Documentation](https://apvarun.github.io/toastify-js/)
