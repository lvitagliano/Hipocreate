import React, { Component, Fragment } from 'react';
import { Redirect, Route } from 'react-router-dom';

export class PrivateRoute extends Component {
  render() {
    const {
      exact,
      path,
      location,
      computedMatch,
      locale,
      changeLocale,
    } = this.props
    const thisprops = {
      exact,
      path,
      location,
      computedMatch,
      locale,
      changeLocale,
    }
    const Component = this.props.component
    const session = this.props.session
    const refetch = this.props.refetch
    const client = this.props.client
    
    if(!session){
      return <Redirect to={"/login"}/>
    }
    return (
      <Fragment>
          <Route
            {...thisprops}
            render={props => <Component {...props} session={session}/>}
          />
      </Fragment>
    );
  }
}

export default PrivateRoute;
