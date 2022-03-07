
const express = require("express");

const app = express();

app.use(logger);

app.get("/books", function (req,res){
    console.log('books');
    res.send('book');
    
});
app.get("/authors", authors, function (req,res){
    console.log('authors');
    res.send ({route: "/authors", web:req.web});
    
});

function authors(req,res,next){
    // console.log('hello');

    next();
}


app.get("/libraries", libraries, function (req,res){
    console.log('libraries');
    res.send ({route: "/libraries", web:req.web});
    
});

function libraries(req,res,next){
    // console.log('before hello');

    next();

    // console.log('after hello')
}

app.get("/chapter", chapter, function (req,res){
    console.log('libraries');
    res.send ({route: "/chapter", web:req.web});
    
});

function chapter(req,res,next){
    
}






