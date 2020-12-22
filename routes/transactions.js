const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send("HELL YeaH!!!"));

module.exports = router;