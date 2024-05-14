import mongoose from "mongoose";
export interface IUser{
    firstName:string,
    lastName:
}

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true 
    },
    userId:{
        type:String,
        required:true
    },
    profilePhoto:{
        type:String,
        default:""
    },
    bio:{
        type:String,
        default:""
    }
},
{timestamps:true}
)

export const User = mongoose.models?.User||mongoose.model("User",)