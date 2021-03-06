import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';



export const Wrapper = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
`;
export const WrapperTabs = styled(Tabs)`
 font-size: 16px;
 width: 100%;
 margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid black;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    margin-right: 4px;
    color: black;

    &:focus{
        outline: none;
        
    }

    &.is-selected{
        border-bottom: 1px solid white; 
    }
`;
WrapperTab.tabsRole = "Tab";


export const WrapperTabPanel = styled(TabPanel)`
    padding: 16px;
    border: 1px solid black;
    display: none;
    margin-top: -5px;
    margin-left: 4px;
    
    &.is-selected{
        display: block;
    }
`;

WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;