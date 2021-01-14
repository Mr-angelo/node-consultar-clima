const axios = require('axios');

const getCLima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7dec47da4e5c60975f1c2621baea7aa0`);
    const temperatura = resp.data.main.temp;
    const descripcion = resp.data.weather[0].description;

    //console.log(resp.data);

    return {
        temperatura,
        descripcion
    }
}

module.exports = {
    getCLima
}