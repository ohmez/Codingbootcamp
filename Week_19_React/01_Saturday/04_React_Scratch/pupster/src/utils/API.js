import axios from "axios";
const BASEURL = "https://dog.ceo/dog-api/";
const random = "breeds/image/random"

export default {
  search: function(query) {
    return axios.get(BASEURL +'breed/'+ query + '/images');
  },
  random: function() {
      return axios.get(BASEURL +random);
  },
};
