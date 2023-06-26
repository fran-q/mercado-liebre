const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const path= require("path");

app.use(express.static("public"));
app.listen(port,() => console.log("Pagina funcionando en ${port}"));

app.get("/", (req,res) => { 
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
});
app.get("/register", (req,res) => { 
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
});
app.get("/login", (req,res) => { 
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
});


//app.use(express.static(path.resolve(__dirname,'../public')))
//npm i nodemon
//npx nodemon app