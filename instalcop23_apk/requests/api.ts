import axios ,{AxiosResponse}from "axios";

interface IParams{
    [key:string]:string|number|string[]|number[]|boolean
}

const api = axios.create({
    withCredentials:false
})

export async function getShit(){
    return api.get('https://jsonplaceholder.typicode.com/albums')
}