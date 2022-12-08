import connection from '../../database/connection'
import userModel from '../../database/userSchema'
connection
export default function handler(req,res){
    console.log(req.method);
    if (req.method=='GET') {
        res.send("Hello, Welcome"); 
    } else if (req.method=='POST'){
        console.log(req.body);
        let form = new userModel(req.body);
        form.save((err)=>{
            if(err){
                console.log("form could not save")
            } else{
                res.send("Signup successfully")
            }
        })
    }
}