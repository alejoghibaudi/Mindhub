const express=require('express');
const cors=require('cors');
const usercontroller= require('../controllers/userControllers');
const router= express.Router();
router.use(cors())

router.route('/register')
    .post(usercontroller.cargarusuario);

router.route('/login')
    .post(usercontroller.logearusuario);

router.route('/profile')
    .get(usercontroller.perfilusuario)



module.exports=router;