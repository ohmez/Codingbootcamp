import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=132b13a3";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
