import axios from 'axios'

const GetRequest = async(url) => {
    try{
        const response = await axios.get(url);
        return response.data;
    }catch(error){
        return error;
    }
}

export default GetRequest;