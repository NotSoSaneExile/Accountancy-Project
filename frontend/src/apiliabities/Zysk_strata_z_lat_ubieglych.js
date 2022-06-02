import axios from "axios";

const url = "http://127.0.0.1:3006/Zysk_strata_z_lat_ubieglych";

export const  listaD7 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD7= async (Zysk_strata_z_lat_ubieglych) => {
    return await axios.post(url, Zysk_strata_z_lat_ubieglych);
}