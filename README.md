 # How to Download and Run the Project Locally
 
1.Clone the repository :
   git clone https://github.com/your-username/node_authentication.git

2.Navigate to the project directory : 
   cd node_authentication

3.Install dependencies : 
  npm install

4.Set up a .env file for environment variables (e.g., MongoDB connection string, session secret) : 
  .env

5.Run the application :
   npm start

6.Open your browser and go to:
http://localhost:3006

 # .gitignore File
Make sure the following items are ignored in your repository by including them in your .gitignore file:

node_modules/

.env

# Project Description (LogIn/SignUp Admin Panel)
This admin panel provides a user-friendly interface for users to register, log in, and manage their profiles. It features secure user registration with encrypted passwords and session management using cookies. Users can access a personalized dashboard and view their profile details. The backend is powered by Node.js, Express, and MongoDB, with EJS templating for the front end.

🛠️ Technologies Used
Node.js: Backend server

Express.js: Web framework

EJS: Templating engine for rendering views

MongoDB: NoSQL database for storing user data

Mongoose: MongoDB ODM for interacting with the database

Cookie-Parser: Middleware to handle cookies for session management

Body-Parser: Middleware to parse incoming request bodies

Bcrypt.js: Library for password encryption

⚙️ Features
User registration with encrypted passwords

User login with session management using cookies

Personalized dashboard displaying a welcome message with the username

Profile page to view personal details

MongoDB database for storing user information

# Live Preview
Check out the live version of the project here : http://localhost:3006




