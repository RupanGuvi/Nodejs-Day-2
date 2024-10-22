const products = [
    {id:1,name:"iphone12",price:25000},
    {id:2,name:"laptop",price:55000},
    {id:3,name:"headphone",price:5000},
    {id:4,name:"printer",price:15000},
]

//get method

export const getProducts = (req,res)=>{
    res.status(200).json({data:products})
}