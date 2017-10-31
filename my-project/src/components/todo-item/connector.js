import { createConnector } from '../../helpers';
import { deleteItem } from '../../actions';

const mapDispatchToProps = {
    deleteItem
};

export const itemConnector= createConnector(null, mapDispatchToProps);