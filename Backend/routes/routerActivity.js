//traemos express para poder traer el router
const express=require('express');
const activitycontroller= require('../controllers/activityController');

const router=express.Router();

//Requiere la ruta get post delete put

router.route('/activity/:ciudad')
    .get(activitycontroller.listaractividades)
    .post(activitycontroller.cargaractividades);

router
    .route('/activity/:id')
    .delete(activitycontroller.borraractividades)
    .put(activitycontroller.modificaractividades);

module.exports=router; //exportamos las rutas