import React from 'react';
import {AboutContainer, AboutWrapper, AboutTitleContainer, AboutHeaderWrapper, AboutIconWrapper, ImgIcon, AboutH1, AboutDetail, AboutP} from './AboutElements';
import ZubzibIcon from '../../images/bee.png';
import { AboutData } from './Data';

const AboutSection = ({lightTheme}) =>{
    return (
        <AboutContainer lightTheme={lightTheme}>
            <AboutWrapper>
                <AboutTitleContainer>
                    <AboutHeaderWrapper>
                        <AboutIconWrapper>
                            <ImgIcon lightTheme={lightTheme} src={ZubzibIcon}/>
                        </AboutIconWrapper>
                        <AboutH1 lightTheme={lightTheme}>About Zubzib</AboutH1>
                    </AboutHeaderWrapper>
                    {/* <AboutH2>We are </AboutH2>
                    <AboutH2>We are </AboutH2> */}
                </AboutTitleContainer>
                <AboutDetail>
                    <AboutP>
                        {AboutData.frontend}
                    </AboutP>
                    <AboutP>
                        {AboutData.backend}
                    </AboutP>
                    <AboutP space={true}>
                        {AboutData.language}
                    </AboutP>
                    <AboutP>
                        {AboutData.detail}
                    </AboutP>
                </AboutDetail>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default AboutSection;