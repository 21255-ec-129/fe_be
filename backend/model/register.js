import mongoose,{Schema} from "mongoose";
const Schema1 = mongoose.Schema;
let registerSchema = new Schema1({
    name: {
        type:String
    },
    email : {
        type:String
    },
    password: {
        type:String
    },
  phoneno : {
    type:String
    },
    profile1:{
        type:String
    }
});
export default mongoose.model("registers",registerSchema);