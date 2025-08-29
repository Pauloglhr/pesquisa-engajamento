const { Router } = require("express");
const questionarioController = require("../controllers/questionarioController");
const router = Router();

router.get("/questionario", questionarioController.buscar);

router.post("/questionario", questionarioController.criar);

module.exports = router;
