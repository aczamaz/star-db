import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorMessage from '../error-message';
const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            loading:true,
            error:false
        }
        componentDidUpdate(prevProps)
        {
            if(this.props.getData !== prevProps.getData)
            {
                this.update();
            } 
        }
        componentDidMount()
        {
            this.update();
        }
        update()
        {
            this.setState({loading:true})
            this.props.getData()
                .then(
                    (data) => {
                        this.setState({ data });
                        this.setState({ loading:false});
                    }
                ).catch(
                    ()=>
                    {
                        this.setState({error:true})
                    }
                );
        }
        render()
        {
            const { data,error,loading } = this.state;
            if (error)
                return <ErrorMessage/>
            if (!data || loading)
                return <Spinner />;
            else 
                return <View {...this.props} data={data} />;
        }
    }
}
export{withData};