import React, { Component } from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import logo from '../Cloud.svg';

const StyledDiv = styled.div`
margin-top: 10%;
margin-left: 10%; 
margin-right: 10%; 
`

class Home extends Component {

    constructor(props) {
        super(props);
        if(props.username === undefined || props.password === undefined || props.username === "" || props.password === ""){
            this.history.push(`/`)
        }
      }

    render() {
      return (
        <StyledDiv>
            <img src={logo} alt="Logo" style={{ display: "flex", marginRight: "auto", marginLeft: "auto", width:200 }}/>
        </StyledDiv>
      );
    }
  }
  
  export default Home;