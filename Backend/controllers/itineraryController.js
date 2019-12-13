const Itinerary = require('../models/itinerarymodels');
const itinerarycontroller = {
	listaritinerarios: async (req, res) => {
		var ciudad = req.params.ciudad
		const data = await Itinerary.find({ciudad: ciudad});
		res.json({ data });
	},
	borraritinerario: async (req, res) => {
		var id = req.params.id;
		await Itinerary.findOneAndDelete({ _id: id }),
			res.json('Respuesta: Itinerario Borrado'); 
	},
	modificaritinerario: async (req, res) => {
		var id = req.params.id;
		var ciudad = req.body.ciudad;
		var pais = req.body.pais;
		var username=req.body.username;
		var title= req.body.title;
		var profilepicture= req.body.profilepicture;
	    var rating= req.body.rating;
		var duration= req.body.duration;
		var price = req.body.price;
		var hashtag=req.body.hashtag;

		await Itinerary.findOneAndUpdate(
			{ _id: id },
			{ ciudad, 
			  pais, 
			  username,
			  title,
			  profilepicture,
			  rating,
			  duration,
			  price,
			  hashtag
			 }
		);
		res.json({ Respuesta: 'Okey' });
	},
	cargaritinerario: async (req, res) => {
		const {
			ciudad,
			username,
			title,
			profilepicture,
			rating,
			duration,
			price,
			hashtag
		} = req.body;

		const nuevoitinerario = new Itinerary({
			ciudad,
			username,
			title,
			profilepicture,
			rating,
			duration,
			price,
			hashtag
		});

		await nuevoitinerario.save(); //espera grabar 
		res.send('Ciudad Cargada'); //luego manda el mesnaje
	}
};

module.exports = itinerarycontroller;
//EL ROUTER DERIVA EL METODO DE LA REQ