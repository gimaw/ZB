import {WidgetStyle} from "./style";
import {Icon} from "../../component";

export const SideWidget = () => {
    return (
        <WidgetStyle>
            <button className="widget--btn">
                <Icon
                    image={'star'}
                    height={'20px'}
                    width={'20px'}
                    color={'var(--txt-colorC)'}
                />
            </button>
            <button
                className="widget--btn"
                style={{color:'var(--txt-colorC)'}}
            >
                VS
            </button>
        </WidgetStyle>
    );
};

