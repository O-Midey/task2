//person route.js file

import express from "express";
import { createUser } from "../controllers/userController";
const app = express();

const router = express.Router();
app.use(express.json());

app.get("/api", (req, res) => {
  console.log("route hit");
  res.json({ message: "Hello From the API" });
});
