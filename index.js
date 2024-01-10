const express=require('express');
const app = express();


 app.get('/ping',(req,res)=>
 {
  console.log("hihi huukuku");
  res.send({message:'Ping received'})
 });
app.listen(8080,()=>
{
  console.log("hi huku hi huku hiihiii");
})

