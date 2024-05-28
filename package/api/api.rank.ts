import axios from 'axios'

class RankApi{
    async list(){
        return axios.get('rank')
    }
}

const rankApi = new RankApi();

export default rankApi