import React from 'react';
import {SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (mapMethodToProps) => (Wrapped) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {(swapiService) => {
          const mapProps = mapMethodToProps(swapiService);
          return (
            <Wrapped {...props} swapiService={swapiService} {...mapProps} />
          );
        }}
      </SwapiServiceConsumer>
    );
  };
};
export default withSwapiService;