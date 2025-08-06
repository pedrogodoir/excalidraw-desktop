# Excalidraw Desktop

**Excalidraw Desktop** is a desktop application built using [Tauri](https://v2.tauri.app/) to run a web-based app as a native desktop application. It uses [Vite](https://vite.dev/) with [React](https://react.dev/) for the frontend, and integrates the [Excalidraw API](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/api) to render the Excalidraw GUI.


## 💻 Installation

### Clone the repository

```bash
git clone https://github.com/your-username/excalidraw-desktop.git
cd excalidraw-desktop
```

### Install dependencies 
```bash
npm install
```

Your environment is now ready for development and customization.

## 🖋️ Usage

### Run application
```bash
npm run tauri dev
```

### Build application
```bash
npm run tauri build
```

The executable file will be generated in: **src-tauri/target/release/**
