import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    status: String,
    price: Number,
    rating: Number,
    img: String
});

export default mongoose.models.products || mongoose.model("products", productSchema);