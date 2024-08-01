import mongoose from "mongoose";
import taskSchema from "./schema.js";


let modeling = mongoose.model("tasks",taskSchema)
export default modeling