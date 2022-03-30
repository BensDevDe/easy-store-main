import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';


const Container = styled.div`
border-top:0.5px solid lightgray;
position:relative;
border-bottom:0.5px solid #736f6f;
`
const ContainerBg = styled.div`
width:20px;
height:100%;
background-color: #a47ca6;
position:absolute;
`

const ContainerWrapper = styled.div`
padding:50px;
display:flex;
`
const Left = styled.div`
flex:1;
`
const H1 = styled.h1`
width:80%;
font-size:28px;
`
const Info = styled.div`
font-size: 18px;
`
const InfoItem = styled.div`
display:flex;
align-items:center;
font-weight:400;
`

const Image = styled.img`
width:150px;
height:150px;
margin-right:20px;
`
const Right = styled.div`
flex:1;
display:flex;
align-items:csnter;
justify-content:center;
flex-direction:column;
`
const DescP = styled.div`
font-weight: 300;
font-size:28px;
`
const Form = styled.form`
margin-top:30px;
display:flex;
flex-direction:column;
`

const Input = styled.input`
width:50%;
height:50px;
border:none;
border-bottom :1px solid #736f6f;
margin:10px 0px;
font-size:18px;
padding-left:10px;
background-color:transparent;
`

const Textarea = styled.textarea`
background-color:transparent;
width:80%;
margin:10px 0px;
font-size:18px;
padding-left:10px;
border-radius:8px;
`
const Button = styled.button`
background-color:#a47ca6;
border:none;
padding:10px;
font-size:18px;
width: fit-content;
border-radius:8px;
font-weight:500;
cursor:pointer;
`

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_96q2nqr', 'template_viarkx3', formRef.current, 'user_QG6fcGKNllP2IHcRNC6TV')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <Container>
        <ContainerBg></ContainerBg>
        <ContainerWrapper>
            <Left>
                <H1>Contact us for more info</H1>
                <Info>
                    <InfoItem>
                    <Image src = {process.env.PUBLIC_URL+"/images/contact_email.png"}></Image>
                    easy-store@gmail.com
                    </InfoItem>
                    <InfoItem>
                    <Image src = {process.env.PUBLIC_URL+"/images/contact_phone.png"}></Image>
                    +49 30012345
                    </InfoItem>
                    <InfoItem>
                    <Image src = {process.env.PUBLIC_URL+"/images/contact_jobs.png"}></Image>
                    easystore-jobs@gmail.com
                    </InfoItem>
                </Info>
            </Left>
            <Right>
                <DescP><b>How can we help you ?</b> Get in touch. We are here for you 24/7</DescP>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input type="text" placeholder='Name' name='user_name' />
                    <Input type="text" placeholder='Subject' name='user_subject' />
                    <Input type="text" placeholder='Email' name='user_Email' />
                    <Textarea rows="5" placeholder='Message' name='message'></Textarea>
                    <Button>Send</Button>
                    {done && 'Message sent, Thank you!'}
                </Form>
            </Right>
        </ContainerWrapper>
    </Container>
  )
}

export default Contact