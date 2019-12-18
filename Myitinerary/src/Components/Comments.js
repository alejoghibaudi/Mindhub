  
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import {
    postComments
} from '../Redux/Actions/Commentactions'
export class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            username: "",
            ItineraryId: ""
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        let comments = {
            message: this.state.message,
            username: this.props.username,
            ItineraryId: this.state.ItineraryId
        };
        this.props.postComments(comments);
        this.setState({
            message: ""
        })
    }

    componentDidMount() {
        if (localStorage.usertoken) {
            this.setState({
                username: this.props.username,
                ItineraryId: this.props.ItineraryId
            })
        }
    }

    render() {
        return (
            <div>
                {localStorage.usertoken ?
                    <div className="Comments-box">
                        <div className="message">
                            <p className="messagetext"><b className="userName">{this.state.username}</b> &nbsp; </p>
                            <Form noValidate onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Input type="textarea" name="message" id="message" value={this.state.message} onChange={this.onChange} />
                                    <Button className="btn btn-dark" type="submit" >Submit</Button>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                    : ""}

            </div>
        )
    }
}
Comments.propTypes = {
    comment: PropTypes.array,
};

const mapStateToProps = state => {
    return {
        comments: state.commentitem
    };
};

export default connect(
    mapStateToProps,
    { postComments }
)(Comments);