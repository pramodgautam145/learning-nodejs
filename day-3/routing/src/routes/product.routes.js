const express = require("express");
const router = express.Router();

let product =[{id:1,name:"pramod"},
{id:2,name:"gautam"}]
router.get("/",(req,res)=>{
 res.json(product); 
});

router.post("/newProduct",(req,res)=>{
    console.log("new product added");
    res.json({msg :"new product added successfully"}); 
   });

router.get("/details/:id",(req,res)=>{
    let productId = +req.params.id;
    console.log(productId);
    let theProduct = product.find(p=>p.id==productId);
    res.json(theProduct);
});

module.exports = router ;