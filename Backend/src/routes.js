const express = require("express");

const OngController = require("./controllers/OngController");
const incidentController = require("./controllers/incidentController");
const profileControler = require("./controllers/profileControler");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/session", SessionController.create);


routes.get("/ongs", OngController.index); 
routes.post("/ongs", OngController.create);

routes.get("/profile", profileControler.index); 

routes.get("/incidents", incidentController.index);
routes.post("/incidents", incidentController.create);
routes.delete("/incidents/:id", incidentController.delete);

module.exports = routes; 

