import app from "./app.js"

app.listen(process.env.PORT, ()=>{
console.log(`Server is listerning to port ${process.env.PORT}`);
});