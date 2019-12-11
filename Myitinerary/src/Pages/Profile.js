import React,{Component} from 'react'
import jwt_decode from 'jwt-decode'
import Sidebar from '../Components/Sidebar'
class Profile extends Component{

    constructor(){
        super()
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            
        }
    }
    componentDidMount(){
        const token= localStorage.usertoken
        const decoded=jwt_decode(token)
        console.log(decoded)
        this.setState({
            first_name:decoded.first_name,
            last_name:decoded.last_name,
            email:decoded.email
        })
    }
    render(){
        return(
            <div className="container">
                <div>
                    <Sidebar/>
                    <div >
                        <h1 >
                            Profile
                        </h1>
                    </div>
                    <table>
                        <tbody>
                            <tr> 
                            <td>First name</td>
                            <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                            <td>Last name</td>
                            <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                            <td>Email</td>
                            <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile