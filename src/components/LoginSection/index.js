import React from 'react';
import {LoginContainer, LoginDetail, Title, TitleH1, LoginPaper, LoginH1, LoginContent, LabelWrapper, Label, Input, SubmitButton} from "./LoginElements"


const LoginSection = ({lightTheme}) => {
    function printMessage(e) {
        e.preventDefault();
        console.log("Button clicked");
    }

    return (
        <LoginContainer lightTheme={lightTheme} id="/">
            {/* <LoginBg>
                <ImageBg></ImageBg>
            </LoginBg> */}
            <LoginDetail>
                <Title>
                    {/* <ImageWrapper>
                        <Image></Image>
                    </ImageWrapper> */}
                    <TitleH1>
                        Welcome to Zubzib!!!
                    </TitleH1>
                </Title>
                <LoginPaper>
                    <LoginH1>
                        Log In
                    </LoginH1>
                    <LoginContent onSubmit={printMessage}>
                        <LabelWrapper class="form-group col-md-6">
                            <Label lightTheme={lightTheme} for="name">Username or Email</Label>
                            <Input lightTheme={lightTheme} type="text" class="form-control" id="name" placeholder="Name or Email" name="name"/>
                        </LabelWrapper>
                        <LabelWrapper class="form-group col-md-6">
                            <Label lightTheme={lightTheme} for="email">Password</Label>
                            <Input lightTheme={lightTheme} type="password" class="form-control" id="password" placeholder="Password" name="email"/>
                        </LabelWrapper>
                        <LabelWrapper className="col-8 pt-3 mx-auto">
                                <SubmitButton lightTheme={lightTheme} type="submit" value="Log In"/>
                        </LabelWrapper>
                    </LoginContent>
                </LoginPaper>
            </LoginDetail>
        </LoginContainer>
    )
}

export default LoginSection