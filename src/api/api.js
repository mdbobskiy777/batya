import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "4d8a14cb-70f6-4374-951d-8062136c5543"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    postFollow(id) {
        return instance.post(`follow/${id}`).then(res => res.data)
    },
    deleteFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },
    auth() {
        return instance.get('auth/me/')
            .then(response => response.data);
    },

}
export const authAPI = {
    auth() {
        return instance.get('auth/me/')
            .then(response => response.data);
    },
    login({email, password, rememberMe}) {
        debugger
        return instance.post('auth/login', {email, password, rememberMe})
            .then(responce => responce.data.resultCode)
    },
    logout() {
        return instance.delete('auth/login')
            .then(responce => responce.data.resultCode)
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data);
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId).then(res => res.data)
    },
    updateStatus(status) {
        return instance.put('/profile/status/', {status}).then(res => res.data.resultCode)
    }
}


