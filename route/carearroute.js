const express = require("express");
const { createCareer, getAllCareers, getCareerById, updateCareer, deleteCareer } = require("../controller/carearcontroler");
const routers = express.Router();

routers.post("/create", createCareer);
routers.get("/get", getAllCareers);
routers.get("/get/:id", getCareerById);
routers.put("/update/:id", updateCareer);
routers.delete("/delete/:id", deleteCareer);

module.exports = routers;
