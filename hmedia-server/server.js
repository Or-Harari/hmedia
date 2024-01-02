const express = require('express');
const multer = require('multer');



const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,__dirname +'/uploads')
    },
    filename: function(req,file,cb){
        cb(null,new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});

const port = '8080';
const app = express();

const uploads = multer({storage:storage})


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })


app.post('/upload',uploads.single('img'),(req,res) =>{
    console.log(req.file)
    res.json(req.body)
})



app.listen(port, ()=>{
    console.log('app woking on port' + port);
})
