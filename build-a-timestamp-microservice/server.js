import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.sendFile(import.meta.dirname + "/views/index.html");
});



// Do not change code above this line
app.get(["/api", "/api/:date"],(req,res)=>{
  
    const input = req.params.date;
    if(!input){
      const date_now = new Date();
      return res.json({
        "unix":date_now.getTime(),
        "utc":date_now.toUTCString(),

      });

    }
    let my_date ="";
    if(/^\d+$/.test(input)){
        const timestamp = Number(input);
        my_date = new Date(timestamp);
      
    }
    else{
      my_date = new Date(input);

    }

    if(my_date.toString() === "Invalid Date"){
      return res.json({
        "error":"Invalid Date",
      });
    }

    return res.json({
      "unix":my_date.getTime(),
      "utc":my_date.toUTCString(),
    });


})
// Do not change code below this line

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
