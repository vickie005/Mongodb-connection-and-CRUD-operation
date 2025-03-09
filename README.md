# MongoDB Connection and CRUD Operations API

This is a simple RESTful API built with **Node.js**, **Express.js**, and **MongoDB** that performs basic **Create, Read, Update, and Delete (CRUD)** operations on a `users` collection.

---

## 🚀 Features

- 🔗 Connects to MongoDB using the native MongoDB driver
- ➕ Add a new user
- 📥 Fetch all users
- 🔍 Fetch a user by ID
- ✏️ Update a user by ID
- ❌ Delete a user by ID
- 🌐 CORS enabled for frontend integration

---

## 📁 Project Structure

```
project-root/
├── index.js              # Main server file
├── .env                  # Environment variables
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

---

## 📦 Technologies Used

- Node.js
- Express.js
- MongoDB (Native Driver)
- dotenv
- CORS

---

## ⚙️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/vickie005/Mongodb-connection-and-CRUD-operation.git
```

2. **Navigate to the project directory**
```bash
cd Mongodb-connection-and-CRUD-operation
```

3. **Install dependencies**
```bash
npm install
```

4. **Create a `.env` file** in the root directory and add your MongoDB connection URI:
```
MONGO_URI=mongodb://127.0.0.1:27017
PORT=5000
```

---

## ▶️ Running the App

```bash
node index.js
```

The server will start on:
```
http://localhost:5000
```

---

## 📬 API Endpoints

| Method | Endpoint        | Description               |
|--------|------------------|---------------------------|
| GET    | `/`              | Welcome message           |
| POST   | `/users`         | Add a new user            |
| GET    | `/users`         | Fetch all users           |
| GET    | `/users/:id`     | Fetch a user by ID        |
| PUT    | `/users/:id`     | Update a user by ID       |
| DELETE | `/users/:id`     | Delete a user by ID       |

---

## 📌 Example Request Body (POST/PUT)

```json
{
  "name": "Victory Mwendwa",
  "email": "victorymwendwa@gmail.com",
  "age": 20
}
```

---

## 💡 Sample Response (GET /users)

```json
[
  {
    "_id": "65fcad154a947fd68b192b2d",
    "name": "Imani Baraka",
    "email": "ibaraka@gmail.com.com",
    "age": 25
  }
]
```

---

## 🙌 Contribution

Feel free to fork this repo, submit issues, or make pull requests to improve the project further.

---

## 📃 License

This project is licensed under the **MIT License** — you can freely use and modify it.

---

## ✨ Author

Built with ❤️ by **Victory**  
GitHub: [@vickie005](https://github.com/vickie005)
