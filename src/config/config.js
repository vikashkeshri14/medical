import axios from "axios";
import config from "./config.json";
let error = {
  ERROR: "Something went wrong . Please try again",
};
export const getData = async (params) => {
  let apiUrl = params.url;
  try {
    const response = await axios.get(config.apiRoot + apiUrl);
    console.log(response);
    if (response["status"] == 200) {
      return response["data"];
    } else {
      return error;
    }
  } catch (error) {
    // handle error
    return error.message;
  }
};

export const postData = async (params) => {
  let apiUrl = params.url;
  let body = params.body;
  console.log(config.apiRoot + apiUrl);
  try {
    const result = await axios.post(config.apiRoot + apiUrl, body);
    //console.log(result["status"]);
    //return;
    if (result["status"] == 200) {
      return result["data"];
    } else {
      console.log(error);
      return error;
    }
  } catch (error) {
    return error;
  }
};
