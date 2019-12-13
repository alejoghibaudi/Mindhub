import React from 'react';
import Sidebar from '../Components/Sidebar';
import {getCity} from '../Redux/Actions/Cityactions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../App.css';

class City extends React.Component{
    static propTypes={
        getCity:PropTypes.func.isRequired,
        city:PropTypes.object.isRequired,
    }
    constructor(props){
		super(props)
		this.state = {
			search:''
		};
    }
	updateSearch(event){
		this.setState({search:event.target.value})
    }
    componentDidMount(){
        this.props.getCity()
    }
    render(){
        console.log(this.props.city);
        const {city}=this.props.city;
        let filteredCity=city.filter(
            (city)=>{return city.ciudad.toLowerCase().indexOf(this.state.search)===0}
        )
        return(
            <div className="container">
            <div className="row">
            <Sidebar/>
            <div className="divfiltro">
            <input  type="text" className="filtro"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
             />
             </div>
             <div className="divlistaciudades">
             <ul className="ulciudades">
				{filteredCity.map(ciudad => {
					let rutaciudad = '/Cities/' + ciudad.ciudad;
					return (
						<Link to={rutaciudad} key={ciudad._id}>
						<div className="divciudades">
						<li className="liciudades">
						<button
						className="botonciudades"
						style={{backgroundImage: `url(${ciudad.img})`, backgroundPosition:"center"}}>
						<p className="textoboton">-{ciudad.ciudad}--{ciudad.pais}-</p>
						</button>
						</li>
						</div>
						</Link>
					);
				})}
			</ul>
            </div>
            </div>
            </div>
        )
    }
    }
    const mapStateToProps=state=>({
        city:state.cityitem,
    })

export default connect(mapStateToProps,{getCity})(City);