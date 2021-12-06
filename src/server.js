const express = require('express')

app = express()

app.get("*", (req, res) => {
    res.render("../public/index")
})

app.listen(3000, () => {console.log('Server listened on http://localhost:3000')})