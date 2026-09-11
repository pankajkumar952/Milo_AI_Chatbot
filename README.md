# Milo

**Milo** is a fast, friendly AI chat assistant built with **React, Vite, and Tailwind CSS**, powered by the **Cohere API**.

🔗 **Live Demo:** https://milo-ro2pplc2d-pankaj-20b2.vercel.app/

---

## ✨ Features

- 💬 Real-time AI chat interface
- 🚀 Powered by the Cohere API
- 💡 Suggested prompts for quick conversations
- 📱 Responsive design for desktop and mobile
- 🎨 Custom pine green + gold visual identity
- ✨ Fraunces + Inter typography
- ⚡ Built with React and Vite
- 🧩 Simple and easy-to-extend codebase

---

## 🌐 Live Demo

Try Milo online:

**https://milo-ro2pplc2d-pankaj-20b2.vercel.app/**

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **AI API:** Cohere API
- **Icons:** Font Awesome
- **Deployment:** Vercel
- **Language:** JavaScript

---

## 🚀 Getting Started

### Prerequisites

Make sure you have:

- Node.js 18 or later
- npm
- A Cohere API key

---

## 📦 Installation

Clone the repository and install the dependencies:

```bash
npm install
```

---

## 🔑 Environment Configuration

Create a `.env` file in the project root:

```env
VITE_Api_Key=your_actual_cohere_api_key_here
```

Replace `your_actual_cohere_api_key_here` with your Cohere API key.

> **Important:** Never commit your real API key to GitHub. Add `.env` to `.gitignore`.

Example `.gitignore`:

```gitignore
node_modules
dist
.env
.env.local
```

For the deployed Vercel application, configure the same environment variable in **Vercel Project Settings → Environment Variables** and enable it for the required deployment environments.

---

## ▶️ Run Locally

Start the development server:

```bash
npm run dev
```

Milo will be available at:

```text
http://localhost:5173
```

---

## 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```text
milo-chat/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── index.html
├── package.json
└── README.md
```

---

## 🎨 Customization

### AI Persona

The Milo assistant's personality and system instructions can be customized in:

```text
src/App.jsx
```

### Colors

The main visual palette uses:

```text
Pine Green: #20463A
Gold:       #E8A73D
```

These colors can be changed directly in the component styling.

### Fonts

Milo uses:

- **Fraunces** for headings
- **Inter** for interface text

Fonts are loaded through `index.html` and configured in `App.css`.

### Suggested Prompts

The suggested questions can be changed by editing the `SUGGESTIONS` array in:

```text
src/App.jsx
```

---

## 🔐 Security Note

The Cohere API key is required for AI responses.

For production applications, it is recommended to keep API keys on a **server-side backend or serverless function** rather than exposing them directly in a browser-based Vite application.

---

## 🚀 Deployment

Milo is deployed using **Vercel**.

### Live Application

🔗 https://milo-ro2pplc2d-pankaj-20b2.vercel.app/

---

## 👨‍💻 Author

**Er. Pankaj Kumar**

Built with React, Vite, Tailwind CSS, and Cohere API.

---

## ⭐ Project

If you find Milo useful, consider giving the repository a ⭐ on GitHub.

**Milo — Your quick-thinking AI assistant.**
