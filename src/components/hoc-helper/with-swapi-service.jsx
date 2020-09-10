import React from 'react';
import {SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (Wrapped,mapMethodToProps)=>
{
    return (props)=>{
        return(
            <SwapiServiceConsumer>
                {
                    (swapiService)=>
                    {
                        const mapProps = mapMethodToProps(swapiService);
                        return(
                            <Wrapped {...props} swapiService={swapiService} {...mapProps}/>
                        )
                    }
                }
            </SwapiServiceConsumer>
        )
    }
}
export default withSwapiService;