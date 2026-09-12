import express from "express";
import "dotenv/config"
import dns from "dns";
import cors from "cors"
import fs from "fs"
import path from "path"
import { clerkMiddleware } from "@clerk/express"
import { connectDB } from "./lib/db.js"

dns.setServers(["8.8.8.8"]);
const app = express();
const port = process.env.PORT||3001;
const frontendUrl = process.env.frontendUrl;
connectDB();

const publicDir = path.join(process.cwd(), "public")

app.use(express.json());
app.use(cors({ origin: frontendUrl, Credential: true }));
app.use(clerkMiddleware());


app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

if (fs.existsSync(publicDir)) {
  app.use(express.static(publicDir));

  app.get("/{*any}", (req, res, next) => {
    res.sendFile(path.join(publicDir, "index.html"), (err) => next(err));
  });
}

app.listen(port, () => {
  console.log(`Server is up and running at port ${port}`)
}
);