import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { PersonList, PersonDetail } from "../sw-components";
import ErrorBoundry from "../error-boundry";
import Row from "../row";

const PersonPage = ({history,match}) =>
{
  const {id} = match.params;
  const itemList = (
    <PersonList
      onSetItem={(id)=>history.push(id)}
      renderFunction={(item) => {
        return `${item.name}`;
      }}
    />
  );
  const personDetails = <PersonDetail itemId={id} />;
  return(
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
  )
}
export default withRouter(PersonPage);
