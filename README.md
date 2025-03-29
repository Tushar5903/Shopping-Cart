
https://shopping-cart-phi-mocha.vercel.app/

# 🛒 Shopping Cart Application

Welcome to the **Shopping Cart Application**! This project is a full-fledged e-commerce platform designed to provide users with a seamless and intuitive online shopping experience. It includes essential features such as product browsing, shopping cart management, secure checkout, and user authentication, all built with modern web technologies.

## 🌟 Features

### 🔐 User Authentication
- Secure user registration and login system using **JWT (JSON Web Tokens)** for authentication.
- Password hashing for enhanced security.
- Persistent user sessions.

### 🛍️ Product Management
- Dynamic product catalog with detailed descriptions, images, and prices.
- Product filtering and sorting for better user experience.
- Admin functionality for adding, editing, and deleting products.

### 🛒 Shopping Cart
- Add, remove, and update products in real-time.
- Quantity management for items in the cart.
- Automatic price calculations.

### 📦 Order Management
- Track placed orders and view order history.
- Admin panel to manage orders and update order statuses.

### 🔎 Search & Filtering
- Integrated search functionality for quick product discovery.
- Advanced filters to refine search results.

### 💬 Product Reviews & Wishlist
- Users can submit reviews and ratings for products.
- Wishlist functionality to save favorite products for later.

### 🔒 Secure Checkout
- Integrated payment gateway for safe transactions.
- Order confirmation and invoice generation.

### 📱 Responsive Design
- Optimized for desktops, tablets, and mobile devices.
- Consistent user experience across all platforms.

## 🛠️ Technologies Used

### 🌐 Frontend
- **React.js** – A powerful JavaScript library for building user interfaces.
- **Redux** – State management for maintaining application state.
- **Tailwind CSS** – A utility-first CSS framework for efficient styling.

### 🖥️ Backend
- **Node.js** – JavaScript runtime for handling server-side logic.
- **Express.js** – Lightweight web framework for creating APIs.
- **MongoDB** – NoSQL database for storing user and product data.

### 🔐 Authentication & Security
- **JWT (JSON Web Tokens)** – Secure token-based authentication.
- **BCrypt.js** – Password encryption for secure storage.

### 🚀 Deployment
- **Vercel** – Cloud platform for frontend deployment.
- **MongoDB Atlas** – Cloud-hosted NoSQL database for backend.

## 🚀 Getting Started

### 📌 Prerequisites
Ensure you have the following installed on your system:
- **[Node.js](https://nodejs.org/)** – JavaScript runtime.
- **[MongoDB](https://www.mongodb.com/cloud/atlas)** – Database (local or cloud-based).
- **Git** – Version control system.

### 📥 Installation Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/shopping-cart-application.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd shopping-cart-application
   ```
3. **Install Backend Dependencies:**
   ```bash
   npm install
   ```
4. **Navigate to the Frontend Directory:**
   ```bash
   cd client
   ```
5. **Install Frontend Dependencies:**
   ```bash
   npm install
   ```
6. **Set Up Environment Variables:**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     PORT=5000
     ```
7. **Start the Development Servers:**
   - **Backend:**
     ```bash
     npm run server
     ```
   - **Frontend:**
     ```bash
     npm start
     ```
   The frontend application will be accessible at `http://localhost:3000`.

## 🧪 Running Tests
To verify the application's functionality, execute the test suite:
```bash
npm test
```

## 🌍 Deployment
Deploy the application to **Vercel** using the following steps:

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```
2. **Login to Vercel:**
   ```bash
   vercel login
   ```
3. **Deploy the Application:**
   ```bash
   vercel
   ```
   Follow the prompts and ensure all necessary environment variables are configured in the Vercel dashboard.

## 🤝 Contributing
We welcome contributions from the community! To contribute:

1. **Fork the Repository.**
2. **Create a New Branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make Your Changes and Commit Them:**
   ```bash
   git commit -m 'Add new feature'
   ```
4. **Push to the Branch:**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Submit a Pull Request.**

## 🛡️ License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

## 🎉 Acknowledgments
- **Open Source Libraries** – A big thanks to the developers of **React.js, Node.js, Express.js, MongoDB**, and other technologies used in this project.
- **Community Support** – Gratitude to contributors and users for their feedback and improvements.
