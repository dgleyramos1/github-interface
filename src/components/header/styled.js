import styled from "styled-components";

export const wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input {
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        padding: 8px;
        font-weight: 500;

    }

    button {
        background-color: blue;
        padding: 8px 16px;
        margin: 0 8px;
        border-radius: 8px;
        font-weight: bold;
        font-size: 16px;
        transition: 1s;

        &:hover {
            background-color: black;
            color: white;
            transition: 1s;
        }

        span {
            font-weight: bold;
            color: #fff;
        }
    }
`;