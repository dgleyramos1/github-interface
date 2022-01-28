import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 800px;
    justify-content: space-between;
    margin: 0 auto;

    input {
        border: 2px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        padding: 8px;
        font-weight: 500;

    }

    button {
        background-color: black;
        padding: 0 16px;
        margin: 0 16px;
        border-radius: 8px;
        font-weight: bold;
        font-size: 16px;
        color: white;
        font-weight: bold;
        border: 2px solid black;

        &:hover {
            background-color: white;
            color: black;
            border: 2px solid black;
            font-weight: bold;
        }

        
    }
`;