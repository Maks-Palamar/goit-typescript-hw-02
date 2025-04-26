import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";


export const fetchCards = async (query, page) => {
    // const options = {
    // client_id: 'sTgCl6c4AAr038-n007OfZuRCJKcqje3noGQHPTXGZY',
    // query: query,
    // page: page
    // }
    // const PARAMS = new URLSearchParams(options);

    const response = await axios.get(`search/photos`, {
        params: {
            client_id: 'sTgCl6c4AAr038-n007OfZuRCJKcqje3noGQHPTXGZY',
            query,
            page,
            per_page: 10,
            orientation: 'squarish'
        }
    });
    
    const hits = response.data.results;
    // console.log("rspns", hits);
    return hits;
};