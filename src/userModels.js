import mongoose from "mongoose";


export const userModel = new mongoose.Schema(
    {
    name: {
        type: String,
    },
    email:{
        type: String,
    },
    messages:[
        {
            user: {type: String},
            assistant: {type: String}
        }
    ]
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

export const modelUsers = mongoose.model("tenubars", userModel);