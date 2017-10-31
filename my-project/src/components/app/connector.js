import { connect } from 'react-redux';
import { createConnector } from '../../helpers';
import { deleteItem } from '../../actions';

const mapStateToProps = function (state) {
  return {
      list: state.todos
  };
};

//
// const mapDispatchToProps = {};
//
// export const appConnector = createConnector(mapStateToProps, mapDispatchToProps);

export const appConnector = function(component) {
  return connect(mapStateToProps)(component);
};











