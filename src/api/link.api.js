import axios from "axios";
import CONGIF from "../config";

const getShortLink = (link,privateOnly) =>
    axios.get(`${CONGIF.API_ENDPOINT}/api/v1/es-link/create-es-link?link=${link}&privateOnly=${privateOnly}`);


export default {
    getShortLink
}