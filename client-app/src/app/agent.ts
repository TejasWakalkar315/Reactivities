import Axios, { AxiosResponse } from 'axios';
import { IActivity } from './models/activity';

Axios.defaults.baseURL='http://localhost:5000/api'

const responseBody=(response:AxiosResponse)=>response.data;

const sleep = (ms: number) => (response: AxiosResponse) => 
    new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms));

const requests={
    get:(url:string)=>Axios.get(url).then(sleep(200)).then(responseBody),
    post:(url:string,body:{})=>Axios.post(url,body).then(sleep(200)).then(responseBody),
    put:(url:string,body:{})=>Axios.put(url,body).then(sleep(200)).then(responseBody),
    del:(url:string)=>Axios.delete(url).then(sleep(200)).then(responseBody)
}

export const Activities={
    list:():Promise<IActivity[]>=>requests.get('/Activities'),
    details:(id:string)=>requests.get(`/Activities/${id}`),
    create:(activity:IActivity)=>requests.post(`/Activities/`,activity),
    update:(activity:IActivity)=>requests.put(`/Activities/${activity.id}`,activity),
    delete:(id:string)=>requests.del(`/Activities/${id}`)
}