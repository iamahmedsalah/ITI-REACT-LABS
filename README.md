# Workspace Overview

This workspace contains two separate front-end projects. Each project is a Vite + React app with its own package.json and dev server.

## Project 1 — Product-List-UI

- Location: `Product-List-UI/`
- Purpose: A small UI to display a list of products.
- Key files:
  - `src/App.jsx` — app entry component
  - `src/components/ProductCard.jsx` — product card component
  - `src/data/products.js` — sample product data

Run locally:

```bash
cd Product-List-UI
npm install
npm run dev
```

## Project 2 — Task-Manager

- Location: `Task-Manager/`
- Purpose: A task management UI with list and details views.
- Key files and folders:
  - `src/App.jsx` — app entry component
  - `src/components/task/TaskListTable.jsx` — main task list table
  - `src/components/task/TaskDetails.jsx` — task details view
  - `src/layouts/Layout.jsx` — shared layout
  - `src/pages/` — page components (`home.jsx`, `task.jsx`, `profile.jsx`)
  - `Live Demo`: https://iti-task-manager.vercel.app/

Run locally:

```bash
cd Task-Manager
npm install
npm run dev
```

## Notes

- Each project uses Vite as the dev server; the commands above assume `npm` is used. If you prefer `yarn` or `pnpm`, substitute accordingly.
- If you want, I can also add individual `README.md` files inside each project folder with more detailed instructions and screenshots.

---

If you'd like any additions (screenshots, deployment instructions, or detailed file maps), tell me which project to expand first.
