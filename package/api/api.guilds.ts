import axios from "axios";

class GuildsApi{
    async rank(serverName:string){
        return axios.get(`guilds/rankings?serverName=${serverName}`)
    }
}

export const guildsApi = new GuildsApi()