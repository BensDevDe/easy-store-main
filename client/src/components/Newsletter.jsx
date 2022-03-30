import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { useState } from "react"

const Container = styled.div
`
height:40vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction: column;
border-top:0.5px solid lightgray;
`
const Title = styled.h1
`
font-size:40px;
margin-bottom: 20px;
font-weight:500;
`
const Description  = styled.div
`
font-size: 24px;
font-weight: 300;
margin-bottom:20px;
`
const Form = styled.form
`
 width:30%;
 height:40px;
 background-color: transparent;
 display:flex;
 justify-content:space-between;
 border:2px solid lightgray;
`
const Input= styled.input
`
background-color: transparent;
border:none;
flex:7;
padding-left:20px;
`
const Button = styled.button
`
flex:1;
border:none;
background-color: #a47ca6;
color: #252525;
cursor:pointer;
`


const Newsletter = () => {
   const [email, setEmail] = useState('');
   const [subscribe, setSubscribe] = useState(false);

   const handleSubmit = (e) => {
       e.preventDefault()
    
       if (email !== '') {
        setSubscribe(true);
        if (localStorage.getItem('newsletter')) {
            const list = JSON.parse(localStorage.getItem('newsletter'));
            list.push(email);
            localStorage.setItem('newsletter', JSON.stringify(list));
        }
        else {
            const list  = []
            list.push(email)
            localStorage.setItem('newsletter', JSON.stringify(list));
        }   
       }
   }

    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Subscribe to our newsletter to get the latest updates!</Description>
            {subscribe ? 
            <h3>Thanks for subscribing</h3>  : 
            <Form onSubmit={handleSubmit}>
             <Input 
             placeholder='Email'
             type="email"  
             required
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             />
             <Button type="submit" >
                 <Send />
             </Button>
            </Form>
}
        </Container>
    )
}


export default Newsletter


