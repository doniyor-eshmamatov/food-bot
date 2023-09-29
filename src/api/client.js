import apiService from "./api-service"

const Client = {
    get: (url) => {
        return apiService.fetchData({
            method: 'get',
            url: url
        })
    },
    post: (url, data) => {
        return apiService.fetchData({
            method: 'post',
            url,
            data: { chat_id, ...data }
        })
    },
    patch: (url, data) => {
        return apiService.fetchData({
            method: 'patch',
            url,
            data: { chat_id, ...data }
        })
    },
    delete: (url) => {
        return apiService.fetchData({
            method: 'delete',
            url
        })
    },
}

export default Client