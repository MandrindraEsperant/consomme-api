const express = require('express');
const cors = require('cors'); // Importer cors
const db = require('./config');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT
app.use(cors());
app.use(express.json());


// Importer les routes
const UserRoutes = require('./routes/UserRoute');



// Utiliser les routes
app.use('/user', UserRoutes);



// Démarrer le serveur
app.listen(PORT, '0.0.0.0',() => {
    console.log(`http://localhost:${PORT}`);
});
