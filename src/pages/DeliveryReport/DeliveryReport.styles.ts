import styled from "styled-components";

export const HeaderContainer = styled.div`
    margin-left: 150px
    `

export const FormContainer = styled.div`
    border: solid black 2px;
    width: 400px;
    height: 300px;
    margin-left: 400px;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(4, 1fr);
    align-items: center;
    justify-items: center;

    & select {
        width: 200px;
    }
    & input {
        width: 200px;
    }
`

export const ButtonsContainer = styled.div`
    margin-left: 150px;
    margin-top: 50px;
    width: 300px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 8px;

`