const express = require("express");
const jobRoutes = require("./route/job.routes");
const { default: mongoose } = require("mongoose");

 const app = express();
//conection with MongoDB
app.use (express.json());

mongoose.connect("mongodb+srv://sandeeps16456:Xdd033Y70uH6eo1J@cluster0.j1kkwqp.mongodb.net/")
.then(()=>console.log(`DB Connected successfully`))
.catch((err)=>{
    console.log(`somthing`,err);
    
})


//Routes
 app.use(jobRoutes)
const port = 8080;

app.listen(port, () => console.log(`server is up the start ${port}`));
