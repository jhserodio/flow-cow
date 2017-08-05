import React, { Components } from 'react';
import { connect } from 'react-redux';
import { addCow } from '../../actions/cows';
import Form from './Form';

const FormContainer = props => <Form cow={props.cow} />;

const mapDispatchToProps = dispatch => ({
    addCow: cow => {
        dispatch(addCow(cow))
    }
});

export default connect(mapDispatchToProps)(FormContainer)
