import React from 'react';
import {Link} from 'react-router-dom'
function Header(){
    return(
        <div className="footer">
        <Link to="/Login" className="Linkfooter">Log in</Link>
        <Link to="/Register" className="Linkfooter">Register</Link>
        </div>
    ) 
}

export default Header