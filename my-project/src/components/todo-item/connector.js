import { connect } from 'react-redux';
import { deleteItem, deleteItemAsync } from '../../actions';

const mapDispatchToProps = {
    deleteItem,
    deleteItemAsync
};

export const itemConnector = component =>
    connect(null, mapDispatchToProps)(component);
