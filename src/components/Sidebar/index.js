import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';
import {Navbardata} from '../Navbardata';


const Sidebar= ({isOpen, toggle, lightTheme})=>{

    const sidebaritems = Navbardata.map((item,index)=>{
        return (
            <SidebarLink key={index} to={item.to} onClick={toggle} lightTheme={lightTheme}>{item.data}</SidebarLink>
        )
    })
    
    return (
        <SidebarContainer isOpen={isOpen} onClick = {toggle} lightTheme={lightTheme}>
            <Icon onClick={toggle}>
                <CloseIcon lightTheme={lightTheme}/>
            </Icon>
            <SidebarWrapper lightTheme={lightTheme}>
                <SidebarMenu>
                    {sidebaritems}
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to={{pathname: "https://github.com/Boondirek-Kanjanapongporn"}} target="_blank" onClick = {toggle} lightTheme={lightTheme}>Sign Up</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
        
};

export default Sidebar