const express = require('express');
const app = express();
require('dotenv').config()

const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.SERVER_PORT || 3000

app.use(bodyParser.json({ limit: "50mb" }));

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(
    cors({
        origin: "*",
        method: ["GET", "POST", "PATCH", "DELETE"],
    })
)

app.get('/', (req, res) => {
    res.send('Hello, world')
})

const book = require("./routes/book");
app.use("/api", book);

app.listen(port, () => {
    console.log('server on port http://localhost:' + port);
})