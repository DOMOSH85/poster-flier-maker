# 🎨 Poster & Flier Maker

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## 📝 Description

Poster & Flier Maker is a web application that allows users to easily create, customize, and download stunning posters and fliers for any occasion. With a user-friendly interface and a variety of templates, anyone can design professional-quality graphics in minutes.

---

## ✨ Features

- 🖼️ Template Gallery: Browse and select from a variety of professionally designed templates.
- 🛠️ Customization: Edit text, colors, and images to suit your needs.
- 🔒 Authentication: Secure login and registration for users.
- 💾 Save & Download: Save your designs and download them in high quality.
- 💳 Payment Integration: Unlock premium templates and features.
- 📱 Responsive Design: Works seamlessly on desktop and mobile devices.

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, Vite
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT
- **Payment:** (e.g., Stripe or similar)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm, pnpm, or yarn
- MongoDB instance

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/poster-flier-maker.git
   cd poster-flier-maker
   ```
2. **Install dependencies:**
   ```bash
   # For backend
   cd backend
   npm install
   # For frontend
   cd ../
   npm install
   ```
3. **Set up environment variables:**
   - Copy `.env.example` to `.env` in the backend folder and fill in the required values.
4. **Run the application:**
   ```bash
   # Start backend
   cd backend
   npm start
   # Start frontend (in another terminal)
   cd ../
   npm run dev
   ```

---

## 📁 Folder Structure

```
poster-flier-maker/
├── backend/           # Express backend (API, models, controllers)
├── public/            # Static assets
├── src/               # React frontend source code
│   ├── components/    # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components
│   └── lib/           # Utility functions
├── package.json       # Project metadata
└── README.md          # Project documentation
```

---

## 📡 API Endpoints (Backend)

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — User login
- `GET /api/templates` — Get all templates
- `POST /api/templates` — Create a new template (admin)
- `POST /api/payment` — Process payment

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---

## 📄 License

This project is licensed under the MIT License.

---

## 📬 Contact

For support or inquiries:
- Email: [ magdalinemutave001@gmail.com or domosh3@gmail.com ]

## 👩‍💻 Authors

- Magdaline Muthui [Miss-Maggie](https://github.com/Miss-Maggie)
- Dancan Ogolla [DOMOSH85](https://github.com/DOMOSH85)
