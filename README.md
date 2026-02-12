# Rick & Morty Dashboard - AlbertoFM

Prueba técnica para el puesto de Frontend Developer. Es una aplicación desarrollada con **Nuxt 3** que consume la API de Rick & Morty, gestiona un estado global de favoritos y simula un flujo de autenticación.

## 🛠 Stack Tecnológico

* **Framework:** Nuxt 3 (Vue 3 Composition API)
* **Estado:** Pinia (Persistencia de datos)
* **Estilos:** Tailwind CSS
* **API:** Rick and Morty API (REST)
* **Tests:** Vitest (Unitarios)

## 🚀 Cómo arrancar el proyecto

Instrucciones para ejecutarlo en local:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/AlbertoMorilla/rick-morty-albertofm.git](https://github.com/AlbertoMorilla/rick-morty-albertofm.git)
    cd rick-morty-albertofm
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar entorno:**
    Renombra el archivo `.env.example` a `.env` (ya incluye la URL pública por defecto):
    ```bash
    cp .env.example .env
    ```

4.  **Ejecutar servidor:**
    ```bash
    npm run dev
    ```
    Abrir en el navegador: `http://localhost:3000`

5.  **Tests (Opcional):**
    Para verificar la lógica del store:
    ```bash
    npm run test
    ```

## 📂 Arquitectura y Decisiones

He estructurado el proyecto buscando escalabilidad y limpieza de código, separando la lógica de la vista:

### 1. Gestión de Estado (Pinia)
Elegí Pinia para manejar dos stores principales:
* **Auth:** Simula el token de sesión en cookies.
* **Favorites:** Guarda el array de personajes favoritos y utiliza un `watch` para sincronizarlos con el `localStorage` del navegador, asegurando que los datos no se pierdan al recargar.

### 2. Lógica de API (Composables)
Extraje la lógica de `fetch` al composable `useCharacters.ts`. De esta forma, los componentes (`index.vue`) solo se encargan de pintar la UI y no de la lógica de datos. Además, implementé un `debounce` natural usando los watchers de Nuxt para el buscador.

### 3. Rutas y Seguridad
Implementé un Middleware (`middleware/auth.ts`) que protege las rutas privadas. Si intentas acceder al Dashboard sin estar logueado, te redirige automáticamente al Login.

### 4. UI/UX
Utilicé Tailwind CSS para maquetar rápido con enfoque *Mobile First*. Añadí un tema oscuro ("Dark Mode") acorde a la estética de la serie y feedback visual (loading states, mensajes de error) para mejorar la experiencia de usuario.