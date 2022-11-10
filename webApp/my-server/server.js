const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const path = require("path");
const cors = require("cors");
const pool = require("./db");
const limiter = rateLimit({ windowMs: 1000, max: 65 });
const fetch = require('node-fetch');

const indexPath = "../my-app/build";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(limiter);
app.use(cors());
app.use(
    helmet({
        contentSecurityPolicy: false,
    })
);

let getDevices = async function (x, y) {
    return await pool.query("SELECT * FROM device");
};

function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
}
function fetchQuote(res){
    fetch("https://zenquotes.io/api/random")
    .then(async (response) => {
        const data = await response.json();

        if (data[0].a === "zenquotes.io") {
            await timeout(5000);
            fetchQuote(res);
        }else{
            res.send(JSON.stringify(data[0]));
        }
    })
    .catch((error) => {
        res.send("There was an error!", error);
    });
}

app.route("/data")
    .get((req, res, next) => {
        res.send("GET request called");
    })

    .post((req, res, next) => {
        if (!(req.body.credentials.username && req.body.credentials.password)) {
            return res.status(400).json({
                status_code: 0,
                error_msg: "Require Credentials",
            });
        }

        res.status(200).json({
            status_code: 1,
            data: req.body,
        });
    });

app.get("/quote", function (req, res) {
    fetchQuote(res);
});

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, indexPath, "index.html"));
});

const serverHTTP = http.createServer(app);
const portHTTP = process.env.PORT || 8080;
serverHTTP.listen(portHTTP, "0.0.0.0", (err) => {
    if (err) {
        return console.log(err.stack);
    }
    return console.log(`server is listening on ${portHTTP}`);
});