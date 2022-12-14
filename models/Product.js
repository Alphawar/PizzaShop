import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 60
    },
    desc: {
        type: String,
        required: true,
        maxlength: 200
    },
    img: {
        type: String,
        required: true,
    },
    prices: {
        type: [Number],
        required: true,
    },
    extras: {
        type: [{ name: { type: String, required: true}, price: { type: Number, required: true }}],
        required: true,
    }
}, { timestamps: true })

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);