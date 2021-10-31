import React from 'react'
import { ContactContainer, ContactWrapper, ContactH1, FormContainer, Container1, Container2, LabelWrapper, Label, Input, TextArea, SubmitButton } from './ContactElements'
import emailjs from 'emailjs-com'


const ContactSection =({lightTheme})=>{

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_4p4tf62', 'Boonwebsite_q3h1bqx', e.target, 'user_9uv7upchxynuvKyfrtwTC')
          .then((result) => {
                console.log(result.text);
                alert("Thank you for sending us a message!!!\nWe will get to you as soon as possible!!!");
            }, 
            (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }

    return (
        <>
            <ContactContainer id="contact" lightTheme={lightTheme}>
                <ContactWrapper className="container">
                    <ContactH1>Contact Us</ContactH1>
                    <FormContainer onSubmit={sendEmail}>
                        <Container1 class="form-row">
                            <LabelWrapper class="form-group col-md-6">
                                <Label lightTheme={lightTheme} for="name">Name</Label>
                                <Input lightTheme={lightTheme} type="text" class="form-control" id="name" placeholder="Name" name="name"/>
                            </LabelWrapper>
                            <LabelWrapper class="form-group col-md-6">
                                <Label lightTheme={lightTheme} for="email">Email</Label>
                                <Input lightTheme={lightTheme} type="email" class="form-control" id="email" placeholder="Email Address" name="email"/>
                            </LabelWrapper>
                        </Container1>
                        <Container2>
                            <LabelWrapper class="form-group">
                                <Label lightTheme={lightTheme} for="subject">Subject</Label>
                                <Input lightTheme={lightTheme} type="text" class="form-control" id="subject" placeholder="Subject" name="subject"/>
                            </LabelWrapper>
                            <LabelWrapper class="form-group">
                                <Label lightTheme={lightTheme} for="message">Message</Label>
                                <TextArea lightTheme={lightTheme} class="form-control" id="message" placeholder="Your Message" name="message"/>
                            </LabelWrapper>
                            <LabelWrapper className="col-8 pt-3 mx-auto">
                                <SubmitButton lightTheme={lightTheme} type="submit" value="Send Message"/>
                            </LabelWrapper>
                        </Container2>
                    </FormContainer>
                </ContactWrapper>
            </ContactContainer>
        </>
    )
}

export default ContactSection