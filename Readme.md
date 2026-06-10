# 🛡️ NetraSecure AI Platform

**AI-Powered Cybersecurity for the Modern Digital World**

NetraSecure AI is a futuristic, responsive cybersecurity SaaS landing page and toolkit. It provides intelligent threat detection, real‑time URL scanning, an AI‑powered chatbot, and enterprise‑grade security insights — all wrapped in a premium dark‑theme UI.

![Hero Preview](https://via.placeholder.com/1200x600?text=NetraSecure+AI+Preview)
*(Replace with actual screenshot later)*

---

## ✨ Features

- **Hero Section** – full‑screen, animated cyber grid, holographic shield illustration.
- **AI Chatbot** – floating widget with conversation history, quick suggestions, typing indicators.
- **URL Scanner** – instant safety & risk analysis (safe/suspicious/dangerous, low/medium/high risk).
- **Contact Form** – secure, client‑side validation + Express backend.
- **Responsive** – fully mobile‑first, works on phones, tablets, and desktops.
- **Dark Cyber Theme** – neon blue/orange accents, glassmorphism, glowing effects.
- **Express Backend** – REST APIs for scanning, chatbot responses, and contact storage.
- **No Framer Motion** – pure CSS animations for lightweight performance.

---

## 🧰 Tech Stack

### Frontend
- React 18 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- Lucide React Icons
- React Hook Form (contact form)
- Axios

### Backend
- Node.js + Express
- CORS, body‑parser
- In‑memory storage (demo ready)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Code-By-Amit/NetraSecure-AI-Platform.git
   cd NetraSecure-AI-Platform
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Running the Project

#### Start Backend Server (Port 5000)
```bash
cd ../server
npm run dev
```

#### Start Frontend Development Server (Port 3000)
```bash
cd ../client
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/chat` | Send message to AI chatbot |
| POST | `/api/scan-url` | Scan a URL for threats |
| POST | `/api/contact` | Submit contact form |

> All API responses are currently dummy/static and intended for demonstration purposes.
