import React, { Component } from 'react'
import AuthService from '../service/auth.service'
import { withRouter } from 'react-router-dom';

const withToken = (WrappedComponent) => {

  class Auth extends Component {
    constructor(props) {
      super(props);
      this.state = {
        valid: false
      }
    }

    componentDidMount() {
      AuthService.validate().then(v => {
        if (v) {
          this.setState({ valid: true });
        } else {
          this.props.history.push("/unauthorized")
        } 
      })
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent {...this.props} />;
    }
  };

  return withRouter(Auth)
};

export default withToken
