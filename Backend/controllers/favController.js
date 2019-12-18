const Favourite = require('../models/favModels');

const favcontroller={


    listarfav:async(req,res)=>{
        Favourite.find({UserId:req.params.UserId}).then(function(favourites){
            res.send(favourites)
        })
    },
    cargarfav:async(req,res)=>{
        const favData={
            ItineraryId:req.body.ItineraryId,
            UserId:req.body.UserId
        }
        Favourite.findOne({
            ItineraryId:req.body.ItineraryId,
            UserId:req.body.UserId
        })
        .then(fav=>{
            if(!fav){
                Favourite.create(favData).then(function(favourites){
                    res.send(favourites);
                }).catch(err=>{res.send('Error: '+ err)});
            }else{
                res.send('Ya a sido es uno de tus favoritos')
            }
        })
    },
    borrarfav:async(req,res)=>{
        Favourite.findByIdAndRemove({_id:req.params.id}).then(function(favourites){
            res.send(favourites)
        })
    }
}
module.exports=favcontroller