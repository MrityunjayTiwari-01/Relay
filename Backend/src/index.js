import express from "express";
import "dotenv/config"
import {connectDB} from "./lib/db.js"

const app = express();
const port = process.env.PORT;

app.listen(port, ()=> {
    connectDB();
    console.log(`Server is up and running at port ${port}`)});