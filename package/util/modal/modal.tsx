import {createContext, ReactNode, useState} from "react";
import styled from "styled-components";
import {createPortal} from "react-dom";

export interface IDialogProps {
    title?: string;
    subTitle?: string | React.ReactNode;
    width?: number | string;
    content: string | React.ReactNode;
    backdropClose?: boolean;
    textAlign?: 'left' | 'center' | 'right';
    onClose?: () => void;
    onOk?: () => void;
}


export const ModalContext = createContext<{
    closeModal: () => void;
    confirm: () => void;
    newModal: ({
           props,
           index,
           onClose,
           defaultLayout,
       }: {
            props: IDialogProps;
            onClose?: () => void;
       }) => void;
}>({
    closeModal: () => {},
    newModal: () => {},
    confirm: () => {},
});


export const ModalProvider = ({
    children,
}:{
    children:ReactNode,
}) => {

    const [modalContent, setModalContent] = useState<ReactNode | null>(null);

    const newModal = ({
        props,
        // onConfirm,
    }:{
        props:IDialogProps,
        // onConfirm:()=>void
    })=>{

        const modal = createPortal(
            <ModalStyle>
                <div className="modal--content">
                    {props.title&&(
                        <div className="modal--content--title">
                            {props.title}
                        </div>
                    )}
                    <div className="modal--content--body">
                        {props.content}
                    </div>
                    <div className="modal--content--btn">
                        <button className={'confirm'} onClick={props.onOk}>확인</button>
                        <button onClick={props.onClose}>취소</button>
                        {/*<button onClick={()=>alert()}>취소</button>*/}
                    </div>
                </div>
                <div className="modal--bg" onClick={props.onClose}></div>
            </ModalStyle>,
            document.body,
        )

        setModalContent(modal)
    }


    const closeModal=()=>{
        setModalContent(null)
    }

    const confirm=()=>{
        setModalContent(null)
    }


    return (
        <ModalContext.Provider
            value={{
                newModal,
                closeModal,
                confirm
            }}
        >
            {/*{modalContent && createPortal(modalContent, document.body)}*/}
            {modalContent && modalContent}
            {children}
        </ModalContext.Provider>
    );
};



const ModalStyle = styled.div`
    width:100%;
    height:100vh;
    position:fixed;
    top:0;
    left:0;
    z-index:99;
    display:flex;
    align-items:center;
    justify-content:center;
    .modal{
        &--content{
            &--title{
                padding:10px 20px;
                box-sizing:border-box;
                border-bottom:1px solid var(--border-color);
                color:var(--txt-colorB);
                font-weight:600;
            }
            background:var(--white-color);
            border-radius:10px;
            min-width:300px;
            &--body{
                padding:20px;
                box-sizing:border-box;
                font-size:14px;
                color:var(--txt-colorA);
            }
            &--btn{
                border-top:1px solid var(--border-color);
                box-sizing:border-box;
                display:flex;
                align-items:center;
                justify-content:center;
                button{
                    flex:1;
                    padding:10px;
                    box-sizing:border-box;
                    color:var(--txt-colorA);
                    cursor:pointer;
                    &.confirm{
                        color:var(--primary-color);
                        font-weight:500;
                    }
                }
            }
        }
        &--bg{
            cursor:pointer;
            background:rgba(0,0,0,0.4);
            position:absolute;
            left:0;
            top:0;
            width:100%;
            height:100%;
            z-index:-1;
        }
    }
    
`