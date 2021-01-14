//importación del paquete axios
const axios = require('axios');

//Función que obtiene datos de la api
const getLugarLatLng = async(direccion) => {
    //asignación de la direeción
    const encodedUrl = encodeURI(direccion);
    //console.log(encodedUrl);

    //Manejo del paquete axios
    const instance = axios.create({
        baseURL: `https://api.opencagedata.com/geocode/v1/json?q=${encodedUrl}&key=a60e72ab7ef0438c829f498ff868200f`
    });

    //petición get a la api
    const resp = await instance.get();

    //validación para saber si la respuesta tiene información
    if (resp.data.results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.results[0];
    const address = data.components.city;
    const lat = data.geometry.lat;
    const lng = data.geometry.lng;
    const flag = data.annotations.flag;

    return {
        data,
        address,
        lat,
        lng,
        flag

    }
}

module.exports = {
    getLugarLatLng

}