import axios from 'axios';
import { API_URL } from './config';

export class Facturation {
    statusPayment = async () => {
      try {
        // const response = await axios.get(`${API_URL}/facturationses/`, {})
        const response = await axios.get('/data.json')
        // console.log("response", response.data)
         } catch (error) {
            console.error(error)
         }
    } 
}
