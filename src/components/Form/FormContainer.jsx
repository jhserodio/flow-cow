import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCow } from '../../actions/cows';
import Form from './Form';

class FormContainer extends Component {

    state = {
        name: undefined,
        born: undefined,
        weight: undefined,
        sex: undefined,
        race: undefined
    }

    handleChangeState = (e, state) =>
        this.setState({
            [state]: e.target.value
        })

    saveTheCow = () => {
        const { name, born, weight, sex, race } = this.state;
        if (name && born && weight && sex && race) {
            this.props.addCow({id: Math.random(), ...this.state})
        } else {
            alert('tem coisa faltando');
        }
    }

    render() {
        return (
            <Form
                {...this.state}
                changeState={this.handleChangeState}
                save={this.saveTheCow}
                />
        )
    }
}

const mapDispatchToProps = { addCow }

export default connect(undefined, mapDispatchToProps)(FormContainer)
