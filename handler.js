const express = require("express");
const router = express.Router();

router.post("/App", (req, res) => {
    const {email, message, major} = req.body

    console.log(email + " | " + message + " | " + major)
    res.send("Message sent. Thank you")
})

module.exports = router;