import React from 'react';
import Sidebar from '../Components/Sidebar';
import Logoprincipal from '../Components/Logoprincipal';
import Botonconflecha from '../Components/Botonconflecha';
import BotonHome from '../Components/Botonhome';
import Footer from '../Components/Footer';
class Home extends React.Component {



    render() {
        return (
            <div className="container">
                <div className="row">
                    <Sidebar />
                    <Logoprincipal />
                    <Botonconflecha />
                    <BotonHome />
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Home;