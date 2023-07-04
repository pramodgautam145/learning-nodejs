const express = require("express");
const router = express.Router();

let order =[{id:1,product:["led","Tv"]},
{id:2,product:["watch","shooes"]}]
router.get("/",(req,res)=>{
 res.json(order); 
});

module.exports = router;