const Pool = require("pg").Pool;

const pool = new Pool({
    user: "freegsxa",
    password: "SEZ610ii!!",
    database: "freegsxa_myGreenEnergy",
    host: "198.54.125.97",
    port: 21098,
});

module.exports = pool;