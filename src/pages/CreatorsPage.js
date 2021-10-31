import React, {useContext, useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';
import {FlexDiv } from './PagesElements';
import { LightThemeContext } from '../LightThemeContext';
import ScrollToTop from '../components/ScrollToTop';
import CreatorsSection from '../components/CreatorsSection';
import { BirdInfo, BoonInfo, NonInfo } from '../components/CreatorsSection/Data';

const Creators = () => {
    const {lightTheme, setLightTheme} = useContext(LightThemeContext);
    const togglelight = ()=>{
        return setLightTheme(!lightTheme);
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} lightTheme={lightTheme}/>
            <Navbar toggle={toggle} lightTheme={lightTheme} togglelight={togglelight}/>
            <FlexDiv>
                <CreatorsSection lightTheme={!lightTheme} {...BoonInfo}/>
                <CreatorsSection lightTheme={lightTheme} {...NonInfo}/>
                <CreatorsSection lightTheme={!lightTheme} {...BirdInfo}/>
                <Footer/>
            </FlexDiv>
        </>
    );
}

export default Creators