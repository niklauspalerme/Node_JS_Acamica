const { Router } = require("express");
const { platoExiste } = require("../middlewares/platoExiste");
const { getPlato, createPlato, updatePlato, deletePlato, getOnePlato } = require("../services/restaurantServices");


const routerFunction = () =>{

    const router = new Router();

    router.get("/", getPlato);
    router.get("/:id", platoExiste,getOnePlato);
    router.post("/", createPlato);
    router.put("/:id", platoExiste,updatePlato);
    router.delete("/:id", platoExiste,deletePlato);

    return router;

}


module.exports={
    routerFunction
}