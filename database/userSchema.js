import mongoose from 'mongoose'
let userSchema = mongoose.Schema({
    firstname: String,
    lastname:String,
    email:String,
    password:String,
})

let userModel = mongoose.models.user_tb || mongoose.model("user_tb", userSchema);
export default userModel;