import React, {useContext, useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';
import {FlexDiv } from './PagesElements';
import { LightThemeContext } from '../LightThemeContext';
import ContactSection from '../components/ContactSection';
import ScrollToTop from '../components/ScrollToTop';

const Contact = () => {
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
                <ContactSection lightTheme={lightTheme}/>
                <Footer/>
            </FlexDiv>
        </>
    );
}

export default Contact