import {Card} from "@package/component/Card/Card";
import {Schedule, Content, Event} from "@src/page/main/view";
import {Page} from "@package/component";

export const Main = () => {

    return (
        <Page.Wrap>
            <Page.Contents>
                <div className="title">진행중인 이벤트</div>
                <Card>
                    <Event/>
                </Card>
            </Page.Contents>
            <Page.Contents>
                <div className="title">도전 컨텐츠</div>
                <Content/>
            </Page.Contents>
            <Page.Contents>
                <div className="title">일정</div>
                <Schedule/>
            </Page.Contents>
        </Page.Wrap>
    );
};

