import axios from "axios";

class ContentApi{

    async cad(){
        const res = await axios.get(`gamecontents/challenge-abyss-dungeons`)

        return res?.data
    }

    async cgr(){
        const res = await axios.get(`gamecontents/challenge-guardian-raids`)

        return res?.data
    }

    async calendar(){
        const res = await  axios.get(`gamecontents/calendar`)

        return res?.data
    }

}

export const contentApi = new ContentApi()