import React, { Component } from 'react';
import LoginView from '../../components/common/Login/index';
class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickStatus: '',
            count: 0
        };
        this.onPress = this.onPress.bind(this);
    }
    componentDidMount() {
        this.setState({
            clickStatus: ' loaded'
        });
    }
    onPress() {
        this.setState({
            count: this.state.count + 1
        });
        this.setState({
            clickStatus: ' clicked ' + this.state.count 
        });
    }
    render() {
        return (
            <LoginView onPress={this.onPress} clickStatus={this.state.clickStatus} />
        );
    }
}
export default LoginContainer;