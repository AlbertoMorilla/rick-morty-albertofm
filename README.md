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

