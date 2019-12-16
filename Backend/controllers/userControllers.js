const User = require('../models/userModels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
process.env.SECRET_KEY ='secret';
const usercontroller={

    cargarusuario: async (req,res)=>{
        var first_name=req.body.first_name;
        var last_name=req.body.last_name;
        var email=req.body.email;
        var password=req.body.password;

        const today=new Date()
        const newuser=new User({
            first_name,
            last_name,
            email,
            password,
            created:today
        });

        await User.findOne({
            email:req.body.email
        }).then(user=>{
            if(!user){
                bcrypt.hash(req.body.password,10,(err,hash)=>{
                    newuser.password=hash
                    User.create(newuser)
                        .then(user=>{
                            res.json({status:user.email+' registed!'})
                        }).catch(err=>{console.log('error: '+err)})            
                })
            }else{res.json({error:user.email})}
        }).catch(err=>{console.log('error ' +err)})
    },

    logearusuario:(req,res)=>{
        User.findOne({
        email: req.body.email
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        } else {
          res.json({ error: 'User does not exist' })
        }
      } else {
        res.json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
    },

    perfilusuario: async (req,res)=>{
        var decoded = jwt.verify(req.headers["authorization"],process.env.SECRET_KEY)
        await User.findOne({
            _id:decoded._id
        }).then(user=>{
            if(user){
                res.json(user)
            }else{res.send("User dos not exist")}
        }).catch(err=>{res.send('error: '+err)})
        
    }
}

module.exports=usercontroller;