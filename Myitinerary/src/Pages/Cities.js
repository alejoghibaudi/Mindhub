import React from 'react';
import Sidebar from '../Components/Sidebar';
import {getCity} from '../Redux/Actions/Cityactions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
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
            <div>
            <Sidebar/>
            <input 
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
             />
             <ul>
				{filteredCity.map(ciudad => {
					let rutaciudad = '/Paises/' + ciudad.ciudad;
					return (
						<Link to={rutaciudad} key={ciudad._id}>
						<li>						
							<button>
									{ciudad.ciudad} - {ciudad.pais}
							</button>
						</li>
						</Link>
					);
				})}
			</ul>
            </div>
        )
    }
    }
    const mapStateToProps=state=>({
        city:state.cityitem,
    })

export default connect(mapStateToProps,{getCity})(City);