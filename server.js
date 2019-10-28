const express = require('express');
const path = require('path')
const app = express()
const fs = require('fs')



app.use((req,res,next)=>{
    var ua = req.headers['user-agent'];
    if (/^(facebookexternalhit)|(Facebot)|(Twitterbot)|(Pinterest)/gi.test(ua)) {
        fs.readFile("./metaTemplate.html",(err,data)=>{
            let str = data.toString()
            if (res.url === "/forum"){
                str = str.replace('{{title}}',"CSNOOB FORUM");
                str = str.replace("{{description}}","Find your favourite forum about Computer Science in CSNOOB");
                str = str.replace("{{url}}","http://csnoob.co.nz/forum");
                str = str.replace("{{imgurl}}","http://csnoob.co.nz/csnoob.png");
            }
        })
    }else{
        next()
    }
})


app.use(express.static(path.join(__dirname,'build')));
app.use('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
});


app.listen(3001)
