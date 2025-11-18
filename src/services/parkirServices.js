import axios from "axios";

const REST_API_BASE_URL = "https://prg4.roniprsty.com/jenis/";

export const listParkir = () => axios.get(`${REST_API_BASE_URL}read.php`);

export const addParkir = (newParkir) => {
    return axios.post(`${REST_API_BASE_URL}create.php`, newParkir);
};

export const getParkirById = (id) => {
    return axios.get(`${REST_API_BASE_URL}detail.php?id=${id}`);
};

