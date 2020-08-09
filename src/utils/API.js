import axios from "axios";

export const generateUsers = function() {
        return axios.get("https://randomuser.me/api/?results=500&nat=us")
    
};