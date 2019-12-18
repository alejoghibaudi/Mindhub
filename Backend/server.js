const express =require('express');

require('dotenv').config();
const cors = require('cors');
require('./functions/database');

const app= express();

app.use(cors());
app.use(express.json());//para grabar la peticion

//definimos la primer entradada

app.use('/api',require('./routes/routerCity'));
app.use('/api',require('./routes/routerUser'));
app.use('/api',require('./routes/routerItinerary'));
app.use('/api',require('./routes/routerActivity'));
app.use('/api',require('./routes/routerComment'));
app.use('/api',require('./routes/routerFav'));
app.use(express.static('./public'));

app.listen(process.env.PORT,()=>console.log('Listening on port 5000'));

