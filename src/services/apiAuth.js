import supabase from "../utils/supabase";

export async function signup({ fullname, email, password }) {
  // try {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullname: fullname,
        avatar: "",
      },
    },
  });

  if (error) {
    console.error("Signup error details:", error);
    throw new Error(error.message);
  }

  console.log("Signup successful:", data);
  return data;
  // } catch (error) {
  //   console.error("Error during signup:", error.message);
  //   throw error;
  // }
}

export async function loginApi({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  console.log(data);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullname, avatar }) {
  //1.update password
  let updateData;
  if (password) updateData = { password };
  if (fullname) updateData = { data: { fullname } };
  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);
  if (!avatar) return data;
}

//auth backend -- generate jwt
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const express = require('express');
// const app = express();

// // Dummy user for example
// const users = [
//   {
//     id: 1,
//     email: 'user@example.com',
//     password: '$2b$10$somehashedpassword' // Hashed password
//   }
// ];

// // JWT secret key (make sure to keep this secure)
// const JWT_SECRET = 'your_secret_key';

// // Login endpoint to authenticate and issue JWT
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   // Find the user (this would typically be a database query)
//   const user = users.find(user => user.email === email);

//   if (!user) {
//     return res.status(400).json({ error: 'Invalid email or password' });
//   }

//   // Compare password with the hashed password
//   const match = await bcrypt.compare(password, user.password);
//   if (!match) {
//     return res.status(400).json({ error: 'Invalid email or password' });
//   }

//   // Generate a JWT
//   const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

//   // Send the token to the user
//   res.json({ token });
// });

// // Middleware to verify JWT
// function authenticateJWT(req, res, next) {
//   const token = req.header('Authorization')?.split(' ')[1]; // Bearer token

//   if (!token) {
//     return res.status(401).json({ error: 'Authorization token is required' });
//   }

//   jwt.verify(token, JWT_SECRET, (err, user) => {
//     if (err) {
//       return res.status(403).json({ error: 'Invalid token' });
//     }

//     req.user = user;
//     next();
//   });
// }

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

//  Use JWT to Access Airtable (Backend)
// const axios = require("axios");

// // Airtable API key and base URL
// const AIRTABLE_API_KEY = "your_airtable_api_key";
// const AIRTABLE_API_URL =
//   "https://api.airtable.com/v0/appMKsGzCJo51yXH0/Request-Callback";

// app.post("/request-callback", authenticateJWT, async (req, res) => {
//   try {
//     // Use Airtable API with the authenticated user's info
//     const response = await axios.post(
//       AIRTABLE_API_URL,
//       {
//         fields: {
//           email: req.body.email,
//           message: req.body.message,
//         },
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${AIRTABLE_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     // Respond with Airtable data
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// Example frontend code to handle login and store the JWT
// async function login(email, password) {
//   const response = await fetch('http://localhost:3000/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email, password }),
//   });

//   const data = await response.json();

//   if (data.token) {
//     // Store the token for future requests
//     localStorage.setItem('authToken', data.token);
//   } else {
//     console.error('Failed to login');
//   }
// }

// // Use JWT for authorized requests
// async function requestCallback() {
//   const token = localStorage.getItem('authToken');

//   const response = await fetch('http://localhost:3000/request-callback', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`,
//     },
//     body: JSON.stringify({
//       email: 'user@example.com',
//       message: 'I need help!',
//     }),
//   });

//   const data = await response.json();
//   console.log(data);
// }
