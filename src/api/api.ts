import axios from "axios";
import {UserType} from "../redux/users-reducer";
import {ProfileType} from "../redux/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "4d8a14cb-70f6-4374-951d-8062136c5543"
    }
});
type userAPIMyType = {
    items: Array<UserType>
    totalCount: number
    error: null
}

export enum ResultCodes {
    Success = 0,
    SomethingFailed = 1
}

type userAPIFollowType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
type userAPIDeleteType = {
    resultCode: number
    messages:Array<string>
    data:{}
}
type userAPIAuthMeType = {
    resultCode: number
    messages: Array<string>
    data:{
        id:number
        email:string
        login:string
    }
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<userAPIMyType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    postFollow(id: number) {
        return instance.post<userAPIFollowType>(`follow/${id}`).then(res => res.data)
    },
    deleteFollow(id: number) {
        return instance.delete<userAPIDeleteType>(`follow/${id}`)
            .then(response => response.data);
    },
    auth() {
        return instance.get<userAPIAuthMeType>('auth/me/')
            .then(response => response.data);
    }
}
export type PostFollowType = typeof usersAPI.postFollow
export type DeleteFollowType = typeof usersAPI.deleteFollow

type LoginDataType = {
    email: string
    password: string
    rememberMe: boolean | null
    captcha: string | null
}
type AuthDataType = {
    id:number
    email:string
    login:string
}
type AuthType = {
    data:AuthDataType
    resultCode:ResultCodes
    messages:Array<string>
}
export const authAPI = {
    auth() {
        return instance.get<AuthType>('auth/me/')
            .then(response => response.data);
    },
    login({email, password, rememberMe = false, captcha = null}: LoginDataType) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return instance.delete('auth/login')
            .then(response => response.data.resultCode)
    }
}
export const securityAPI = {
    getCaptchaURL() {
        debugger
        return instance.get('security/get-captcha-url').then(response => response.data);
    }
}
export type profileAPIProfileType = {
    resultCode: number
    messages : Array<string>
    data:{}
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
            .then(response => response.data);
    },
    getStatus(userId: number) {
        return instance.get('profile/status/' + userId).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put('/profile/status/', {status}).then(res => res.data.resultCode)
    },
    savePhoto(photo: any) {
        let formData = new FormData()
        formData.append("image", photo)
        return instance.put('/profile/photo/', formData, {
            headers: {
                "Content-Type":
                    "multipart/form-data"
            }
        }).then(res => res)
    },
    saveProfile(profileData: ProfileType) {
        return instance.put<profileAPIProfileType>('/profile/', profileData).then(res => res.data)
    }
}


