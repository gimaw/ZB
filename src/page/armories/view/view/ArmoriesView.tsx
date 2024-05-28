// import React from 'react';
import {useController} from "@package/util";
import {ArmoriesViewController} from "../controller/ArmoriesViewController";

export const ArmoriesView = () => {

    const { character,armoriesProfiles }=useController(ArmoriesViewController)

    console.log(character,armoriesProfiles)

    return (
        <div>
            sssss
        </div>
    );
};

