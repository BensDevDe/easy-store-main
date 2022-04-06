import { css } from "styled-components"



 export const mobileS = (props) => {
    return css`
    @media only screen and (max-width: 480px){
        ${props}
    }
    `
 }

 export const mobileM = (props) => {
    return css`
    @media only screen and (max-width: 600px){
        ${props}
    }
    `
 }

export const tablet = (props) => {
   return css`
   @media only screen and (max-width: 1200px){
       ${props}
   }
   `
}

export const lscreen = (props) => {
    return css`
    @media only screen and (max-width: 1200px){
        ${props}
    }
    `
 }

