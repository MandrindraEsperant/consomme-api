const mysql = require("mysql");
require('dotenv').config();

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});



const createTableQuery = `
  CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
  );
`;

// Connection à la base de données
con.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données : ' + err.stack);
    return;
  }
  console.log('Connecté à la base de données.');
  // Exécuter la requête
  con.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('Erreur lors de la création de la table : ' + err.stack);
      return;
    }
    console.log('Table créée avec succès.');
  });
});







module.exports = con;
