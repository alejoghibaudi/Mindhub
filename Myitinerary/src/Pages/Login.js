import React from 'react';
import Sidebar from '../Components/Sidebar';
import {login} from '../Components/Userfunctions';
import GoogleAuth from "../Components/Googleauth";
import {Form} from 'reactstrap';

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            errors:{}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault()

        const user={
            email:this.state.email,
            password:this.state.password
        }
        login(user).then(res=>{
            if(res){
               this.props.history.push('/Profile')
               console.log(res)
            }
        })
    }
    render(){
        const responseGoogle = (response) => {
            console.log(response);
          }
        return(
            <div className="container">
            <div className="row">
            <Sidebar/>       
                <div>
                    <Form onSubmit={this.onSubmit}>
                    <h1>Please Sign In</h1>
                            <div>
                                <label htmlFor="email">Email address</label>
                                <input type="email" 
                                name="email" 
                                placeholder="Enter Email" 
                                value={this.state.email} 
                                onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" 
                                name="password" 
                                placeholder="Enter password" 
                                value={this.state.password} 
                                onChange={this.onChange}/>
                            </div>
                            <button type="submit">
                                    sing in
                            </button>
                            <GoogleAuth history={this.props.history} />
                    </Form>
                </div>
            </div>
            </div>     
        )
    }

}

export default Login;