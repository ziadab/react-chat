const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Ra hadxi 5edam zin af").status(202);
})

module.exports = router