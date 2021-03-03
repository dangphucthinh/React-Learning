import React, { Component } from 'react';
import { connect } from 'react-redux';

class Intro extends Component {

    callEditStatusInStore = () => {
        var  {dispatch} = this.props
        dispatch({
            type: "Change_edit_status"
        })
    }

    render() {
        return (
            <div>
                <h2> This is a new Component</h2>
                <button
                onClick = {
                    this.callEditStatusInStore
                }>
                    Click me
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {
        edit : state.editReducer
    }
}

export default connect(mapStateToProps)(Intro);