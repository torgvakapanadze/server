const express = require ('express');
const app = express();

app.get('/',(req,res)=>{
    res.send({hi:'there'})
})
// wdawda
// shecvale atvirte
//test 02/04
const PORT = process.env.PORT || 5000
app.listen(PORT);