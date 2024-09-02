const express = require('express');
const cors = require('cors'); // Importer cors
const db = require('./config');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT
app.use(cors());
app.use(express.json());


// Importer les routes
const UserRoutes = require('./routes/user');
// const utilisateurRoutes = require('./routes/utilisateurRoutes');
// const questionnaireRoutes = require('./routes/questionnaireRoutes');
// const noteRoutes = require('./routes/noteRoutes');

// Utiliser les routes
app.use('/user', UserRoutes);
// app.use('/utilisateurs', utilisateurRoutes);
// app.use('/questionnaires', questionnaireRoutes);
// app.use('/note', noteRoutes);






// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
