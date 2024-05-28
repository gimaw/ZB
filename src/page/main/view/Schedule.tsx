import {useState} from "react"; // css import
import {dateFormat, useController} from "@package/util";
import {MainController} from "@src/page/main";
import Calendar from 'react-calendar';
import styled from "styled-components";
import dayjs from "dayjs";
import moment from "moment";
// import 'react-calendar/dist/Calendar.css';



export const Schedule = () => {

    const { calendarData, copySchedule } = useController(MainController)

    const [value, onChange] = useState(new Date());

    const thisMonth = moment().format("MMMM");

    console.log(thisMonth);

    console.log('cal',value, copySchedule )

    //const schedule = calendarData?.data.reduce

    return (
        <CalendarStyle>
            <Calendar
                formatDay={(locale, date) => dayjs(date).format('DD')}
                onChange={onChange}
                value={value}
                tileContent={
                    (date)=>{

                        const result = copySchedule.find((w)=> dateFormat(w.StartDay) ===  dateFormat(date?.date.toString()))

                        console.log( result)
                        return <div className='calendar-cnt'>
                            {result?result.CategoryName + ':' : ''}{result?.ContentsName ?? ''}
                         </div>
                    }
                    // TileContent
                }
            />
        </CalendarStyle>
    );
};

// const TileContent = (date) => {
//     console.log(date)
//     // console.log(date?.date.toString())
//     // console.log(calendarData)
//     // const { calendarData } = useController(MainController)
//
//     return (
//         <div className='calendar-cnt'>
//             {date?.date.toString()}
//             {/*{date?.date}*/}
//         </div>
//     );
// };

const CalendarStyle = styled.div`
    // padding:30px;
    box-sizing:border-box;
    background:var(--white-color);
    border-radius:10px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.07);
    .react-calendar{
        &__navigation{
            padding:15px;
            box-sizing:border-box;
            display:flex;
            align-items:center;
            justify-content:center;
        }
        &__month-view__weekdays__weekday{
            text-align:center;
            padding:15px;
            box-sizing:border-box;
            background:var(--border-color);
            abbr{
                color:var(--white-color);
                text-decoration:none;
            }
        }
        &__tile.react-calendar__month-view__days__day{
            box-sizing:border-box;    
            aspect-ratio:1/1;
            position:relative;
            //background:rgba(0,0,0,0.1);
            //border-radius:10px;
            abbr{
                // position:absolute;
                // left:10px;
                // top:10px;
                opacity:0.8;
                display:block;
                width:100%;
                padding:10px 12px 0;
                box-sizing:border-box;
                text-align:left;
                vertical-align:bottom;
            }            
            &.react-calendar__month-view__days__day--neighboringMonth{
                opacity:0.2;
            }
            .calendar-cnt{
                height:calc(100% - 26px);
                text-align:left;
                padding:0 12px 10px;
                box-sizing:border-box;
            }
        }
       
    }
`