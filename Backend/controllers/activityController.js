const Activity = require('../models/activityModels');
const activitycontroller = {
	listaractividades: async (req, res) => {
		const data=await Activity.find();
        res.json({data});
	},
	borraractividades: async (req, res) => {
		var id = req.params.id;
		await Activity.findOneAndDelete({ _id: id }),
			res.json('Respuesta: Actividad Borrado'); 
	}, 
	modificaractividades: async (req, res) => {
		var id = req.params.id;
		var ciudad = req.body.ciudad;
		var img = req.body.img;
		var title=req.body.img;

		await Activity.findOneAndUpdate(
			{ _id: id },
			{ ciudad, 
			  img,
			  title
			 }
		);
		res.json({ Respuesta: 'Okey' });
	},
	cargaractividades: async (req, res) => {
		const {
			ciudad,
			img,
			title
		} = req.body;

		const nuevaactividad = new Activity({
			ciudad,
			img,
			title
		});

		await nuevaactividad.save(); //espera grabar 
		res.send('Actividad Cargada'); //luego manda el mesnaje
	}
};

module.exports = activitycontroller;
//EL ROUTER DERIVA EL METODO DE LA REQ