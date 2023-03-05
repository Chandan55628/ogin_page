import React from "react";
// import "./search.css";
import styled from "styled-components";

const InputDiv = styled.div`
 float:right;
    
`

const SearchInput = styled.input`
    border:4px solid blue;
    
`
function search(){
    return(
        <>
        {/* <div className="search">
            <input type="text"placeholder="search">
            </input>
        </div> */}
        <InputDiv>
            <SearchInput></SearchInput>
        </InputDiv>
        </>

    )
}
export default search;