import axios from "axios"
export default async(endpoint, method = 'GET', data = null)=>{
    const baseUrl = 'http://localhost:3000';
    const url = `${baseUrl}/${endpoint}`;
    const headers = {
        'Content-Type': 'application/json',
    };
    const requestOptions = {
        url,
        method,
        headers,
        data,
        withCredentials:true
    };
    if (data) {
        requestOptions.body = JSON.stringify(data);
    }
    try {
        const response = await axios(requestOptions);

        return response.data;

    } catch (error) {
        const errorHandled=new Error("internet problem try again");
        const {response}=error;
        if(response?.data?.msg){
            errorHandled.message=response.data.msg;
        }
        throw errorHandled
    }
}