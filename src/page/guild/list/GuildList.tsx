import {useController} from "@package/util";
import {GuildListController} from "./GuildListController";
import {ListView} from "@package/component";

export const GuildList = () => {

    const { guild,columns,state,setState } = useController(GuildListController)

    console.log(guild?.data)

    return (
        <div>
            <ListView
                columns={columns}
                data={guild?.data}
                state={state}
                setState={setState}
            />
        </div>
    );
};