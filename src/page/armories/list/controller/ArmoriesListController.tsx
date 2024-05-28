import {SearchHistoryController} from "@package/store/searchHistory/searchHistory";
// import {useSuspenseQuery} from "@tanstack/react-query";
// import rankApi from "@package/api/api.rank";

export const ArmoriesListController = () => {

    const recentlySearch =  SearchHistoryController.getHistory()

    // const { data:rank } = useSuspenseQuery({
    //     queryFn:()=>rankApi.list(),
    //     queryKey:['ss']
    //
    // })

    return {
        // rank,
        recentlySearch
    };
};

