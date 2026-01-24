require('dotenv').config()

console.log("chai aur code");
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('shivamdotcom')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login my website</h1>')
})
app.get('/linkedin',(req,res)=>{
    res.send('<h2>click here to go to linkedin</h2>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
