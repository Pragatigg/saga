import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsersInitiate } from 'ACTIONS/users.js';

class App extends Component {
  componentDidMount() {
    this.props.fetchUsersInitiate();
  }

  render() {
    const { users: { data, isLoading } } = this.props;
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

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsersInitiate: () => dispatch(fetchUsersInitiate()),
})


export default connect(mapStateToProps, mapDispatchToProps) (App);
