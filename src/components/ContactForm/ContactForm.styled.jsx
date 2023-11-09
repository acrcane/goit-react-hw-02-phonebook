import styled from "styled-components";

export const FormStyle = styled.div`
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 20px;
    border: 1px solid gray;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    font-weight: 500;
`;

export const Input = styled.input`
    margin-top: 10px;
    width: 200px;
    border: 1px solid black;
    border-radius: 2px;
    padding: 2px 10px;
`;

export const Button = styled.button`
    width: 96px;
    height: 24px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 5px;

    &:hover, &:focus {
        cursor: pointer;
        border-color: green;
        color: green;
}

&:disabled {
    cursor: auto;
    border-color: gray;
    color: gray;
    background-color: lightgray;
}
`;