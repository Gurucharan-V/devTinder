import express from "express";
const app = express();
const port = 3000;

app.use("/test",(req,res)=>{
    res.send("you are in test page");
    next();
})
app.use("/",(req,res)=>{
    res.send("you are in home page");
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
