import React from 'react';
import {Link} from 'react-router-dom';


function Buttonconflecha (){
    return(
        <div className="divboton">
            <h3>Start browsing</h3>
            <Link to="/Login" className="link"><button className="Botonflecha" type="submit"></button></Link>
        </div>
    )
}

export default Buttonconflecha;