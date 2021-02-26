import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

export class PublicRoute extends Component {
  render() {
    const {
      exact,
      path,
      location,
      computedMatch,
    } = this.props
    const thisprops = {
      exact,
      path,
      location,
      computedMatch,
    }
    const Component = this.props.component
    const session = this.props.session
    const refetch = this.props.refetch
    const client = this.props.client
    return (
      <Fragment>
        <div className="container">
          <Route
            {...thisprops}
            render={props => (
              <Component {...props} refetch={refetch} session={session} client={client}/>
            )}
          />
        </div>
      </Fragment>
    );
  }
}

export default PublicRoute;
