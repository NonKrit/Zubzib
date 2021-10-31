import React from 'react'
import { FaFacebook, FaGithub, FaLine, FaLinkedin} from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import {animateScroll as scroll} from 'react-scroll';

const Footer = () =>{

    const toggleHome = ()=>{
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            Boondirek K.
                        </SocialLogo>
                        <WebsiteRights>Boondirek K. © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/boondirek.kanjanapongporn.9" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="https://line.me/ti/p/N99ekWnEJl" target="_blank" aria-label="Line">
                                <FaLine/>
                            </SocialIconLink>
                            <SocialIconLink href="https://github.com/Boondirek-Kanjanapongporn" target="_blank" aria-label="Github">
                                <FaGithub/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/boondirekk" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer