import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

export default (View) => {
  return class extends Component {

    state = {
      data: null,
      loading: true,
      error: false
    };

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    componentDidMount() {
      this.update();
    }

    addItem = (...args) => {
      this.setState( {
        loading: true,
        error: false
      });
      this.props.addItem(...args)
        .then(() => {
          this.update();
        }).catch(() => {
        this.setState({
          error: true,
          loading: false
        });
      });
    }

    removeItem = (...args) => {
      this.setState( {
        loading: true,
        error: false
      });
      this.props.removeItem(...args)
        .then(() => {
          this.update();
        }).catch(() => {
        this.setState({
          error: true,
          loading: false
        });
      });
    }


    editItem = (...args) => {
      this.setState( {
        loading: true,
        error: false
      });
      this.props.editItem(...args)
        .then(() => {
          this.update();
        }).catch(() => {
        this.setState({
          error: true,
          loading: false
        });
      });
    }

    update() {
      this.setState( {
        loading: true,
        error: false
      });

      this.props.getData(this.props.name)
        .then((data) => {
          this.setState({
            data,
            loading: false
          });
        })
        .catch(() => {
          this.setState({
            error: true,
            loading: false
          });
        });
    }


    render() {
      const { data, loading, error } = this.state;

      if (loading) {
        return <Spinner />;
      }

      if (error) {
        return <ErrorIndicator texts={this.props.texts}/>;
      }

      return <View {...this.props}
                   data={data}
                   addItem={this.addItem}
                   removeItem={this.removeItem}
                   editItem={this.editItem}/>;
    }
  };
};

