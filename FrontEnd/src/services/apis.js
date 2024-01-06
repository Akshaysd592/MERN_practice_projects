const BASE_URL = process.env.VITE_BASE_URL

export const todoApi = {
    GET_TODO: BASE_URL+"/get-todo/:id",
    GET_ALL_TODO: BASE_URL+"/get-all-todos",
    CREATE_TODO:BASE_URL+"/create-todo",
    UPDATE_TODO:BASE_URL+"/update-todo",
    DELETE_TODO:BASE_URL +"/delete-todo"
}