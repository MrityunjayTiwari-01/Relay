# Relay – Real-Time Chat Application

A full-stack real-time one-to-one chat application built with React, Node.js, Express, MongoDB, and Socket.IO. Relay supports real-time messaging, online user presence, media sharing, authentication, and persistent conversations.

## 🚀 Live Demo

👉 [Open Relay](https://relay-dp8c.onrender.com)

---

## ✨ Features

- 🔐 User authentication with Clerk
- 💬 Real-time one-to-one messaging using Socket.IO
- 🟢 Real-time online/offline user presence
- 🗂️ Persistent conversations and message history
- 🖼️ Image sharing
- 🎥 Video sharing
- 🔎 Search users
- 🎨 Light/Dark mode with multiple theme presets
- 📱 Responsive user interface
- ☁️ Image and video storage using ImageKit
- 🐳 Dockerized application
- 🚀 Deployed on Render

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- HeroUI
- Zustand
- Axios
- Socket.IO Client
- Clerk

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- Clerk
- Multer

### Media & Deployment

- ImageKit
- Docker
- Render

---

## 🏗️ Architecture

```text
                    ┌─────────────────────┐
                    │       Clerk         │
                    │ Authentication      │
                    └──────────┬──────────┘
                               │
                               ▼
┌─────────────────┐     ┌─────────────────────┐
│                 │     │                     │
│  React Frontend │────▶│  Express / Node.js  │
│                 │     │                     │
└────────┬────────┘     └──────────┬──────────┘
         │                         │
         │ Socket.IO               │
         │                         │
         ▼                         ▼
┌─────────────────┐     ┌─────────────────────┐
│  Real-Time      │     │      MongoDB        │
│  Communication  │     │ Users & Messages    │
└─────────────────┘     └─────────────────────┘
                               │
                               ▼
                       ┌─────────────────┐
                       │    ImageKit     │
                       │ Image & Video   │
                       └─────────────────┘
