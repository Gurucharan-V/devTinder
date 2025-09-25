import express from "express";
const app = express();
const port = 7777;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
  
app.get("/", (req,res) => r{
    es.send("this is page")
});

app.get("/home", (req,res) => {
    res.send("this is home page")
});

app.get("/test", (req,res) => {
    res.send("this is test page")
});


app.listen(port, ()=> {
    console.log(`on port ${port}`)
    });
  
