import axios from "axios";

const REST_API_BASE_URL = "https://api.roniprsty.com/kuis/";

export const listInovasi = () => axios.get(`${REST_API_BASE_URL}read.php`);

export const addInovasi = (newInovasi) => {
   return axios.post(`${REST_API_BASE_URL}create.php`, newInovasi);
};

export const getInovasiById = (id) => {
   return axios.get(`${REST_API_BASE_URL}detail.php?id=${id}`);
};

export const updateInovasi = (id) => {
   const formData = { id };
   return axios.post(`${REST_API_BASE_URL}update.php`, formData);
};

export const deleteInovasi = (id) => {
   return axios.get(`${REST_API_BASE_URL}delete.php?id=${id}`);
};
