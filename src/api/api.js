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
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data);
    }
}


