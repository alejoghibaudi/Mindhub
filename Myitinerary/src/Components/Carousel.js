import React  from 'react'
import { Card, CardTitle, CardText,Collapse, CardGroup} from 'reactstrap'
import Sidebar from './Sidebar'
import Botonactivity from './Botonactivity';

class DemoCarousel extends React.Component {
    
    constructor(props) {
        super(props)
    }

    
    mostrarusuario=(e)=>{
        let tituloamostrar=e.target.title;
        console.log('hicisteclick en '+tituloamostrar)
        const state=true
    }

    render() {
        const itinerario = this.props.itinerario
        const state = false
        return (
                <div className="container">
                    <div className="row">
                        <Sidebar/>
                        {itinerario.map(itinerario => (
                            
                            <div key={itinerario._id}>
                                <CardGroup className="center">
                                <Card body outline color="danger">
                                    <CardTitle>{itinerario.title}</CardTitle>
                                    <CardText>
                                        <img src={itinerario.profilepicture} style={{position:"relative", width:"20%"}}/>
                                        <p>{itinerario.username}</p>
                                    </CardText>
                                    <Botonactivity 
                                    titulo={itinerario.title}
                                    mostrarusuarios={this.mostrarusuario} />
                                   <Collapse state={true}>
                                       Hola
                                   </Collapse>
                                </Card>
                                </CardGroup>
                            </div>
                        ))}
                    </div>    
                </div>
            
        )
    }
}
export default DemoCarousel