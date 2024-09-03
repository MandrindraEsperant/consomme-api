const db = require('../config');

class User {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  //
   async getAll() {
    const sql = 'SELECT id, name, description FROM user';
    return new Promise((resolve, reject) => {
      db.query(sql, (err, results) => {
        if (err) {
          return reject(err);
        }
        // Convertir les résultats en instances de la classe User
        const users = results.map(row => new User(row.id, row.name, row.description));
        resolve(users);
      });
    });
  }

    // Méthode  pour recuperer un utilisateur
     async getByID(id) {
      const sql = 'SELECT * FROM user WHERE id = ?';
      return new Promise((resolve, reject) => {
        db.query(sql, [id], (err, results) => {
          if (err) {
            return reject(err);
          }
          if (results.length === 0) {
            return resolve(null); // Aucun utilisateur trouvé
          }
          const user = results[0];
          resolve(new User(user.id, user.name, user.description));                    
        });
      });
    }

  // Méthode statique pour mettre à jour un utilisateur
  static async update(id, name, description) {
    const sql = 'UPDATE user SET name = ?, description = ? WHERE id = ?';
    return new Promise((resolve, reject) => {
      db.query(sql, [name, description, id], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  }
}

module.exports = User;
