const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  //res.send('Hello World!')
  let product =[{id:1,name:"pramod"},
  {id:1,name:"gautam"}]
res.json(product);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})