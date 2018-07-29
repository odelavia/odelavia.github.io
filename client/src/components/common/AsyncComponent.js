import React, { Component } from 'react';

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      }
    }

    async componentDidMount() {

      const { default: component } = await importComponent();
      console.log('this is component:',component)
      this.setState({
        component: component
      })
    }

    render() {
      const Component = this.state.component;
      return Component ? <Component {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}