import axios from 'axios';

const clienteAxios = axios.create({
    baseURL:'https://galleryserv.herokuapp.com/'//https://galleryserv.herokuapp.com-http://localhost:4000
})
export default clienteAxios;