import React from 'react'
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import {Link, withRouter} from 'react-router-dom';

class Sidebar extends React.Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/Home`)
      }
    
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }
    render() {
        const loginRegLink = (
            <ul>
            <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
          </ul>
        )
        const userLink = (
            <div>
            <li className="nav-item">
            <Link to="/profile">
              User
            </Link>
          </li>
          <li className="nav-item">
            <a href="#" onClick={this.logOut.bind(this)} >
              Logout
            </a>
          </li>
          </div>
        )
        return (
            <div>
            <a href="#" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
            </a>
            <ul id="slide-out" className="sidenav">
                <li />
                <li>
                    <Link to="/Home" className="link">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/Cities">Cities</Link>
                </li>
                <li>
                    <div className="divider" />
                </li>
                {localStorage.usertoken ? userLink : loginRegLink}
            </ul>
        </div> 
                )}
}

export default withRouter(Sidebar);