const express = require("express");
const { Manual } = require("../models/manual");


const router = express.Router();

// module.exports = () => {


//     return router;
// }

router.get("/", async (req, res) => {
    try {
        const manuals = await Manual.findAll();
        res.json(manuals);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los manuales" });
    }
});



router.post("/", async (req, res) => {
    try {
        const { title, description, pdfUrl } = req.body;
        const newManual = await Manual.create({ title, description, pdfUrl });
        res.status(201).json(newManual);
    } catch {
        res.status(500).json({ error: "Error al crear el manual" });
    }

});

module.exports = router;
