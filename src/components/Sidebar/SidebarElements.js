import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkR} from "react-router-dom"
import {Link as LinkS} from "react-scroll"

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width:100%;
    height: 100%;
    background:${({lightTheme})=>(lightTheme? '#f6f6f6':'#121212')};
    display: grid;
    align-items: center;
    top: 0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity:${({isOpen})=>(isOpen?'100%':'0')};
    top: ${({isOpen})=>(isOpen? '0':'-100%')};
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right:1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const CloseIcon = styled(FaTimes)`
    color:${({lightTheme})=>(lightTheme? '#121212':'#ffffffd9')};

    &:hover{
        color: #f9bc50;
        transition: all 0.2 ease-in-out;
    }
`

export const SidebarWrapper = styled.div`
    color:${({lightTheme})=>(lightTheme? '#121212':'#ffffffd9')};
`

export const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6,60px);
    }
`
export const SidebarLink = styled(LinkS)`
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition:0.2s ease-in-out;
    text-decoration: none;
    color:${({lightTheme})=>(lightTheme? '#121212':'#ffffffd9')};
    cursor: pointer;

    &:hover{
        color: #f9bc50;
        background-color:#282418;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display:flex;
    justify-content:center;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: ${({lightTheme})=>(lightTheme? '#282418':'#f9bc50')};
    color: ${({lightTheme})=>(lightTheme?'#f9bc50':'#282418')};
    white-space: nowrap;
    padding: 12px 30px;
    font-size: 18px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({lightTheme})=>(lightTheme? '#f9bc50':'#f1d28e')};
        color: ${({lightTheme})=>(lightTheme? '#282418':'#282418')};
    }
`