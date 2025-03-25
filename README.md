# Spotify-Demo

## Introduction

Spotify-Demo is a React-based Spotify interface simulation application that demonstrates how to use `i18next` for internationalization, multilingual switching, and integration with the Spotify API to fetch music information.

## Features

- **Spotify API Integration**: Retrieve songs, playlists, and other music data.
- **Internationalization Support**: Multi-language switching using `i18next`.
- **Responsive Design**: Supports both desktop and mobile devices.
- **User Authentication** (To be implemented).

## Tech Stack

- **Frontend**: React, Vite, TailwindCSS
- **Internationalization**: i18next, i18next-http-backend
- **Music API**: Spotify Web API

## Installation & Execution

### 1. Install Dependencies

```sh
npm install
```

### 2. Start the Development Server

```sh
npm run dev
```

The application will run at `http://localhost:5173/` (may vary based on `vite.config.js`).

### 3. Deploy to GitHub Pages

This project is deployed as a static website on GitHub Pages. Ensure that the `base` setting in `vite.config.js` is correct:

```js
export default defineConfig({
  base: "/Spotify-Demo/",
});
```

Then run:

```sh
npm run build
```

Next, push the `dist/` folder to the `gh-pages` branch.

## Contribution

All contributions are welcome!

1. Fork this repository
2. Create a new branch (`git checkout -b feature-xxx`)
3. Commit changes (`git commit -m 'Add xxx feature'`)
4. Push the branch (`git push origin feature-xxx`)
5. Open a Pull Request
