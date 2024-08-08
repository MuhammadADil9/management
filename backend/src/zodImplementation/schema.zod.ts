import {z} from "zod"


const SchemaToVerify = z.object({
    name : z.string(),
    email : z.string().email({message : "Please provide with a email address"}),
    password : z.string()
})


export default SchemaToVerify