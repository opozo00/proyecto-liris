const express = require("express");
const { User } = require("../models/user");


const router = express.Router();

// Método para obtener todos los usuarios
router.get("/", async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener usuarios" });
    }
});


// // Método para usuario con ID específico
// router.get("/", async (req, res) => {
//     try {
//         const users = await User.findAll();
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ error: "Error al obtener usuarios" });
//     }
// });