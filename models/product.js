import mongoose from "mongoose";
import { Schema, ObjectId } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        minlength: 5,
        unique: true,
        index: true
    },
    price: {
        type: Number,

    },
    price_sale: {
        type: Number,

    },
    quantity: {
        type: Number,

    },
    img: {
        type: String,

    },
    description: {
        type: String,

    },
    status: {
        type: Number,

    },
    category: {
        type: ObjectId,
        ref: "Category"

    }
}, { timestamps: true })
productSchema.index({ "$**": 'text' });

export default mongoose.model('Product', productSchema);