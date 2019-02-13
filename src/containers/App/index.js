import React, { Component } from 'react';
import { connect } from 'react-redux';

import Users from 'COMPONENTS/users'; 
import { fetchUsersInitiate } from 'ACTIONS/users.js';

class App extends Component {
  componentDidMount() {
    this.props.fetchUsersInitiate();
  }

  render() {
    const { users: { data, isLoading } } = this.props;
    return (
      <Users data={data} isLoading={isLoading} />
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
