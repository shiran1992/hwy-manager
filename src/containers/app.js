import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadApp, saveInfo} from 'actions/app';
// import styles from './app.css';
import fetch from 'isomorphic-fetch';
import {push} from 'connected-react-router';
import {Spin, Form, Icon, Input, Button, Row, Col, message, DatePicker} from 'antd';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            time: ''
        }
    }

    componentDidMount() {
        this.props.dispatch(loadApp());
        this.getApi();
    }

    getApi() {
        let url = "api/gf/m/uc/3ovotcto.do?c=vk%C2%96e%C2%B2&appid=0&platformid=haowanyou&uuid=d8205295ba43445fa907b5458733e648&token=68e79dcff29b1c0ef329b67db37f399d3cbca1779ec7ce716fc496406b0042ec82f72c480165f38f0a4f1c91125e47dc8bcd325338ea3a5aa257bfae1ddb21fbc21bad328a80bcbca0107ef19314eecf673e5d9c070367109c57198b1d56ffd2183c6368f2d3a844&vtime=1507884669&mac=492550816587108&model=%E5%B0%8F%E9%9C%B8%E7%8E%8B&channel=&os=android&v=2.5.6.2.1000000000&sign=f9b81e85d9be884e38e4e37ade0eebcb";
        fetch(url).then(res => res.json()).then((json)=> {
            console.log(JSON.stringify(json));
        });
    }

    pushToHomePage() {
        this.props.dispatch(push('/home'));
    }

    saveInfo() {
        this.props.dispatch(saveInfo('好玩友'));
    }

    handleChange(date) {
        message.info('您选择的日期是----: ' + date.toString());
        this.setState({
            time: date
        });
    }

    render() {
        if (!this.props.loaded) {
            return null;
        }

        return (
            <div>
                <h1>app.js</h1>
                <button onClick={()=> {
                    this.pushToHomePage();
                }}>跳转
                </button>
                <button onClick={()=> {
                    this.saveInfo();
                }}>redux
                </button>
                <h1>{this.props.info}</h1>
                <div>
                    pathname: {this.props.pathname}
                </div>
                <div>
                    search: {this.props.search}
                </div>
                <div>
                    hash: {this.props.hash}
                </div>
                <div style={{ width: 400, margin: '100px auto' }}>
                    <DatePicker onChange={value => this.handleChange(value)} />
                    <div style={{ marginTop: 20 }}>当前日期：{this.state.time.toString()}</div>
                </div>
            </div>
        );
    }
}

function mapStateToProperties(state) {
    return {
        loaded: state.app.loaded,
        info: state.app.info,
        pathname: state.router.location.pathname,
        search: state.router.location.search,
        hash: state.router.location.hash,
    };
}

export default connect(mapStateToProperties)(AppContainer);
