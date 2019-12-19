import React  from 'react'
import { Card, CardTitle, CardText, CardGroup} from 'reactstrap'
import Sidebar from './Sidebar'
import Botonactivity from './Botonactivity';
import axios from 'axios'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getAllComment} from '../Redux/Actions/Commentactions'
import jwt_decode from 'jwt-decode'
import Comments from './Comments'


class DemoCarousel extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={
            actividades:[],
            username:"",
            UserId:""
        }
    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:5000/api/activity');
        this.setState({actividades:res.data.data});
        this.props.getAllComment();
        if (localStorage.usertoken) {
            const token = localStorage.usertoken
            const decoded = jwt_decode(token)
            console.log(decoded)
            this.setState({
                username: decoded.email,
                UserId: decoded._id
            })
        }
    }
    

    render() {
        console.log(this.state)
        console.log(this.props)
        const itinerario = this.props.itinerario
        const act = this.state.actividades
        return (<div>
                        <Sidebar/>
                        {itinerario.map(itinerario => (
                            <div>
                                <CardGroup className="center">
                                <Card body outline color="danger" >
                                    <CardTitle>{itinerario.title}</CardTitle>
                                    <CardText key={itinerario._id}>
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
                                
                                <Comments ItineraryId={itinerario._id} username={this.state.username}/>

                                                {this.props.comments.comments.map(comments => (
                                                    <React.Fragment key={comments._id}>
                                                        <div>
                                                            {comments.ItineraryId === itinerario._id ?

                                                                <div className="Comments-box">
                                                                    <div className="message">
                                                                        <p className="messagetext"><b className="userName">{comments.username}</b> &nbsp; {comments.message}</p>
                                                                    </div>
                                                                </div>
                                                                : ""}
                                                        </div>
                                                    </React.Fragment>
                                                ))
                                                }

                            </div>
                        ))}
                    </div>
        )
    }
}

DemoCarousel.propTypes = {
    comment: PropTypes.array
};
const mapStateToProps = state => ({
    comments: state.commentitem
});

export default connect(
    mapStateToProps,
    {getAllComment }
)(DemoCarousel);

