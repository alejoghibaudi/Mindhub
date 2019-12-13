import React from 'react'
import axios from 'axios'

class Botonactividades extends React.Component{
    constructor(props){
        super(props);
        this.state={
            actividades:[]
        };
    }
    async componentDidMount(){
        const res=await axios.get('http://localhost:5000/api/activity')
        this.setState({actividades: res.data.data})
    }
    render(){
        
        return(
            
            <button onClick={this.props.mostrarusuarios} title={this.props.titulo} ></button>
            
        
        )
    }
}

export default Botonactividades