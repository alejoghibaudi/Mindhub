const Comment = require("../models/commentModels");
const commentcontroller={
    listarcomment:async (req,res)=>{
        Comment.find({}).then(function (comments) {
            res.send(comments);
        });
    },
    addcomment: async(req,res)=>{
        Comment.create(req.body).then(function (comment) {
            res.send(comment);
        });
    },
    listarcommentconid: async(req,res)=>{
        Comment.find({ ItineraryId: req.params.ItineraryId }).then(function (comments) {
            res.send(comments);
        }) 
    }


}


module.exports =  commentcontroller;
