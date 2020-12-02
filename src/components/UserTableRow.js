import React, { Component } from 'react';

export default class UserTableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj.firstName}</td>
                <td>{this.props.obj.lastName}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.phoneNumber}</td>
            </tr>
        );
    }
}