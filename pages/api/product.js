let allproducts = [
    {name:"Rice", price:60000,id:"1"},
    {name:"Soap", price:700,id:"2"},
    {name:"Beans", price:40000,id:"3"},
    {name:"Noodles", price:3600,id:"4"}
]

export default function handler(req,res){
    res.send(allproducts)
}