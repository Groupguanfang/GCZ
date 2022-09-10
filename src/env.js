const URL = 'https://td.xhhzs.cn/'
export default {
    axios: {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('cookie')
        },
        baseURL: URL
    }
}