 const express = require('express')
const router = require("./src/routes/users.router")
const app = express();
const port = 4000

app.use("/dadJokes", router)

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
