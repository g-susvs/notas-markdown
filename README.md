# Notas Markdown

Notas-Markdown es una aplicación diseñada para la toma de apuntes con formato Markdown, tomando inspiración de la versatilidad de Notion. Para asegurar un rendimiento óptimo, la aplicación cuenta con un backend que recibe y almacena la información en una base de datos centralizada.

Características Principales:

- Autenticación.
- Editor de Texto en Markdown y Vista Previa.
- Almacenamiento de datos en cache que mejora la velocidad de acceso a las notas creadas.

## Dependencias principales

- [React Router](https://reactrouter.com/en/main)
- [React Query](https://tanstack.com/query/v3/docs/react/installation)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [Material UI](https://mui.com/material-ui/getting-started/installation/)
- [React Hook Form](https://react-hook-form.com/get-started)

## Configuraciones:

Ejecuta el siguiente comando para instalar los paquetes necesarios:

```sh
npm install
```

En la raíz del proyecto, crea un archivo llamado `.env` y agrega la siguiente variable de entorno:

```
VITE_API_URL=examplehost/api
```

Asegúrate de completar la URL del repositorio del servidor en el siguiente enlace: [Repositorio del servidor](https://github.com/g-susvs/chatbot-flask).

Inicia el proyecto con el siguiente comando:

```
npm run dev
```
