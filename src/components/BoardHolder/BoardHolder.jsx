import React, {useState, useEffect, useContext} from "react";
import CardHolder from "../CardHolder/CardHolder";
import styled from "styled-components";

const StyledBoardHolder = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    
`


const BoardHolder = (props) => {
    return (
        <StyledBoardHolder className="boardholder">
            
            <CardHolder/>
        </StyledBoardHolder>
    )
};

export default BoardHolder;