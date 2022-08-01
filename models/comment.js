import mongoose from "mongoose";
import { ObjectId } from "mongoose";
const comenSchema = new mongoose.Schema({
    content: [{
        type: String,

    }],
    IdUser: {
        type: ObjectId,
        ref: "User",
    },
    IdProduct: {
        type: ObjectId,
        ref: "Product",
    },

}, { timestamps: true })

export default mongoose.model('comment', comenSchema)