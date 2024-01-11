import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    product: { type: String, required: true },
    cod: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true }
})

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)