import mongoose,{Schema} from "mongoose";
const catergorySchema = new Schema({
    name:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    }

},{ timestamps: true })
export default mongoose.model("catergory",catergorySchema)  