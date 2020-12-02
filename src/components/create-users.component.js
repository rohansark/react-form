import React, { Component } from 'react';

import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateUsers extends Component {
        //setting constructor
  constructor(props) {
    super(props);
  


  // Setting up functions
  this.onChangeFirstName = this.onChangeFirstName.bind(this);
  this.onChangeLastName = this.onChangeLastName.bind(this);
  this.onChangeEmail = this.onChangeEmail.bind(this);
  this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
  this.onChangeImage = this.onChangeImage.bind(this);
  this.onSubmit = this.onSubmit.bind(this);



  //Setting up state
  this.state={
    firstName:'',
    lastName:'',
    email:'',
    phoneNo:'',
    image:''
  }
}


onChangeFirstName(e){
  this.setState({firstName:e.target.value})
}
onChangeLastName(e){
  this.setState({lastName:e.target.value})
}
onChangeEmail(e){
  this.setState({email:e.target.value})
}
onChangePhoneNumber(e){
  this.setState({phoneNo:e.target.value})
}
onChangeImage(e){
    this.setState({image:e.target.value})
}

onSubmit(e) {
  e.preventDefault()
    alert("Successfully Registered!");
    console.log(`Successfully Registered`);
    console.log(`First Name: ${this.state.firstName}`);
    console.log(`Last Name: ${this.state.lastName}`);
    console.log(`Email: ${this.state.email}`);
    console.log(`Phone Number: ${this.state.phoneNo}`);

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNo
    };

    axios.post('http://localhost:4000/users/add', newUser)
            .then(res => console.log(res.data));

    this.setState({firstname: '',lastName:'', email: '', phoneNo: ''})

}


render() {
        return (
            <Container>
            <br></br>
            
            <div className="form-wrapper">
            <h3 className="text-center">Registration Form</h3>
      <Form id="form-size" onSubmit={this.onSubmit} method="post" encType="multipart/form-data">
        <Form.Group controlId="FirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" value={this.state.firstName} onChange={this.onChangeFirstName}/>
        </Form.Group>

        <Form.Group controlId="LastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" value={this.state.lastName} onChange={this.onChangeLastName}/>
        </Form.Group>

        <Form.Group controlId="EmailId">
          <Form.Label>Email ID</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeEmail}/>
        </Form.Group>

        <Form.Group controlId="PhoneNo">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" value={this.state.phoneNo} onChange={this.onChangePhoneNumber}/>
        </Form.Group>

        <Form.Group controlId="file">
        <Form.Label>Upload</Form.Label>
            <Form.Control type="file" value={this.state.files} onChange= {this.onChangeImage} />
        </Form.Group>

        <Button variant="success" size="md" type="submit" className="text-center">
          Register
        </Button>
      </Form>
    </div>
        
      </Container>
        )
    }
}