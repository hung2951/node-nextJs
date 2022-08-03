import mongoose, { Schema } from "mongoose";
import { createHmac } from "crypto"
const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        maxlength: 30
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        default: true
    },
    role: {
        type: Number,
        default: 0
    }
}, { timeStamp: true });


userSchema.methods = {
    authenticate(password) {
        return this.password == this.encryPassword(password)
    },
    encryPassword(password) {
        if (!password) return
        try {
            return createHmac("sha256", "123456").update(password).digest("hex")
        } catch (error) {
            console.log(error);
        }
    }
}

userSchema.pre("save", function (next) {
    this.password = this.encryPassword(this.password)
    next();
})

export default mongoose.model("User", userSchema)
