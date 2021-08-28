import axios from "axios";

export default axios.create({
    baseURL: "http://192.168.0.3:82/api/v1",
    headers: {
        "Content-type" : "application/json"
    }
});

export const isSuccessful = r => r?.data?.statusCode === 0;

export const getResponseDataOrThrow = r =>  {
  if (isSuccessful(r)) {
    return r.data.data;
  } else {
    throw new Error(r.data.errorText);
  }
};