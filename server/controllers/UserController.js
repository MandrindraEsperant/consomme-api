const User = require('../models/User'); // Importer la classe User

class UserController {
  async getUsers(req, res) {
    try {
      const users = await User.getAll();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = UserController;
