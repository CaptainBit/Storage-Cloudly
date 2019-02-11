import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import logo from '../Cloud.svg';

const StyledDiv = styled.div`
margin-top: 10%;
margin-left: 10%; 
margin-right: 10%; 
`

const StyledTextField = styled(TextField)`
    display:flex !important;
    margin-left: auto !important; 
    margin-right: auto !important; 
    width: 200px;
`;

const StyledButton = styled(Button)`
    display:flex !important;
    margin-left: auto !important; 
    margin-right: auto !important; 
    width: 200px;
`;



class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {username : "", password : ""};
      }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
      
      }
    handleButtonEnter(){
        if(this.state.username === "" ||this.state.password === ""){
            alert("Please fill all field")
            return;
        }
        this.props.connectionHandler();

    }
    render() {
      return (
        <StyledDiv>
            <img src={logo} alt="Logo" style={{ display: "flex", marginRight: "auto", marginLeft: "auto", width:200 }}/>
            <StyledTextField label="username" name= "username" value={this.state.username} onChange={this.handleChange.bind(this)}/>
            <StyledTextField label="Password" type="password" name= "password" value={this.state.password} onChange={this.handleChange.bind(this)}/>
            <StyledButton onClick={this.handleButtonEnter.bind(this)}>Enter</StyledButton>  
        </StyledDiv>
      );
    }
  }
  
  export default Login;