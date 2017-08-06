import React from 'react';
import { connect } from 'react-redux';
import { removeCow } from '../../actions/cows';
import List from './List';

const ListContainer = props => <List cows={props.cows} />;

const mapStateToProps = state => ({
    cows: state.cows
})

const mapDispatchToProps = dispatch => ({
    remove: cow => {
        dispatch(removeCow(cow))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
