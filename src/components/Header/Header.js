import React from 'react';
import '../../css/Header/Header.css';
import { word } from './../../static';

function Header() {
    return(
        <header> 
        {word.headerTitle}
        </header>  
    )
}
export default Header;