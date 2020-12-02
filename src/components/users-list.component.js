import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import UserTableRow from './UserTableRow';

export default class UsersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
          users: []
        };
      }
    
      componentDidMount() {
        axios.get('http://localhost:4000/users/')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }
    
      DataTable() {
        return this.state.users.map((res, i) => {
          return <UserTableRow obj={res} key={i} />;
        });
      }
    
    
      render() {
        return (<div className="table-wrapper">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone No</th>
              </tr>
            </thead>
            <tbody>
              {this.DataTable()}
            </tbody>
          </Table>
        </div>);
      }
}