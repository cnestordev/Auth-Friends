import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid black;
    background: black;
    color: white;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    padding-top: 5%;

    h1 {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 2%;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 30%;
        margin: 1% auto;
    }

    input {
        background: #1f1f1f;
        border: none;
        border-radius: 4px;
        font-size: 1.4rem;
        color: gray;
        padding: 4% 8%;
        margin: 2% 0;
    }

    button {
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        padding: 3%;
        width: 50%;
        margin: 2% auto;
    }

    button:hover {
        background: #1f1f1f;
        color: gray;
        cursor: pointer;
    }
`

export const Box = styled.div`
    border: 1px solid black;

    form {
        display: flex;
        flex-direction: column;
        width: 30%;
        margin: 0 auto;
    }

    input {
        background: #1f1f1f;
        border: none;
        border-radius: 2px;
        padding: 1% 2%;
        margin: 1% 0;
    }

    button {
        border: 2px solid white;
        border-radius: 4px;
        color: white;
        background: transparent;
        padding: 1%;
        width: 50%;
        margin: 1% auto;
    }

    button:hover {
        background: black;
        color: white;
        cursor: pointer;
    }

    div.flexContainer {
        display: flex;
        flex-wrap: wrap;
        margin-top: 5%;
        padding: 1%;
    }

    div.box {
        background: transparent;
        color: white;
        border: 2px solid white;
        border-radius: 4px;
        margin: 1%;
        padding: 1%;
        width: 15%;
        text-align: center;
    }
`