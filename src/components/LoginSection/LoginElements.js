import { FaCommentDots } from "react-icons/fa"
import styled from "styled-components"

export const LoginContainer = styled.div`
    background-color: ${({lightTheme})=>(lightTheme? '#f6f6f6': '#1e2124')};
    margin-top:-80px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
`

export const LoginDetail = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    padding: 15px 30px;
    flex-direction: column;
`
export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
`

export const TitleH1 = styled.h1`
    font-size: 2.5rem;
    color: #ebbf5d;
    font-weight: 550;
    padding-bottom: 10px;

    @media screen and (max-width:480px){
        font-size: 2rem;
    }
`

export const LoginPaper = styled.div`
    background-color: #f0f0f0;
    margin: auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 1.5rem 1rem;
    justify-content: center;
    height: 100%;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const LoginH1 = styled.h1`
    font-size: 2.5rem;
    color: #36393e;
    font-weight: 550;
    padding-bottom: 10px;

    @media screen and (max-width:480px){
        font-size: 2rem;
    }
`

export const LoginContent = styled.form`
    //background-color: green;
    min-height: 300px;
    display:flex;
    padding: 2rem 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    width: 350px;

    @media screen and (max-width:530px){
        width: 200px;
    }

    @media screen and (max-width:430px){
        width: 150px;
    }
`

export const LabelWrapper = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    align-items:flex-start;
    justify-content:center;
`

export const Label = styled.label`
    color: ${({lightTheme})=>(lightTheme? '#36393e': '#ffffffd9')};
    padding-bottom: 0.3em;
    font-size: 18px;
    font-weight:600;
    letter-spacing: 1.2px;
`

export const Input = styled.input`
    background: ${({lightTheme})=>(lightTheme? "#e6e6e6":"#a8a8a8")};
    color: ${({lightTheme})=>(lightTheme? '#36393e': '#ffffffd9')};
    border-color: ${({lightTheme})=>(lightTheme? '#36393e':'#ffffffd9')};
    border-radius: 15px;
    border: 1px solid;
    width: 100%;
    margin-bottom: 0.1em;
    height: 2.5em;
    padding-left: 0.5em;
    font-size: 16px;
`

export const SubmitButton = styled.input`
    background: ${({lightTheme})=>(lightTheme? '#36393e':'#ebbf5d')};
    color: ${({lightTheme})=>(lightTheme?'#ebbf5d':'#36393e')};
    padding:12px 30px;
    font-size:16px;
    margin: 0 auto;
    margin-top: 2em;
    margin-bottom: -1em;
    border-radius: 50px;
    white-space: nowrap;
    outline: none;
    border:none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items:center;
    transition: all 0.2s ease-in-out;

    &:hover{
        background: ${({lightTheme})=>(lightTheme? '#ebbf5d':'#f1d28e')};
        color: ${({lightTheme})=>(lightTheme? '#36393e':'#36393e')};
        transition: all 0.2s ease-in-out;
    }
`