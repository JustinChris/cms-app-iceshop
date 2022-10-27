import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    address: String,
    password: String
});

export default mongoose.models.users || mongoose.model("users", userSchema);