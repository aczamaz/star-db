import React, { Component } from "react";
import { PersonList, PersonDetail } from "../sw-components";
import ErrorBoundry from "../error-boundry";
import Row from "../row";

export default class PersonPage extends Component {
  state = {
    id: null,
  };
  setItem = (id) => {
    this.setState({ id });
  };
  render() {
    const itemList = (
      <PersonList
        onSetItem={this.setItem}
        renderFunction={(item) => {
          return `${item.name}`;
        }}
      />
    );
    const personDetails = <PersonDetail itemId={this.state.id} />;
    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
