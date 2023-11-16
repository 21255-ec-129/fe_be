import mongoose from "mongoose";
const Schema=mongoose.Schema//shema to create the collection

const user = new Schema({
username:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
}
})
export default mongoose.model("user",user)