import React, { Component } from 'react';
import Spinner from '../spinner';
const withData = (View, getResouse) => {
    return class extends Component {
        state = {
            data: null
        }
        componentDidMount() {
            getResouse()
                .then(
                    (data) => {
                        this.setState({ data });
                    }
                );
        }
        render() {
            const { data } = this.state;
            if (!data)
                return <Spinner />;
            else
                return <View {...this.props} data={data} />
        }
    }
}
export{withData};