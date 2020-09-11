import React, { Component } from "react";
import { PlanetList, PlanetDetail } from "../sw-components";
import ErrorBoundry from "../error-boundry";
import Row from "../row";

export default class PlanetPage extends Component
{
  state = {
    id: null,
  };
  setItem = (id) => {
    this.setState({ id });
  };
  render() {
    const itemList = (
      <PlanetList
        onSetItem={this.setItem}
        renderFunction={(item) => {
          return `${item.name}`;
        }}
      />
    );
    const personDetails = <PlanetDetail itemId={this.state.id} />;
    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
