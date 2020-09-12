import React from 'react'
import {StartshipList} from '../sw-components';
import ErrorBoundry from '../error-boundry';
import {withRouter} from 'react-router-dom';
const StarshipPage = ({history})=>
{
    return (
      <ErrorBoundry>
        <StartshipList
          onSetItem={(id) => history.push(id)}
          renderFunction={(item) => {
            return `${item.name}`;
          }}
        />
      </ErrorBoundry>
    );
}
export default withRouter(StarshipPage);