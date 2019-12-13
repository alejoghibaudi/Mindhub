import React from 'react';
import { connect } from 'react-redux';
import { getItinerary } from '../Redux/Actions/Itineraryactions';
import PropTypes from 'prop-types';
import Carousel from '../Components/Carousel';


class Itinerary extends React.Component {

  static propTypes = {
		getItinerary: PropTypes.func.isRequired,
		itinerary: PropTypes.object.isRequired,
  };
 componentDidMount() {
  let ciudad = this.props.match.params.ciudad;
  this.props.getItinerary(ciudad)
  };


  render() {
    const { itinerary } = this.props.itinerary;
    console.log(itinerary);
    return (
      <div>
        {itinerary.length >0 ?
        //hay itinerarios 
        <div> 
            <Carousel itinerario={itinerary}/>
        </div>:
        //No hay itinerarios 
        <div>
            <div>
              <h1>Por el momento no hay itinerarios cargados</h1>
            </div>
        </div>}
      </div>
    );
	}
}
const mapStateToProps = state => ({
	itinerary: state.itineraryitem,
});

export default connect(mapStateToProps, { getItinerary })(Itinerary);