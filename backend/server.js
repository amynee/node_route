// Load express module
const express = require('express');
// Use environment variables
require('dotenv').config();

const port = process.env.APP_PORT;
const app = express();

// Middleware qui permet de traiter les données de la requete
app.use(express.json());

// run server on port 5000
app.listen(port, () => {
    console.log(`Le serveur a démarré au port ${port}`);
});