import React  from 'react'
import { Card, CardTitle, CardText, CardGroup} from 'reactstrap'
import Sidebar from './Sidebar'
import Botonactivity from './Botonactivity';
import axios from 'axios'
class DemoCarousel extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={
            actividades:[]
        }
    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:5000/api/activity');
        this.setState({actividades:res.data.data})
    }

    render() {
        
        const itinerario = this.props.itinerario
        const act = this.state.actividades
      
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
                                        <img src={itinerario.profilepicture} 
                                        style={{position:"relative", width:"20%"}}
                                        />
                                        <p>{itinerario.username}</p>
                                    </CardText>
                                    <Botonactivity 
                                    ciudad={itinerario.ciudad}
                                    titulo={itinerario.title}
                                    actividades={act} 
                                    />
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