const express = require("express");
const path = require("path");
const { addText, getText } = require("./TextStore");

const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.use(express.json());

app.get("/text", (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.json({
        text: getText(),
        seconds: 5,
    });
});

app.post("/text", (req, res) => {
    let text = req.body.text;
    text = text.trim();
    if (text.length !== 0) {
        addText(text);
    }

    res.send({
        message: "Thankyou!",
    });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
    console.log("Server is running !!!");
});
