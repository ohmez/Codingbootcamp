import axios from 'axios';
const API = {
    getCustomers: function () {
        return axios.get('/api/customers');
    }
}
export default API;