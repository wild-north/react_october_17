import { createConnector } from '../../helpers';

const mapStateToProps = store => ({
    list: store.todos
});

const mapDispatchToProps = {};

export const appConnector = createConnector(mapStateToProps, mapDispatchToProps);