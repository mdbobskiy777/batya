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
    login({email, password, rememberMe = false, captcha = null}) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return instance.delete('auth/login')
            .then(response => response.data.resultCode)
    }
}
export const securityAPI = {
    getCaptchaURL(){
        debugger
        return instance.get('security/get-captcha-url').then(response => response.data);
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
    },
    savePhoto(photo) {
        let formData = new FormData()
        formData.append("image", photo)
        return instance.put('/profile/photo/', formData, {
            headers: {
                "Content-Type":
                    "multipart/form-data"
            }
        }).then(res => res)
    },
    saveProfile(profileData) {
        return instance.put('/profile/', profileData).then(res => res)
    }
}


