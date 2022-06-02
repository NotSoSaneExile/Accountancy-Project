import axios from "axios";

const url = "http://127.0.0.1:3006/pozostale_kapitaly_rezerowe";

export const  listaD6 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodaD6= async (pozostale_kapitaly_rezerowe) => {
    return await axios.post(url, pozostale_kapitaly_rezerowe);
}
export const  edytujD6 = async (id, pozostale_kapitaly_rezerowe) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, pozostale_kapitaly_rezerowe);
}
export const  usunD6 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}
