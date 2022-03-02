const express = require("express")
const router = express.Router()

const dictionary = require('../controllers/dictionary.controller');

router.post("/", dictionary.create);

router.get('/', dictionary.findAll);

module.exports = router;
