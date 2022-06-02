import axios from "axios";

const url = "http://127.0.0.1:3006/nadwyzka_wartosci_sprzedazy_nad_wartoscia_nominalna_udzialow";

export const  listaD3 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD3= async (nadwyzka_wartosci_sprzedazy_nad_wartoscia_nominalna_udzialow) => {
    return await axios.post(url, nadwyzka_wartosci_sprzedazy_nad_wartoscia_nominalna_udzialow);
}
export const  edytujD3 = async (id, nadwyzka_wartosci_sprzedazy_nad_wartoscia_nominalna_udzialow) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, nadwyzka_wartosci_sprzedazy_nad_wartoscia_nominalna_udzialow);
}
export const  usunD3 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}