# Secure File Sharing API

## Project Overview

This project is a Secure File Sharing Backend API built using Node.js, Express.js, MongoDB Atlas, and JWT Authentication.

The application supports secure user authentication and file metadata management with role-based authorization.

---
# Note

This project is deployed on Render free tier hosting.

If the server does not respond immediately or shows an error on the first request, please wait for 30–60 seconds and try again.

The free Render server automatically goes to sleep after inactivity and may take some time to wake up again.

# Features

- User Registration & Login
- JWT Authentication
- Password Encryption using bcryptjs
- Protected Routes
- File Metadata CRUD Operations
- Search by File Name
- Pagination Support
- Role-Based Authorization (Admin/User)
- Validation Middleware
- Global Error Handling
- MongoDB Atlas Integration
- Render Deployment

---

# Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs
- express-validator
- dotenv
- Morgan

---

# Project Structure

```txt
src/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── validators/
├── server.js
├── package.json
├── .env.example
└── README.md

Installation Steps
1. Clone Repository
git clone https://github.com/saicharan4316/farmreach_assessment.git

2. Navigate to Project Directory
cd farmreach_assessment/src

3. Install Dependencies
npm install

4. Create Environment Variables
Create a .env file inside the src folder and add:
PORT=5000
MONGO_URI=mongodb://utukurisaicharan123_db_user:saivarsha@ac-gy8ol9g-shard-00-00.uileskb.mongodb.net:27017,ac-gy8ol9g-shard-00-01.uileskb.mongodb.net:27017,ac-gy8ol9g-shard-00-02.uileskb.mongodb.net:27017/?ssl=true&replicaSet=atlas-134cho-shard-0&authSource=admin&appName=Cluster1
JWT_SECRET=your_super_secret_key
NODE_ENV=development

Run Commands
Development Mode
npm run dev
npm start

API Base URL
https://farmreach-assessment.onrender.com

API Endpoints
Register User
POST /api/auth/register
Request Body
{
  "name": "Sai Charan",
  "email": "sai@gmail.com",
  "password": "123456",
  "role": "admin"
}
Login User
POST /api/auth/login
{
  "email": "sai@gmail.com",
  "password": "123456"
}
File APIs
Authorization: Bearer YOUR_JWT_TOKEN
Create Single File
POST /api/files
{
  "fileName": "resume.pdf",
  "fileType": "pdf",
  "fileSize": 520,
  "fileUrl": "https://example.com/resume.pdf",
  "isPublic": true
}
Create Multiple Files
Request Body
[
  {
    "fileName": "resume.pdf",
    "fileType": "pdf",
    "fileSize": 520,
    "fileUrl": "https://example.com/resume.pdf",
    "isPublic": true
  },
  {
    "fileName": "portfolio.zip",
    "fileType": "zip",
    "fileSize": 2048,
    "fileUrl": "https://example.com/portfolio.zip",
    "isPublic": false
  }
]
Get All Files
GET /api/files
Get File By ID
GET /api/files/:id
Update File
PUT /api/files/:id
Request Body
{
  "fileName": "updated-resume.pdf",
  "fileType": "pdf",
  "fileSize": 700,
  "fileUrl": "https://example.com/updated.pdf",
  "isPublic": false
}
Delete File
DELETE /api/files/:id

Search & Pagination
GET /api/files?search=resume

Pagination
GET /api/files?page=1&limit=5

# Authorization Rules
Users can only update/delete their own files.
Admin users can view all files.
Protected routes require JWT token.
# Validation Features
Email validation
Password validation
File field validation
Request body validation

Postman Collection
Secure-File-Sharing-API.postman_collection.json

Deployment URL
https://farmreach-assessment.onrender.com
GitHub Repository URL
https://github.com/saicharan4316/farmreach_assessment

Author
Sai Charan
