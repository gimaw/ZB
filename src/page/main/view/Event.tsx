import {dateFormat, useController} from "@package/util";
import {MainController} from "@src/page/main";
import styled from "styled-components";
import {useEffect, useRef, useState} from "react";

interface EventItem{
    Link:string
    RewardDate?:string
    StartDate:string
    EndDate?:string
    Thumbnail:string
    Title:string
}

export const Event = () => {
    const { noticeData }=useController(MainController)
    // console.log(noticeData.data)

    const slideRef = useRef(null)

    const [ count,setCount ]=useState(0)


    const slideState = noticeData.length-1 > count

    const handleSlide = (event:'prev'|'next')=>{
        if(event==='prev'){
            if( count>0){
                slideRef.current.style.setProperty('transition-duration','0.5s')
                setCount(count - 1)
            }else {
                slideRef.current.style.setProperty('transition-duration','0.2s')
                // setCount(noticeData.data.length - 1)
                setCount(4)
            }
        }else{
            if(slideState){
                slideRef.current.style.setProperty('transition-duration','0.5s')
                setCount(count + 1)
            }else {
                slideRef.current.style.setProperty('transition-duration','0.2s')
                setCount(0)
            }
        }
    }

    useEffect(()=>{
        const slideTimer = setInterval(()=>{
            if(slideState){
                slideRef.current.style.setProperty('transition-duration','0.5s')
                setCount( count + 1)
            }else{
                slideRef.current.style.setProperty('transition-duration','0.2s')
                setCount(0)
            }
        },4000)

        return () =>clearInterval(slideTimer);
    },[count])


    return (
            <EventSlideStyle>
                <button
                    onClick={()=>handleSlide('prev')}
                    className={'slide--btn slide--btn--left'}
                >
                    <span></span>
                </button>
                <button
                    onClick={()=>handleSlide('next')}
                    className={'slide--btn slide--btn--right'}
                >
                    <span></span>
                </button>
                <ul className="wrap"
                    ref={slideRef}
                    style={{transform:`translateX( -${count * 100}%)`}}
                >
                    {noticeData?.map((e:EventItem,idx)=>(
                        <li
                            className={'item'}
                            key={idx}
                            id={`slide${idx}`}
                            data-label={idx}
                        >
                           <div className="item--img">
                               {/*<img src={e.Thumbnail} alt=""/>*/}
                           </div>
                           <div className="item--des">
                               <div className="item--des--tit">
                                   {/*{e.Title}*/}
                                   슬라이드 {idx}
                               </div>
                               <div className="item--des--date">
                                   <span>진행기간</span> {dateFormat(e.StartDate)}~{e.EndDate?dateFormat(e.EndDate):'-'}
                               </div>
                               <div className="item--des--date">
                                   <span>발표기간</span> {e.RewardDate?dateFormat(e.RewardDate):'-'}
                               </div>
                           </div>
                        </li>
                    ))}
                </ul>
            </EventSlideStyle>
    );
};

const EventSlideStyle = styled.div`
    width:100%;
    overflow:hidden;
    padding-left:20px;
    box-sizing:border-box;
    position:relative;
    .slide--btn{
        width:30px;
        height:30px;
        background:rgba(255,255,255,0.2);
        border-radius:50%;
        position:absolute;
        top:calc(90px);
        box-shadow:0 2px 4px rgba(0,0,0,0.1);
        z-index:2;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        span{
            width:30px;
            height:30px;
            position:relative;
            &::before, &::after{
                content:'';
                display:block;
                width:12px;
                height:2px;
                background:var(--txt-colorC);
                position:absolute;
                border-radius:1px;
            } 
        }
        &:hover{
            span{
                &::before, &::after{
                    background:var(--primary-color);
                }
            }
        }
        &--left{
            left:10px;
            span{
                &::before{
                    transform:rotate(-45deg);
                    top:10px;
                    left:8px;
                } 
                &::after{
                    transform:rotate(45deg);
                    bottom:11px;
                    left:8px;
                }
            }
        }
        &--right{
            right:10px;
            span{
                &::before{
                    transform:rotate(45deg);
                    top:10px;
                    right:8px;
                } 
                &::after{
                    transform:rotate(-45deg);
                    bottom:11px;
                    right:8px;
                }
            }    
        }
    }
    .wrap{
        display:flex;
        align-items:flex-start;
        justify-content:flex-start;
        flex-wrap:nowrap;
    }
    .item{
        width:calc(100% - 20px);
        margin-right:20px;
        flex-shrink: 0;
        &--img{
            width:100%;
            height:200px;
            background:rgba(0,0,0,0.03);
            border-radius:5px;
            box-sizing:border-box;
            margin-bottom:20px;
            img{  
                width:100%;
            }
        }
        &--des{
            display:flex;
            flex-direction:column;
            width:100%;
            gap:5px;       
            &--tit{
                width:100%;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
                color:var(--txt-colorB);
                font-size:16px;
                font-weight:700;
            }
            &--date{
                font-size:14px;
                font-weight:400;
                display:flex;
                align-items:center;
                justify-content:flex-start;
                width:100%;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
                span {
                    font-size:12px;
                    font-weight:400;
                    color:var(--txt-colorB);
                    margin-right:20px;
                }
            }
        }
    }
`
