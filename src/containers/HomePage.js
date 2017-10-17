/**
 * Created by shiran on 2017/10/16.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';

class HomePage extends Component {
    componentDidMount() {

    }

    render() {
        return(
            <div>
                <h1>HomePage</h1>

                <div>
                    pathname: {this.props.pathname}
                </div>
                <div>
                    search: {this.props.search}
                </div>
                <div>
                    hash: {this.props.hash}
                </div>
            </div>
        )
    }

}

function mapStateToProperties(state) {
    return {
        pathname: state.router.location.pathname,
        search: state.router.location.search,
        hash: state.router.location.hash,
    };
}

export default connect(mapStateToProperties)(HomePage);