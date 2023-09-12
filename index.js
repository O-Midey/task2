import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";
import userRoutes from "./userRoutes.js";

const app = express();
const PORT = 3001;
const uri = `mongodb+srv://talk2adeoluwa2310:56353087ac@cluster0.dtruxiy.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//Create MongoDB connection
const connectToDB = async () => {
  try {
    await client.connect();
    console.log("App is connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

client.on("error", (err) => {
  console.error("MongoDB client error:", err);
});

connectToDB();

// Connect Mongoose to the database
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongoose is connected to MongoDB");
});

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

//Use JSON parser
app.use(express.json());

//Use Routes
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
