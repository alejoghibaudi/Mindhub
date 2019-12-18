//traemos express para poder traer el router
const express=require('express');
const commentcontroller= require('../controllers/commentController');

const router=express.Router();

//Requiere la ruta get post delete put

router.route('/comment')
    .get(commentcontroller.listarcomment)
    .post(commentcontroller.addcomment);

router
    .route('/comment/:id')
    .get(commentcontroller.listarcommentconid)

module.exports=router; //exportamos las rutas 