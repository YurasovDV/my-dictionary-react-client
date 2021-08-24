import axios from "axios";

export default axios.create({
    baseURL: "http://192.168.0.3:82/api/v1",
    headers: {
        "Content-type" : "application/json"
    }
});