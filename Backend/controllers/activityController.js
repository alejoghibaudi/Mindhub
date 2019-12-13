const Activity = require('../models/activityModels');
const activitycontroller = {
	listaractividades: async (req, res) => {
		var ciudad = req.params.ciudad
		const data = await Activity.find({ciudad: ciudad});
		res.json({ data });
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

		await Activity.findOneAndUpdate(
			{ _id: id },
			{ ciudad, 
			  img
			 }
		);
		res.json({ Respuesta: 'Okey' });
	},
	cargaractividades: async (req, res) => {
		const {
			ciudad,
			img
		} = req.body;

		const nuevaactividad = new Activity({
			ciudad,
			img
		});

		await nuevaactividad.save(); //espera grabar 
		res.send('Actividad Cargada'); //luego manda el mesnaje
	}
};

module.exports = activitycontroller;
//EL ROUTER DERIVA EL METODO DE LA REQ