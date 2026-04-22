# 🚀 Task Manager App

A full-stack Task Manager application built using the MERN stack with secure authentication, role-based access control, and CRUD operations.

---

## 📌 Project Overview

This project is a backend-focused application with a supporting frontend UI. It allows users to register, log in, and manage tasks securely using JWT-based authentication.

---

## ✨ Features

### 🔐 Authentication & Authorization
- User Registration & Login
- Password hashing using bcrypt
- JWT-based authentication
- Role-based access (User / Admin)

### 📦 Task Management (CRUD)
- Create new tasks
- View all tasks
- Update existing tasks
- Delete tasks
- User-specific task access

### 🛡️ Security
- Protected routes using JWT
- Authorization via Bearer Token
- Input validation (basic)
- Secure password storage

### ⚙️ Backend Features
- RESTful API design
- API versioning (`/api/v1`)
- Error handling middleware
- Modular project structure

### 💻 Frontend Features
- User login & registration UI
- Protected dashboard
- Task CRUD interface
- API integration with backend

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (Authentication)
- bcrypt (Password hashing)

### Frontend
- React.js
- Tailwind CSS
- Axios


---

## ⚙️ Setup Instructions

### 1. Clone Repository
git clone https://github.com/Himanshusingh2301/task-manager.git  
cd task-manager  

### 2. Backend Setup
cd backend  
npm install  
npm run dev  

### 3. Frontend Setup
cd frontend  
npm install  
npm run dev or npm start  

---

## 🔗 API Endpoints

### Auth Routes
POST   /api/v1/auth/register  
POST   /api/v1/auth/login  

### Task Routes (Protected)
GET    /api/v1/tasks  
POST   /api/v1/tasks  
PUT    /api/v1/tasks/:id  
DELETE /api/v1/tasks/:id  

---

## 🔑 Authentication

All protected routes require a Bearer Token:

Authorization: Bearer <your_token>

---

## 📄 API Documentation

Postman collection included in the project:  
postman_collection.json  

Import it into Postman to test APIs.

---

## 📈 Scalability Note

This project can be scaled further by:
- Splitting into microservices (auth, tasks)
- Using Redis for caching
- Adding load balancing
- Containerizing using Docker
- Deploying on cloud platforms like AWS, Render, or Vercel

---

## 🚀 Future Improvements

- Task completion status
- Search and filtering
- Pagination
- Admin dashboard

---

## 👨‍💻 Author

Himanshu Singh

---

## 📌 Conclusion

This project demonstrates strong backend API design, secure authentication, full-stack integration, and scalable architecture practices.