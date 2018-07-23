import axios from "axios";
import CONGIF from "../config";

const getProxy = () =>
    axios.get(`${CONGIF.API_ENDPOINT}/api/v1/proxy`);


export default {
    getProxy
}