import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    title : {
        type:String,
        require:true
    }
})

export default taskSchema

