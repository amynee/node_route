// Load express module
const express = require('express');
// Use environment variables
require('dotenv').config();
const connectDB = require('./config/db');

const port = process.env.APP_PORT;
const app = express();

// Connect to our database
connectDB();

/* - Middleware 
   - parses incoming JSON requests and puts the parsed data in req.body
   - Without `express.json()`, `req.body` is undefined.
*/
app.use(express.json());

// Create article route
app.use('/articles', require('./routes/article.routes'));

// Set the app to listen to port 5000
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});