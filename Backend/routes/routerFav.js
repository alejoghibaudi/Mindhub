const express = require('express');
const favcontroller=require('../controllers/favController')

const router=express.Router();

router.route('/fav/:UserId')
    .get(favcontroller.listarfav)

router.route('/fav')
    .post(favcontroller.cargarfav)

router.route('/fav/:id')
    .delete(favcontroller.borrarfav)

module.exports = router;