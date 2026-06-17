# Epilogue Web

Frontend project built with React + Vite.

## Run Locally (localhost)

### 1. Prerequisites

Make sure you have:

- Node.js 18+ (recommended: latest LTS)
- npm (comes with Node.js)

Check versions:

```bash
node -v
npm -v
```

### 2. Clone the repository

```bash
git clone <your-repo-url>
cd epilogue-web
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will print a local URL in the terminal, usually:

```text
http://localhost:5173/
```

Open that URL in your browser.

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build production files into `dist/`
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint checks

## Build and Preview Production Locally

```bash
npm run build
npm run preview
```

Preview URL is usually:

```text
http://localhost:4173/
```

## Troubleshooting

- If `npm install` fails, delete `node_modules` and `package-lock.json`, then run `npm install` again.
- If port `5173` is already in use, Vite will automatically choose another free port.
- If the app does not load, check terminal errors first.
