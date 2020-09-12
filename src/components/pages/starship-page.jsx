import React from 'react'
import {StartshipList} from '../sw-components';
import ErrorBoundry from '../error-boundry';
import {withRouter} from 'react-router-dom';
const StarshipPage = ({history})=>
{
    return (
      <ErrorBoundry>
        <StartshipList
          onSetItem={(itemId)=>{
            history.push(`/starships/${itemId}`);
          }}
          renderFunction={(item) => {
            return `${item.name}`;
          }}
        />
      </ErrorBoundry>
    );
}
export default withRouter(StarshipPage);