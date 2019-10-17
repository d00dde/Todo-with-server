import React, { Component } from 'react';
import Spinner from './components/Spinner/Spinner';
import ErrorIndicator from './components/ErrorIndicator/ErrorIndicator';

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

    addItem = (title) => {
      this.setState( {
        loading: true,
        error: false
      });
      this.props.addItem(title)
        .then(() => {
          this.update();
        }).catch(() => {
        this.setState({
          error: true,
          loading: false
        });
      });
    }

    removeItem = (id) => {
      this.setState( {
        loading: true,
        error: false
      });
      this.props.removeItem(id)
        .then(() => {
          this.update();
        }).catch(() => {
        this.setState({
          error: true,
          loading: false
        });
      });
    }


    editItem = () => {

    }

    update() {
      this.setState( {
        loading: true,
        error: false
      });

      this.props.getData()
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
        return <ErrorIndicator />;
      }

      return <View {...this.props}
                   data={data}
                   addItem={this.addItem}
                   removeItem={this.removeItem}/>;
    }
  };
};

