import baseService from "./base-service"



const apiService = {
    fetchData(param) {
        return new Promise((resolve, reject) => {
            baseService(param)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                reject(error)
            })
        })
    }
}

export default apiService