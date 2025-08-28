🛒 E-Commerce Backend (MERN)

A robust and scalable E-Commerce Backend API built with Node.js, Express.js, and MongoDB.
This backend powers the core functionality of an e-commerce application, including user authentication, product management, cart, and order handling.

🚀 Features

User Authentication & Authorization

Register, login, and JWT-based authentication

Role-based access control (Admin/User)

Product Management

Add, update, delete, and fetch products

Product categories & search functionality

Cart & Orders

Add/remove items in cart

Place orders and track order history

Security

Password hashing with bcrypt

Middleware for auth & error handling

Scalable Codebase

Clean project structure with controllers, models, routes, and utils

🛠 Tech Stack

Backend Framework: Node.js, Express.js

Database: MongoDB (Mongoose ODM)

Authentication: JWT, bcrypt

Environment Management: dotenv

Validation & Middleware: Custom middlewares

📂 Project Structure
ecommerce-backend/
│-- config/          # DB connection & environment setup
│-- controllers/     # Business logic for routes
│-- middleware/      # Auth & error handling
│-- models/          # Mongoose schemas
│-- routes/          # API routes
│-- utils/           # Helper functions
│-- app.js           # Express app setup
│-- server.js        # Entry point
│-- package.json     # Dependencies

⚡ Getting Started
1️⃣ Clone the repo
git clone https://github.com/Nitinpratap22061/ecommerce-backend.git
cd ecommerce-backend

2️⃣ Install dependencies
npm install

3️⃣ Setup environment variables

Create a .env file in the root directory and add:

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key

4️⃣ Run the server
npm start


Server will start on:
👉 http://localhost:5000

📡 API Endpoints
🔑 Auth

POST /api/auth/register → Register new user

POST /api/auth/login → Login user

🛍 Products

GET /api/products → Get all products

POST /api/products → Add product (Admin only)

PUT /api/products/:id → Update product

DELETE /api/products/:id → Delete product

🛒 Cart & Orders

POST /api/cart → Add to cart

GET /api/cart → Get user’s cart

POST /api/orders → Place an order

GET /api/orders → Get user’s orders

📖 Skills Practiced

Backend development with Node.js & Express.js

REST API design

MongoDB with Mongoose models

Authentication & Authorization (JWT, bcrypt)

Middleware & error handling

Clean code structuring for scalability

🤝 Contributing

Contributions are welcome!

Fork the repo

Create a new branch (feature-xyz)

Commit your changes

Open a Pull Request

📜 License

This project is licensed under the MIT License.
