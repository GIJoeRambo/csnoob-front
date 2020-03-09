// const express = require('express');
// const path = require('path')
// const app = express()
// const fs = require('fs')
//


// app.use((req,res,next)=>{
//     var ua = req.headers['user-agent'];
//     if (/^(facebookexternalhit)|(Facebot)|(Twitterbot)|(Pinterest)/gi.test(ua)) {
//         fs.readFile("./metaTemplate.html",(err,data)=>{
//             let str = data.toString()
//             if (req.url === "/forum"){
//                 str = str.replace('{{title}}',"CSNOOB FORUM");
//                 str = str.replace("{{description}}","Find your favourite forum about Computer Science in CSNOOB");
//                 str = str.replace("{{url}}","http://csnoob.co.nz/forum");
//                 str = str.replace("{{imgurl}}","http://csnoob.co.nz/csnoob.png");
//             }else if (req.url === '/'){
//                 str = str.replace('{{title}}',"Great Zone for CS students in New Zealand");
//                 str = str.replace("{{description}}","CS Noob is a great zone for cs students currently in eight university in New Zealand (We implement UoA first, others are coming soon) and cs big fans");
//                 str = str.replace("{{url}}","http://csnoob.co.nz");
//                 str = str.replace("{{imgurl}}","http://csnoob.co.nz/csnoob.png");
//             }
//             res.send(str);
//         })
//     }else{
//         next()
//     }
// })
//
//
// app.use(express.static(path.join(__dirname,'build')));
// app.use('/*',(req,res)=>{
//     res.sendFile(path.join(__dirname,'build','index.html'))
// });
//
//
// app.listen(80)


import path from 'path'
import fs from 'fs'

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from './src/App'

const PORT = 8080
const app = express()

const router = express.Router()

const serverRenderer = (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).send('An error occurred')
        }
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
            )
        )
    })
}
router.use('^/$', serverRenderer)

router.use(
    express.static(path.resolve(__dirname, '.', 'build'), { maxAge: '30d' })
);

// tell the app to use the above rules
app.use(router);

// app.use(express.static('./build'))
app.listen(PORT, () => {
    console.log(`SSR running on port ${PORT}`)
});
