import React, { Component } from 'react'
import {StartshipList,StartshipDetail} from '../sw-components';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

export default class StarshipPage extends Component {
  state = {
    id: null
  };
  setItem = (id) => {
    this.setState({ id });
  };
  render() {
      const itemList = (
        <StartshipList
          onSetItem={this.setItem}
          renderFunction={(item) => {
            return `${item.name}`;
          }}
        />
      );
      const personDetails = <StartshipDetail itemId={this.state.id} />;
    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
