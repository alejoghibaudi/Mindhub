const City = require('../models/cityModels');
const citycontroller={
    
    
    listarciudades:async(req,res)=>{
        const data=await City.find();
        res.json({data});
    },

    cargarciudades:async(req,res)=>{
        var ciudad=req.body.ciudad;
        var pais= req.body.pais;

        const nuevaciudad=new City({
            ciudad,
            pais
        });

        await nuevaciudad.save();
        res.send('Ciudad cargada');
    },
    borrarciudades:async(req,res)=>{
        var id=req.params.id;//le llega desde la url
        await City.findOneAndDelete({_id:id}),
        res.json('Respuesta: Ciudad Borrada');
    },
    modificarciudades:async(req,res)=>{
        var id= req.params.id;
        var ciudad=req.body.ciudad;
        var pais=req.body.pais;

        await City.findOneAndUpdate({_id:id},{ciudad:ciudad},{pais:pais});
        res.json('Modificacion completa');
    }
}

module.exports=citycontroller;