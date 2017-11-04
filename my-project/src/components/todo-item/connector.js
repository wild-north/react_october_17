import { connect } from 'react-redux';
import { createConnector } from '../../helpers';
import { deleteItem } from '../../actions';

const mapDispatchToProps = {
    deleteItem
};

// export const itemConnector = createConnector(null, mapDispatchToProps);

export const itemConnector = function(component) {
    return connect(null, mapDispatchToProps)(component);
};