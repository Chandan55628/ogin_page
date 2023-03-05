import React from 'react';
import './navigation3.css';
import Search from "../checkbox/Search"

function Navigation3(){
    return(
        <>
        <header className="header">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                    {/* <div className="search"> */}
                    {/* <input type='teext'placeholder="Search"></input> */}
                    <li className="search"><Search></Search>   </li>
                    {/* </div>  */}
                </ul>
            </nav>
        </header>
        </>
    )
}
export default Navigation3;