const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

const FavouritesSchema = new Scheme({
  ItineraryId: {type: String,required: true},
  UserId: {type: String,required: true}
});

const Favourites = mongoose.model ('favourite', FavouritesSchema);

module.exports = Favourites;
