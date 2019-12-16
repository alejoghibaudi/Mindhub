import React from 'react'
import axios from 'axios'

import {Link, withRouter} from 'react-router-dom';

class Comentario extends React.Component {
    constructor(props){
        super(props)
    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:5000/api/comentario');
    }
    
    render() {
        const chau=this.props
        const Comentraionoreg = (
            console.log('chau')
        )
        const Comentarioreg = (
            console.log(chau)
        )
        return (
            <div>
            
                {localStorage.usertoken ? Comentraionoreg : Comentarioreg}
            
             </div> 
                  )}
}

export default withRouter(Comentario);