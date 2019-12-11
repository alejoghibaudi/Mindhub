//traemos express para poder traer el router
const express=require('express');
const citycontroller= require('../controllers/cityController');

const router=express.Router();

//Requiere la ruta get post delete put

router.route('/city')
    .get(citycontroller.listarciudades)
    .post(citycontroller.cargarciudades);

router
    .route('/city/:id')
    .delete(citycontroller.borrarciudades)
    .put(citycontroller.modificarciudades);

module.exports=router; //exportamos las rutas