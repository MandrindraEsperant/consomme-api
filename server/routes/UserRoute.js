const express = require("express");

const UserController = require('../controllers/UserController'); // Importer le contrôleur
const userController = new UserController();

// Route
const router = express.Router();

router.get("/", userController.getUsers);
router.put("/:id", userController.updateUser);


module.exports = router;
