import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    required: [true, "A user must have a name"],
    type: String,
    unique: true,
  },
});

export const User = mongoose.model("User", UserSchema);
