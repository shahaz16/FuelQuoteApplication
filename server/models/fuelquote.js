import mongoose from "mongoose";
const FuelSchema = new mongoose.Schema({
    gallon_requested: {
        type: Number,
        required: true,
    },
    address1: {
        type: String,
        required: true,
    },
    address2: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    suggested_price: {
        type: Number,
        required: true,
    },
    total_price: {
        type: Number,
        required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
    }
    
})

export default mongoose.model("FuelSchema", FuelSchema);