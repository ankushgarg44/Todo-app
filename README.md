# MERN Todo App

A full-stack Todo application built with MongoDB, Express.js, React, and Node.js.

## Features
- User Authentication (Login/Signup) with JWT.
- Create, Read, Update, and Delete (CRUD) Todos.
- Responsive UI using Tailwind CSS.
- Secured API endpoints.
- Ready for deployment on Vercel.

## Tech Stack
- **Frontend**: React (Vite), Tailwind CSS, React Router, Axios, React Hot Toast.
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), BCrypt, JWT.

## Getting Started

### Prerequisites
- Node.js installed.
- MongoDB connection string (Atlas or local).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd Todo-app
    ```

2.  **Setup Backend:**
    ```bash
    cd backend
    npm install
    ```
    Create a `.env` file in `backend/` with:
    ```env
    PORT=4002
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    FRONTEND_URL=http://localhost:5173
    ```

3.  **Setup Frontend:**
    ```bash
    cd ../frontend
    npm install
    ```
    Create a `.env` file in `frontend/` with:
    ```env
    VITE_BACKEND_URL=http://localhost:4002
    ```

### Running Locally

1.  **Start Backend:**
    ```bash
    cd backend
    npm start
    ```
    Server runs on `http://localhost:4002`

2.  **Start Frontend:**
    ```bash
    cd frontend
    npm run dev
    ```
    App runs on `http://localhost:5173`


