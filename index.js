const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const port = 3000 || process.env.PORT


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})