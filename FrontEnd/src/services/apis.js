// const BASE_URL = process.env.VITE_BASE_URL // for react app process.env
// const BASE_URL = import.meta.env.VITE_BASE_URL;
// let BASE_URL = import.meta.env.VITE_BASE_URL;
// console.log("inside api.js" , BASE_URL);

console.log(`${import.meta.env.VITE_BASE_URL}`) // problem not getting .env variables


export const todoApi = {
    // GET_TODO: BASE_URL+"/get-todo/",
    GET_TODO : `http://localhost:3000/api/v1/todo/get-todo/`,
    // GET_ALL_TODO: BASE_URL +"/get-all-todos",
    GET_ALL_TODO : "http://localhost:3000/api/v1/todo/get-all-todos",
    // CREATE_TODO:BASE_URL+"/create-todo",
    CREATE_TODO: `http://localhost:3000/api/v1/todo/createtodo`,
    // UPDATE_TODO:BASE_URL+"/update-todo",
    UPDATE_TODO: `http://localhost:3000/api/v1/todo/update-todo/`,
    // DELETE_TODO:BASE_URL +"/delete-todo"
    DELETE_TODO :"http://localhost:3000/api/v1/todo/delete-todo/"
}