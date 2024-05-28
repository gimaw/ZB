import {useContext,  useState} from 'react';
import {Style} from "./style";
import {Button, Icon, Input} from "../../component";
import {ThemeContext} from "../../util/theme/theme";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import {SearchHistoryController} from "../../store/searchHistory/searchHistory";

export const Header = () => {

    const {style,setStyleHandler}=useContext(ThemeContext)

    const handleTheme = ()=>{
        //console.log(theme)
        setStyleHandler(style)
    }

    return (
        <Style>
            <SearchBar/>

            <Button.Shadow onClick={()=>console.log()}>
                <Icon
                    image={'user'}
                    height={'20px'}
                    width={'20px'}
                    color={style==='light'?'var(--primary-color)':'var(--txt-colorA)'}
                />
            </Button.Shadow>
            <Button.Shadow onClick={handleTheme}>
                <Icon
                    image={'sun'}
                    height={'20px'}
                    width={'20px'}
                    color={style==='light'?'var(--primary-color)':'var(--txt-colorA)'}
                />
            </Button.Shadow>
        </Style>
    );
};

const SearchBar = ()=>{

    const navigate = useNavigate()

    const [ keyWord, setKeyWord ] = useState('')

    const [ dropDown, setDropDown]=useState(false)

    const [ dropDownList ,setDropDownList ]=useState(SearchHistoryController.getHistory() ?? [])

    const handleSearch = ()=>{
        if(dropDownList.includes(keyWord)){
            const updateHistory = [keyWord,...dropDownList.filter((i)=>i!==keyWord)]

            SearchHistoryController.refreshHistory(updateHistory)
            setDropDownList(updateHistory)
        }else{
            SearchHistoryController.saveHistory(keyWord)
            setDropDownList([keyWord,...dropDownList])
        }
        navigate(`/armories/${keyWord}`)
    }

    const handleMove =(e)=>{
        setKeyWord(e)
        setDropDown(false)
        navigate(`/armories/${e}`)
    }

    const handleDel = (e) =>{
        setDropDownList(
            dropDownList.filter((i)=>i!==e)
        )
        SearchHistoryController.delHistory(e)
    }

    const handleClear = () =>{
        setDropDownList([])
        SearchHistoryController.clearHistory()
    }

    const handleBlur = (e)=>{
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setDropDown(false)
        }
    }

    return (
        <SearchBarStyle>
            <div className="wrap"
                 // onFocusOut={()=>setDropDown(false)}
                 onBlur={(e)=>handleBlur(e)}
            >
                <Input
                    value={keyWord}
                    onChange={(e)=>setKeyWord(e)}
                    onFocus={()=>setDropDown(true)}
                    onKeyPress={handleSearch}
                    width={'calc(100% - 30px)'}
                    btn={
                    <Icon
                        onClick={handleSearch}
                        image={'search'}
                        height={'20px'}
                        width={'20px'}
                        style={{margin:'0 10px',cursor:'pointer' }}
                    />
                }/>
                {dropDown&&(
                    <div className="dropDown"

                         // onFocus={()=>setDropDown(true)}
                    >
                        {dropDownList.length > 0?(
                            <>
                                <ul className="dropDown--list">
                                    {dropDownList?.map((e:string)=>(
                                        <li key={e}>
                                           <button
                                               className='dropDown--list--move'
                                               onClick={()=>handleMove(e)}
                                           >{e}</button>
                                           <button
                                              className='dropDown--list--del'
                                              onClick={()=>handleDel(e)}
                                           >X</button>
                                        </li>
                                    ))}
                                </ul>
                                <button className="dropDown--del" onClick={handleClear}>
                                    검색 기록 전체 삭제
                                </button>
                            </>
                        ):(
                            <div className="dropDown--empty">검색 기록이 없습니다.</div>
                        )}
                    </div>
                )}
            </div>
        </SearchBarStyle>
    )
}

const SearchBarStyle= styled.div`
   flex:1;
   border-radius:5px;
   box-shadow:rgba(0, 0, 0, 0.08) 0px 5px 10px;
   position:relative;
   .wrap{
        width:100%;
        position:absolute;
        left:0;
        top:0;
   }
   .dropDown{
        padding:15px 20px;
        box-sizing:border-box;
        border-top:1px solid var(--border-color);
        background:var(--white-color-dark);
        width:100%;
        z-index:2;
        border-bottom-left-radius:5px;
        border-bottom-right-radius:5px;
        &--del{
            color:var(--txt-colorA);
            cursor:pointer;
            margin-left:auto;
            margin-top:5px;
            font-size:10px;
            display:block;
        }
        &--empty{
            color:var(--txt-colorA);
            margin-top:5px;
            font-size:14px;
            display:block;
            text-align:center;
        }
        &--list{
            
            li{
                display:flex;
                align-items:center;
                justify-content:space-between;
            }
            &--move{
                color:var(--txt-colorA);
                cursor:pointer;
                line-height:1.8;
            }
            &--del{
                color:var(--txt-colorA);
                cursor:pointer;
            }
        }
   }
   
`
