import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true,

    }

}, { timestamps: true });

export default mongoose.model("banner", bannerSchema)