import axios from "axios";


export interface marketOption {
    Categories: marketOptionCategories[],
    ItemGrades: string[],
    ItemTiers: number[],
    Classes: string[]
}
export interface marketOptionCategories {
    Subs:{
        Code: number,
        CodeName: string
    }[],
    Code: 0,
    CodeName: string
}

export interface marketItem {
    // Sort: "GRADE",
    Sort: string,
    CategoryCode: 0,
    CharacterClass: string,
    ItemTier?: string|null,
    ItemGrade: string,
    ItemName: string,
    PageNo: number,
    SortCondition: "ASC"|"DEC"
}

class MarketApi{
    async options({
      Categories,
      ItemGrades,
      ItemTiers,
      Classes
    }:marketOption){
        return axios.get(`markets/options`,{
            params: {
                Categories:Categories,
                ItemGrades:ItemGrades,
                ItemTiers:ItemTiers,
                Classes:Classes
            }
        })
    }

    async postItem ({
        Sort,
        CategoryCode,
        CharacterClass,
        ItemTier,
        ItemGrade,
        ItemName,
        PageNo,
        SortCondition
    }:marketItem){
        return axios.post(`markets/items`,{
            Sort: Sort,
            CategoryCode: CategoryCode,
            CharacterClass: CharacterClass,
            ItemTier: ItemTier,
            ItemGrade: ItemGrade,
            ItemName: ItemName,
            PageNo: PageNo,
            SortCondition: SortCondition
        })
    }

    async getItem ({itemId}:{itemId?:string|null}
    ){
        return axios.get(`markets/items/${itemId}`)
    }
}


export const marketApi = new MarketApi()