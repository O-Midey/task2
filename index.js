import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import { createUser } from "./controllers/userController.js";
import { User } from "./controllers/userController.js";
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

app.use(express.json());

// Get all users
app.get("/api", async (req, res) => {
  try {
    const users = await User.find().select("-__v");
    res.status(200).json({ status: "success", data: users });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

//Create a new user
app.post("/api/", createUser);

//Find a user
app.get("/api/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId).select("-__v ");

    if (!user) {
      res.status(404).json({ status: "error", message: "User not found" });
    } else {
      res.status(200).json({ status: "success", data: user });
    }
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
