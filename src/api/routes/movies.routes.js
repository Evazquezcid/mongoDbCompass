const express = require("express")

const router = express.Router()

const {getAllCoches,getCocheByPlazas,getCocheById} = require ("../controllers/coches.controller")

router.get("/", getAllCoches);
router.get("/id/:id", getCocheById);
router.get("/plaza/:plaza",getCocheByPlazas);

module.exports = router; 