const express = require("express");

const UserController = require('../controllers/UserController'); // Importer le contrôleur
const userController = new UserController();

// Route
const router = express.Router();

router.get("/", userController.getUsers);


module.exports = router;
