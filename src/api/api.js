import * as axios from "axios";

const instance = axios.create({
    baseURL: " https://api.owler.com/v1/company/"
});

export const companiesAPI = {
    searchCompany(query){
        return(
            instance.get
        )
    }
}
