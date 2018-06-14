import axios from "axios";
import CONGIF from "../config";

const getShortLink = (link) =>
    axios.get(`${CONGIF.API_ENDPOINT}/api/v1/es-link/create-es-link?link=${link}`);


export default {
    getShortLink
}