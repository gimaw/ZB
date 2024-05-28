import axios from 'axios'


export interface CharacterType{
    ServerName: string,
    CharacterName: string,
    CharacterLevel: 0,
    CharacterClassName: string,
    ItemAvgLevel: string,
    ItemMaxLevel: string
}

class CharacterApi{

    async view({characterName}:{characterName:string}){
        return axios.get(`characters/${characterName}/siblings`)
    }

}

export const characterApi = new CharacterApi()

