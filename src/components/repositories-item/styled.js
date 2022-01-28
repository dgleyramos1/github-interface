import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    width: 250px;
    height: 100px;
    align-content: center;

    a {
        color: blue;
        transition: 1s;

        &:hover {
            color: black;
            transition: 1s;
        }
    }

`;