# Milo

A fast, friendly AI chat assistant built with React, Vite, and Tailwind CSS, powered by the Cohere API.

## Features

- 💬 Real-time chat interface with a clean welcome screen and suggested prompts
- 📱 Responsive layout that works on desktop and mobile
- 🎨 Custom visual identity (pine green + gold palette, Fraunces/Inter type pairing)
- 🛠️ Small, single-file component — easy to read and extend

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- A free Cohere API key from [dashboard.cohere.com/api-keys](https://dashboard.cohere.com/api-keys)

### Installation

```bash
npm install
```

### Configuration

Open the `.env` file in the project root and replace the placeholder with your own key:

```
VITE_Api_Key=your_actual_cohere_api_key_here
```

### Running the App

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Building for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
milo-chat/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── .env
├── index.html
├── package.json
└── README.md
```

## Customizing

- **Persona / name**: edit the `preamble` string in `src/App.jsx` (inside the `cohere.chat` call).
- **Colors**: the palette lives inline as Tailwind arbitrary values (`#20463A` pine, `#E8A73D` gold) in `src/App.jsx` — swap these hex values to restyle.
- **Fonts**: loaded via Google Fonts in `index.html` (Fraunces + Inter) and mapped in `src/App.css`.
- **Suggested prompts**: edit the `SUGGESTIONS` array at the top of `src/App.jsx`.

**Happy chatting! 🚀**
