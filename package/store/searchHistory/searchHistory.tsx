export class SearchHistoryController {
    static getHistory(){
        const historyString = localStorage.getItem('HISTORY')
        return historyString ? JSON.parse(historyString):[];
    }
    static saveHistory(add){
        const history = this.getHistory()
        history.unshift(add)

        localStorage.setItem('HISTORY',JSON.stringify(history))
    }

    static refreshHistory(edit){

        localStorage.setItem('HISTORY',JSON.stringify(edit))
    }

    static delHistory(del){
        const history = this.getHistory()
        const newHistory = history.filter((e)=>e!==del)

        localStorage.setItem('HISTORY',JSON.stringify(newHistory));
    }

    static clearHistory(){
        localStorage.removeItem('HISTORY')

    }

}