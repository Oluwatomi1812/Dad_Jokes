const express = require('express')
const axios = require('axios');
const router = require("./src/routes/users.router")
const app = express()
 const port = 4000

app.use( "/dadjokes", router)


app.listen(
  console.log(`Listening from port ${port}`)
)