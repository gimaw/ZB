import axios from "axios";

class AuctionsApi{
    async list(){
       return axios.get(`auctions/options`)
    }
}

export const auctionsApi = new AuctionsApi()