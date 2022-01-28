import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 4px;
    border-radius: 8px;
    border: 1px solid black;
    width: 250px;
    height: 100px;
    align-content: center;
    margin: 4px 0;

    h2{
        font-size: 16px;
        color: black;
        font-weight: bold;
    }
    h4{
        font-size: 14px;
        color: rgba(0,0,0, 0.7);
    }

    a {
        color: black;
        transition: 1s;

        &:hover {
            color: red;
            transition: 1s;
        }
    }

`;