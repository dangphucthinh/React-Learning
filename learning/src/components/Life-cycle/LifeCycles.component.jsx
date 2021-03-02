import React, {Component} from 'react';

class LifeCycles extends Component {
    constructor(){
        super()
        console.log('constructor');
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
  
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
  
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps);
        return false 
    }

    render() {
        console.log('render');
        return (
            <div className = 'lifecycles'>
                <h3> life LifeCycles</h3>
                {this.props.text}
            </div>
        );
    }
}

export default LifeCycles;