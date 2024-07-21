# User Authentication System

![Frame 5](https://github.com/carpodok/user-auth-system/assets/64840495/f600bfee-a5df-4866-939d-d67886c5922d)

## Overview
<p>This project is an implementation of a user authentication system in Node.js. It provides a robust and secure way to handle user registration, login, and authentication using modern practices and technologies.</p>

## Features
- ***User Registration:*** Allows new users to create an account with their email and password.
- ***User Login:*** Authenticates users with their email and password.
- ***Password Hashing:*** Uses bcrypt to hash passwords for security.
- ***JWT Authentication:*** Issues JSON Web Tokens (JWT) for authenticated sessions.
- ***Middleware Protection:*** Protects routes by verifying JWT tokens.
- ***Cookies Usage:*** Stores JWT in HTTP-only cookies on the client side for secure session management.

## Technologies Used

- ***Node.js:*** Backend runtime environment.
- ***Express.js:*** Web framework for Node.js.
- ***MongoDB:*** NoSQL database for storing user data.
- ***Mongoose:*** ODM for MongoDB.
- ***Bcrypt:*** Library for hashing passwords.
- ***JSON Web Tokens (JWT):*** Standard for creating secure access tokens.
- ***React.js:*** Frontend library for building user interfaces.
- ***js-cookie:*** JavaScript library for handling cookies on the client side.

<br>

## Installation
1. Clone the repository

  ```bash
  git clone https://github.com/carpodok/user-auth-system.git
  ```

2. Navigate to the project directory:

 ```bash
  cd authentication-system
  ```
3. Install dependencies for both server and client:

```
cd server
npm install
cd ../client
npm install
```
<br>

## Configuration

1. Creat a `.env` file in the `server` directory and add the following environment variables

```
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

<br>

## Running the Application

1. Start the server:

```
cd server
npm start
```

2. Start the client:

```
cd client
npm start
```

3. The application will be running on  `http://localhost:3000` for the server and `http://localhost:3001` for the client.`

<br>

## Client Side Details

![login_page](https://github.com/user-attachments/assets/fae5b3bf-18c8-4cbd-b76a-e7d13012cfa0)


![register_page](https://github.com/user-attachments/assets/f6962cb0-f37e-4809-8378-43c6d55018f8)



   The client side of this project is built using React.js to provide a seamless user experience. Here are some key components and their functionalities:

- ***Register:*** A form to register a new user. It collects the user's email and password and sends a POST request to the /api/register endpoint.
- ***Login:*** A form to authenticate an existing user. It collects the user's email and password and sends a POST request to the /api/login endpoint.
- ***ProtectedRoute:*** A component that checks for a valid JWT token before allowing access to protected routes.
- ***Wellcome:*** A sample protected component that is only accessible to authenticated users.

#### Key files and Directories

```java
client/
├── public/
├── src/
│   ├── components/
│   │   ├── Register.js
│   │   ├── Login.js
│   │   ├── ProtectedRoute.js
│   │   ├── Welcome.js
│   ├── services/
│   │   ├── authService.js
│   ├── App.js
│   ├── index.js
├── package.json
```

<br>

## Server Side Details
The server side of this project is built using Node.js and Express.js to handle backend operations. Here are some key components and their functionalities:

- ***authController.js:*** Contains the logic for handling user registration, login, and issuing JWTs.
- ***authMiddleware.js:*** Middleware for protecting routes by verifying JWT tokens.
- ***User.js:*** Mongoose model for storing user data in MongoDB.
- ***authRoutes.js:*** Defines the routes for user registration, login, and protected routes.
- ***db.js:*** Configures the connection to the MongoDB database.


#### Key Files and Directories

```java
server/
├── src/
│   ├── config/
│   │   ├── db.js
│   ├── controllers/
│   │   ├── authController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   ├── server.js
├── .env
├── package.json
```

<br>

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or suggestions.


## License
This project is licensed under the MIT License.
