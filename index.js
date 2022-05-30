const express = require("express");

const dotenv = require("dotenv");
dotenv.config();


const cochesRoutes = require("./src/api/routes/movies.routes")


const {connect} = require ("./src/utils/database");


const PORT = process.env.PORT

const server = express();

connect()


server.use("/coches",cochesRoutes)


server.listen(PORT ,() => {
    console.log(`Server running in http://localhost:${PORT}`);
})