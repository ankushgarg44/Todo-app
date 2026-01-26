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
- MongoDB connection string (Atlas).

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

## Deployment (Vercel)

This project is configured to be deployed as two separate projects on Vercel: one for the Backend (Serverless) and one for the Frontend.

### 1. Backend Deployment
1.  Push your code to GitHub.
2.  Import the repository into Vercel.
3.  **Root Directory**: Set this to \`backend\`.
4.  **Environment Variables**:
    - \`MONGODB_URI\`: Your MongoDB connection string.
    - \`JWT_SECRET\`: A random string for security.
    - \`FRONTEND_URL\`: Initially set to \`*\` or your planned frontend URL.
5.  Deploy. Copy the assigned domain (e.g., \`https://your-api.vercel.app\`).

### 2. Frontend Deployment
1.  Import the **same** repository again into Vercel.
2.  **Root Directory**: Set this to \`frontend\`.
3.  **Environment Variables**:
    - \`VITE_BACKEND_URL\`: Paste your **Backend** URL from the previous step (e.g., \`https://your-api.vercel.app\`).
4.  Deploy. Copy the assigned domain (e.g., \`https://your-frontend.vercel.app\`).

### 3. Final Configuration
Go back to your **Backend** project URL settings on Vercel:
1.  Edit the \`FRONTEND_URL\` environment variable.
2.  Set it to your actual **Frontend** URL (e.g., \`https://your-frontend.vercel.app\`).
3.  **Redeploy** the backend for changes to take effect.
