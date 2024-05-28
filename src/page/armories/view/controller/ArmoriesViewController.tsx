import {characterApi} from "@package/api";
import {armoriesApi} from "@package/api";
import { useParams } from 'react-router-dom';
import {useQuery} from "@tanstack/react-query";

export const ArmoriesViewController = () => {

    const { id }=useParams()

    const { data:character } = useQuery({
        queryFn:()=>characterApi.view({characterName:id}),
        queryKey:['characterName',id]
    })

    const { data:armoriesProfiles } = useQuery({
        //%2B
        //profiles, equipment, avatars, combat-skills, engravings, cards, gems, colosseums, collectibles,
        queryFn:()=>armoriesApi.moreView({
            characterName:id,
            detail:'cards%2Bequipment'
        }),
        queryKey:['characterName',id]
    })

    return {
        character,
        armoriesProfiles
    }
};
