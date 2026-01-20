# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Contact Manager — Run Instructions

## Overview
Minimal instructions to install, run, and build the Contact Manager project.

## Prerequisites
- Node.js (16+ recommended)
- npm or yarn
- MongoDB (local or Atlas) if the project uses a MongoDB database

## Install
From the project root:
```
npm install
```
If the repository has separate frontend/backend folders (e.g. `client`/`server` or `frontend`/`backend`), also run:
```
cd server && npm install
cd ../client && npm install
```

## Environment
Create `.env` files as needed. Common variables:
- MONGO_URI=your-mongodb-connection-string
- PORT=5000
- JWT_SECRET=your_jwt_secret
- REACT_APP_API_URL=http://localhost:5000 (for frontend)

Place server `.env` in the backend folder and client `.env` (prefixed with REACT_APP_) in the frontend folder.

## Development (run locally)
If the project is single-repo:
```
npm run dev
```
If there are separate services:
```
# Terminal 1: start backend
cd server
npm run dev

# Terminal 2: start frontend
cd client
npm start
```

Common dev scripts:
- `npm run dev` — start backend with nodemon
- `npm start` — start production server
- `npm run build` — build frontend for production

## Production / Build
For frontend:
```
cd client
npm run build
```
Then serve the build folder from your server or a static host. For server, ensure environment vars are set and run:
```
npm start
```

## Tests & Lint
If available:
```
npm test
npm run lint
```

## Troubleshooting
- Mongo connection error: verify MONGO_URI and network/Atlas IP whitelist.
- Port in use: change PORT env var.
- CORS errors: ensure backend allows frontend origin or use proxy in frontend package.json.

## Where to look next
- package.json scripts (root / client / server) for exact commands
- Any README files inside `client` or `server` folders for specific frontend/backend details

If you want, I can tailor this README to the exact folder names and scripts in your repository—provide the project structure or `package.json` files.
