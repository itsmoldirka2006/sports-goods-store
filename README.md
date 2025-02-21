**Sports Goods Store API**  

**Project Overview**  
The **Sports Goods Store** is a backend API that enables users to browse, purchase, and track sportswear products. Customers can place orders, while the system securely manages authentication, products, and transactions.  

**Features**  
- **User authentication** with JWT (Customers & Admins)  
- **Retrieve product listings** from MongoDB  
- **Customers can place and track orders**  
- **Secure API with authentication & authorization**  

**Technologies Used**  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **Authentication:** bcrypt, JWT  

---

**API Endpoints**  

**Authentication**  
- `POST /api/users/register` - Register a new user  
- `POST /api/users/login` - Login and receive a JWT  

**Products**  
- `GET /api/products` - List all available products  

**Orders**  
- `GET /api/orders` - Retrieve all orders  
- `POST /api/orders` - Create a new order  

---

**Installation and Setup**  

### **Clone the repository:**  
```sh
git clone https://github.com/itsmoldirka2006/sports-goods-store.git
```

**Install dependencies:**  
```sh
cd sports-goods-store
npm install
```

**Set up environment variables (`.env`):**  
```
MONGO_URI=mongodb+srv://Moldir:iqnpZJpWSgZXYIIv@cluster0.fn2ca.mongodb.net/Final?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=8ca0fb066687a7f9237ac6bf5409bcf8
PORT=3000
```

**Start the server:**  
```sh
npm start
```

**Usage**  
- Use **Postman** or an API client to test endpoints.  
- Customers can **view products and place orders**.  
- Admins (future update) can **add/remove products**.  

**License**  
This project is **open-source** and available under the **MIT License**.  