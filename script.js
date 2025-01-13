const express = require('express');
const app = express();




app.post('/add',function(req,res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        ans : a+b,
    })
    
});



app.listen(3000);