import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 4444;

app.use(bodyParser.json());

app.get("/", (req, res) => {
    console.log("[GET ROUTE]");
    res.send("HELLO WORLD");
})

app.listen(PORT);
