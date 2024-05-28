import axios from 'axios'

export function axiosConfig({baseURL,authorization}:{baseURL:string,authorization:string}){
    axios.defaults.baseURL= baseURL
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.Authorization = `Bearer ${authorization}`;
    axios.defaults.timeout = 30000;
    axios.interceptors.response.use(
        (response) => response,
        (error: any) => {
            if (error?.response?.data?.httpStatus === 'BAD_GATEWAY') {
                throw new Error('서버 업데이트 중 입니다. 잠시만 기다려주세요');
            }
        }
    )
}