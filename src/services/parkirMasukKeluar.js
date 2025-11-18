import axios from "axios";

const REST_API_BASE_URL = "https://api.roniprsty.com/parkir/";

export const listParkirMasukKeluar = () => axios.get(`${REST_API_BASE_URL}read.php`);

export const addParkirMasukKeluar = (newParkirMasukKeluar) => {
    return axios.post(`${REST_API_BASE_URL}create.php`, newParkirMasukKeluar);
};

export const getParkirMasukKeluarById = (id) => {
    return axios.get(`${REST_API_BASE_URL}detail.php?id=${id}`);
};

export const updateParkirMasukKeluar = (formData) => {
    return axios.put(`${REST_API_BASE_URL}update.php`, formData);
};

export const deleteParkirMasukKeluar = (id) => {
    return axios.get(`${REST_API_BASE_URL}delete.php?id=${id}`);
};
