# Plan Maestro: Secure Wealth

Este documento establece la base estratégica, técnica y de diseño para el proyecto **Secure Wealth**, asegurando que sea una plataforma premium, escalable, innovadora y rentable.

## 1. Arquitectura Técnica

Se implementará una arquitectura moderna, segura y orientada al rendimiento (Serverless + Edge):

- **Framework Core**: Next.js 16 (App Router) con React 19 y TypeScript, aprovechando Server Components para SEO y rendimiento.
- **Estilos**: Tailwind CSS v4 para diseño fluido y rápido, complementado con CSS moderno para micro-animaciones (Vanguard UI).
- **Backend & Autenticación**: Firebase Auth para manejo de identidades y Firebase Admin SDK en el servidor. Firestore como base de datos en tiempo real.
- **Hosting & Despliegue**: Vercel (Edge Functions y Serverless) para escalabilidad global instantánea.
- **Estado Global**: React Context (ej. `AuthContext`) minimizando dependencias de terceros para un bundle más ligero.

## 2. Diseño y Estética (Premium UI/UX)

La plataforma debe transmitir **seguridad, riqueza y vanguardia tecnológica** ("Wow factor"):

- **Tema Principal**: *Light Mode Luxury*. Fondos claros (`#f8fafc`, blanco puro) con sombras suaves (neumorfismo ligero) y acentos en **Verde Esmeralda** y **Oro**. Este cambio aporta una sensación de claridad, transparencia corporativa y lujo moderno (estilo Apple/Stripe).
- **Micro-interacciones**: Ya iniciadas con `KineticGrid` y `DirectionHover`. Incorporaremos transiciones suaves, hover states dinámicos y carga progresiva (Skeleton loaders).
- **Tipografía**: Fuentes modernas (ej. Geist, Inter o Outfit) legibles y estructuradas para alta densidad de datos.
- **Dashboards**: Tarjetas de información (Cards) blancas con bordes sutiles, gráficos interactivos con líneas limpias y gran espacio en blanco (whitespace) para evitar saturación visual.

## 3. Ingeniería e Innovación

Para diferenciarnos en el mercado financiero o de gestión de riqueza:

- **AI Insights (Motor de Inteligencia)**: Integración de IA (Gemini/OpenAI) para analizar los gastos/ingresos del usuario y predecir tendencias, dando consejos personalizados de ahorro o inversión.
- **Seguridad Avanzada**: Reglas de seguridad estrictas en Firebase, encriptación de datos sensibles antes de guardarlos en base de datos, y validación exhaustiva de tokens JWT.
- **Rendimiento SEO**: Páginas públicas (Landing, Blog, Features) totalmente optimizadas para motores de búsqueda (SSG/SSR), crucial para captación orgánica.
- **PWA (Progressive Web App)**: Experiencia móvil nativa sin necesidad de descargar desde la App Store en la primera versión.

## 4. Estrategia de Monetización (Monetizador)

El modelo de negocio se diseñará para escalar ingresos sin fricción inicial:

- **Modelo Freemium (SaaS)**:
  - *Tier Gratuito*: Gestión básica, dashboard manual, acceso limitado a insights.
  - *Tier Pro (Suscripción)*: Conexiones automáticas (si aplica), AI Insights predictivos, reportes exportables para impuestos, y personalización avanzada de UI.
- **Pasarela de Pago**: Integración con Stripe (o LemonSqueezy) para cobros recurrentes.
- **Afiliados / Referidos**: Recomendación de productos financieros premium (tarjetas de crédito, brokers) dentro de la app con links de afiliados curados.
- **B2B (Futuro)**: Marca blanca para pequeños asesores financieros que quieran ofrecer el panel a sus clientes.

## 5. Fases de Ejecución: MVP y Futuro

Para lanzar rápido al mercado y empezar a validar la herramienta con clientes de Alto Patrimonio, dividiremos el proyecto en un **MVP (Mínimo Producto Viable)** y fases de **Expansión**.

### 🌟 MVP: Fase 1 (Fundamentos y Estética) - [COMPLETADO]
- [x] Configuración de Next.js, Tailwind CSS y Firebase.
- [x] Autenticación segura y Bypass en Modo Demo (Acceso de prueba).
- [x] **Rediseño Light Mode Luxury**: Dashboard corporativo limpio con acentos esmeralda y ámbar.
- [x] Landing Page base.

### 🌟 MVP: Fase 2 (Infinite Banking Core) - [EN DESARROLLO]
Esta fase contiene lo mínimo indispensable para que la herramienta dé valor real a clientes de Infinite Banking.
- [x] **Policy Tracker (Portfolio)**: Gráficos reales (Recharts) que muestren el crecimiento del *Cash Value* a lo largo del tiempo.
- [ ] **Lending Ledger (Transacciones)**: Sistema CRUD real para agregar ingresos, gastos y préstamos contra la póliza en Firestore.
- [ ] **Conexión a Base de Datos Reales**: Migrar del "Modo Demo" (datos en memoria) a lectura/escritura en Firebase usando un proyecto real (configuración de `.env.local` final).

### 🚀 POST-MVP: Fase 3 (Inteligencia & Bóveda)
Una vez el MVP esté en manos de los primeros usuarios, añadiremos los "Atractivos Premium".
- [ ] **Motor de "AI Insights"**: Integración de IA para analizar flujos de caja e identificar cuellos de botella (Alta liquidez muerta, optimización de impuestos).
- [ ] **Legacy Vault (Bóveda Digital)**: Almacenamiento seguro en la nube para contratos de fideicomisos, pólizas y designación de beneficiarios.
- [ ] **Liquidity Forecaster**: Proyecciones a 10/20/30 años de crecimiento compuesto libre de impuestos.

### 🚀 POST-MVP: Fase 4 (Motor Insurtech y Monetización)
- [ ] **Integración de Ecosistema iPipeline**: Conexión a *LifePipe* para cotizaciones en vivo y *iGO Evolve* para e-Apps (Requiere GAID activo de Tommy).
- [ ] Integración de Stripe (Planes Freemium y Premium).
- [ ] Paywalls para restringir el acceso al Legacy Vault y a los AI Insights.
- [ ] Expansión a PWA (App instalable en iOS y Android).

---

*Plan Maestro aprobado y en curso. Nuestro enfoque actual es el desarrollo y lanzamiento del MVP.*
