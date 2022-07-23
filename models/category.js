import mongoose,{Schema} from "mongoose";
const categorySchema = new Schema({
    name:{
        type:String,
        require:true
    },
    status:{
        type:Boolean,
        default:true
    }

},{ timestamps: true })
export default mongoose.model("category",categorySchema)  