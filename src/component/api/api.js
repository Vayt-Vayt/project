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
    getAuth: () => instance.get(`auth/me`).then((response) => response.data),
    getUnFollow: (id) => instance.delete(`follow/${id}`).then((response) => response.data),
    getFollow: (id) =>  instance.post(`follow/${id}`).then((response) => response.data),
    getUser: (id) => instance.get(`profile/${id}`).then((response) => response.data)
}
