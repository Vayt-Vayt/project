import axios from "axios"

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers:{"API-KEY": "162c7a6e-c8a1-4f32-8ca0-d2e8f0db39a3"}
})


export const userAPI = {
    getUsers: (currentPage, pageSize) => instance.get(
        `users?page=${currentPage}&count=${pageSize}`
        ).then(response => response.data),
    getUnFollow: (id) => instance.delete(`follow/${id}`).then((response) => response.data),
    getFollow: (id) =>  instance.post(`follow/${id}`).then((response) => response.data),
}

export const authAPI = {
    getAuth: () => instance.get(`auth/me`).then((response) => response.data),
    postAuth: (email, password, rememberMe = false ) =>
     instance.post(`auth/login`,{
        email: email, 
        password: password, 
        rememberMe: rememberMe , 
    })
        .then(response => response.data),
    logout: () => instance.delete(`auth/login`).then((response) => response.data)
    }



export const profileAPI = {
    getUser: (id) => instance.get(`profile/${id}`).then((response) => response.data),
    getUserStatus: (id) => instance.get(`profile/status/${id}`).then((response) => response.data),
    updateStatus: (status) => instance.put(`profile/status`, {status: status} ) 
 }