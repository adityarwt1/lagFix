import mongoose, {  Schema } from "mongoose";

interface LagFixSchema {
    localStorage:string,
    cookies:string,
    website:string
}
const LagFixSchema:Schema<LagFixSchema> = new Schema({
    cookies:{
        type:String,
        required:false
    },
    localStorage:{
        type:String,
        required:false
    },
    website:{
        type:String,
        required:false
    }
},
)
const LagFix = mongoose.models.Lagfix || mongoose.model("Lagfix", LagFixSchema)
export default LagFix