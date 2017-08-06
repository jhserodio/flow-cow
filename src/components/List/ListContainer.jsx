import React from 'react';
import { connect } from 'react-redux';
import { removeCow } from '../../actions/cows';
import List from './List';

const ListContainer = props => <List cows={props.cows} remove={props.removeCow}/>;

const mapStateToProps = state => ({
    cows: state.cows
})

const mapDispatchToProps = { removeCow }

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
