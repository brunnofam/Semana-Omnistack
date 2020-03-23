const express = require("express");

const app = express(); 

app.get("/",(request, response) =>{
    return response.json({
        evento: "Semana tomei no cu",
        sofredor: "Raxid"
    })
} )

app.listen(3333); 
