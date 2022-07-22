import styled from "styled-components";

export const ContactsList=styled.ul`
padding:0;
margin:0;
display:flex;
flex-direction:column;
width:100%;
`

export const ContactListItem=styled.li`
display:flex;
justify-content:space-between;
width:100%;
font-weight:600;
margin-bottom:10px;
`

export const Span=styled.span`
`

export const DeleteItemButton =styled.button`
padding:auto;
cursor:pointer;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
:hover{
    background-color:white;
};`