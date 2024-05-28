import axios from "axios";

class ArmoriesApi{
    async view ({characterName}:{characterName:string}){
        return axios.get(`armories/characters/${characterName}`)
    }

    async moreView (
        {characterName,detail}:{characterName:string,detail:string}
    ){
        return axios.get(`armories/characters/${characterName}?filters=${detail}`)
    }

}

export const armoriesApi = new ArmoriesApi()