const db = require('../config');

class User {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  static async getAll() {
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
}

module.exports = User;
