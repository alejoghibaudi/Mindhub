import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import jwt_decode from 'jwt-decode'
import { register } from "../Components/Userfunctions";
import { googlelogin } from "../Components/Userfunctions";

class GoogleAuth extends Component {
    render() {
        const { history } = this.props;
        const responseGoogle = (response) => {
            console.log(response);
            let usertoken = response.tokenId;
            const decoded = jwt_decode(usertoken);
            console.log(decoded);

            const newUser = {
                username: decoded.name,
                email: decoded.email,
                password: decoded.email,
                profileImg: decoded.picture
            }
            const user = {
                email: newUser.email,
                password: newUser.password
            }
            console.log(newUser);
            register(newUser).then(res => {   
                googlelogin(user);
                history.push(`/Cities`);    
            })
        }
        return (
            <div className="contenedor flex">
                <GoogleLogin
                    clientId="48856370899-7utk9j2kfe3kg2ct9jog553h9dlim2jn.apps.googleusercontent.com"
                    buttonText="LOG IN WITH GOOGLE"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        );
    }
}

export default GoogleAuth;