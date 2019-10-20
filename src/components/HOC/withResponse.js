import React, { Component } from 'react';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

export default (View) => {
  return class extends Component {

    state = {
      response: null,
      loading: false,
      error: false
    };

    request = (...args) => {
      this.setState( {
        loading: true,
        error: false
      });
      this.props.request(...args)
        .then((response) => {
          this.setState({
            response,
            loading: false
          });
        }).catch(() => {
        this.setState({
          error: true,
          loading: false
        });
      });
    }

    render() {
      const { response, loading, error } = this.state;
      if (error) {
        return <ErrorIndicator texts={this.props.texts}/>;
      }

      return <View {...this.props}
                   response={response}
                   isLoading={loading}
                   request={this.request}/>;
    }
  };
};
