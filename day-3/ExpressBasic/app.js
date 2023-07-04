const express = require('express')
const app = express()
const port = 3000

//built in middleware
app.use(express.static("static"))
app.get('/', (req, res) => {
  //res.send('Hello World!')
  let product =[{id:1,name:"pramod"},
  {id:1,name:"gautam"}]
//res.json(product);
res.sendFile("index.html",{root:__dirname});
})

app.get('/script.js', (req, res) => {
  //res.send('Hello World!')
  let product =[{id:1,name:"pramod"},
  {id:1,name:"gautam"}]
//res.json(product);
res.sendFile("script.js",{root:__dirname});
})

app.use((req,res)=>{
  res.sendStatus(404).send("resource not found");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})