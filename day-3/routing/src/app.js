const express = require('express')
const app = express()

const productRouter = require('./routes/product.routes');
const orderRouter = require('./routes/order.routes');
const port = 3000

//built in middleware
app.use(express.static("src/static"))

app.get('/', (req, res) => {
  //res.send('Hello World!')
  let product =[{id:1,name:"pramod"},
  {id:1,name:"gautam"}]
//res.json(product);
res.sendFile("index.html",{root:__dirname});
})

app.use("/product",productRouter);
app.use("/order",orderRouter);



app.use((req,res)=>{
  res.sendStatus(404).send("resource not found");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})