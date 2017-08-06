import React from 'react';
import { connect } from 'react-redux';
import { addCow } from '../../actions/cows';
import Form from './Form';

const FormContainer = props => <Form />;

const mapDispatchToProps = dispatch => ({
    addCow: cow => {
        dispatch(addCow(cow))
    }
});

export default connect(mapDispatchToProps)(FormContainer)
