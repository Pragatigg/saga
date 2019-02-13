import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
  render() {
    const { data, isLoading } = this.props;
    return (
      <React.Fragment>
        { isLoading ? (
          <div> Loading...</div> ):(
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
            { data.map((user, index) => (
                  <tr key={index}>
                    <td>{ user.name }</td>
                    <td>{ user.email }</td>
                    <td>{ user.phone }</td>
                    <td>{ user.website }</td>
                    <td>{ user.company.name }</td>
                  </tr>
            ))}
          </tbody>
        </table>
        ) }
      </React.Fragment>
    );
  }
}

export default Users;
