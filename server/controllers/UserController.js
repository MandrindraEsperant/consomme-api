const User = require('../models/User'); // Importer la classe User
const user = new User();
class UserController {
  async getUsers(req, res) {
    try {
      const users = await user.getAll();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

   // Méthode pour mettre à jour un utilisateur
   async updateUser(req, res) {
    const id = req.params
    const {  name, description } = req.body;
    
    try {
      await User.update(id, name, description);
      res.status(200).json({ message: 'User updated successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = UserController;
