# SECURE WEALTH: Plan Maestro del Proyecto

## 1. Visión del Producto (Kraken Digital Labs)
El objetivo de SECURE WEALTH es estructurar y digitalizar la evolución de la plataforma de Tommy L. Ruff, llevando su modelo de "Privatized Family Banking" al siguiente nivel. Transformaremos su actual embudo de captación de leads en un **ecosistema SaaS WealthTech completo**. 

El diseño priorizará:
- **Rendimiento extremo** (milisegundos de tiempo de carga).
- **Seguridad de grado financiero** para los datos de los usuarios.
- **Experiencia de usuario premium** (Efecto WOW, micro-animaciones, estética limpia y moderna).

---

## 2. Modelo de Negocio (El Embudo)
- **Top of Funnel (Adquisición):** Lead magnet (eBook) y VSL (Video Sales Letter). Intercambio de correos por educación financiera.
- **Middle of Funnel (Conversión):** Formularios interactivos ("8 preguntas clave") para calificar clientes en tiempo real.
- **Client Portal (Retención):** Área privada donde los clientes visualizan su protección patrimonial, rendimiento de sus pólizas y proyecciones.
- **Monetización:** SaaS motor de cierre y retención para venta de productos financieros (seguros de vida, anualidades).

---

## 3. Arquitectura Técnica
- **Framework Full-Stack:** Next.js (App Router, Server Actions, API Routes).
- **Estilos y UI:** Tailwind CSS, tipografías modernas (ej. Inter / Outfit), soporte de Modo Oscuro.
- **Backend Serverless (Firebase):**
  - **Firebase Auth:** Gestión de sesión.
  - **Firestore:** Base de datos NoSQL para perfiles de clientes y respuestas al embudo.
  - **Cloud Storage:** Bóveda para eBooks y reportes financieros.
- **Despliegue:** Vercel (Edge Network).

---

## 4. Plan de Desarrollo por Fases

### Fase 1: Setup e Inicialización (Completado ✅)
- [x] Creación del directorio raíz del proyecto local.
- [x] Inicialización de Git.
- [x] Instalación de Next.js, Tailwind CSS y TypeScript.
- [x] Instalación de dependencias de Firebase (Client y Admin SDK).
- [x] Configuración inicial de carpetas base (`/docs`, `/src/lib`).

### Fase 2: Infraestructura Backend (Firebase) (En progreso ⏳)
- [ ] Creación de Proyecto en Firebase Console.
- [ ] Habilitar Authentication (Email/Password & Google).
- [ ] Habilitar Firestore y configurar Reglas de Seguridad (Privacidad por usuario).
- [ ] Habilitar Cloud Storage (Bóveda de Documentos).
- [ ] Configurar variables de entorno `.env.local` en el proyecto Next.js.
- [ ] Inicializar instancias de Firebase Auth y DB en el código base.

### Fase 3: Frontend Público (Top & Middle Funnel)
- [ ] Implementar el "Sistema de Diseño Premium" (Kraken Digital Labs).
- [ ] Construir la Landing Page principal (SSG para máximo SEO y rendimiento).
- [ ] Desarrollar la sección VSL (Video de Ventas).
- [ ] Crear el componente Lead Magnet interactivo (Descarga del eBook).
- [ ] Desarrollar el flujo del cuestionario interactivo ("8 Preguntas Clave").

### Fase 4: Portal Privado (Client Dashboard)
- [ ] Desarrollar Middleware de Next.js para proteger las rutas privadas (`/dashboard`).
- [ ] Construir el Sistema de Login / Registro.
- [ ] Desarrollar el Dashboard principal (CSR / Server Components).
- [ ] Implementar la visualización del Rendimiento de Pólizas (Gráficos interactivos).
- [ ] Desarrollar la "Bóveda de Documentos" (Subida y visualización segura de PDF/Archivos).

### Fase 5: Pruebas, Optimización y Lanzamiento
- [ ] Auditoría de Rendimiento (Lighthouse) para alcanzar >95 en Performance, Accessibility y SEO.
- [ ] Auditoría de Seguridad de Reglas de Firebase (Firestore & Storage).
- [ ] Pruebas E2E (Simulación de usuario completo).
- [ ] Despliegue en Producción mediante Vercel.
- [ ] Conexión de dominio personalizado y SSL.
