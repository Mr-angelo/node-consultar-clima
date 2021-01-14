const lugar = require('./lugar/lugar');
const clima = require('./lugar/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion del lugar a obtener el clima',
        demand: true
    }
}).argv;

/*
lugar.getLugarLatLng(argv.direccion)
    .then(console.log);

clima.getCLima(35, 139)
    .then(console.log)
    .catch(console.log);
*/

const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        //console.log(coordenadas);
        const temperatura = await clima.getCLima(coordenadas.lat, coordenadas.lng);
        //console.log(temperatura);

        return `El clima de ${coordenadas.address} es de ${temperatura.temperatura} con tiempo ${temperatura.descripcion}.`;

    } catch (err) {
        console.log('errooooor!!!!!');
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)