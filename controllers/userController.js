//userController.js file
import mongoose from "mongoose";

const uri = `mongodb+srv://talk2adeoluwa2310:56353087ac@cluster0.dtruxiy.mongodb.net/?retryWrites=true&w=majority`;

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

const UserSchema = new mongoose.Schema({
  name: {
    required: [true, "A user must have a name"],
    type: String,
    unique: true,
  },
});

export const User = mongoose.model("User", UserSchema);

export const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
