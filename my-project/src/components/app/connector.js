import { connect } from 'react-redux';
import { createConnector } from '../../helpers';
import { deleteItem, loadList } from '../../actions';

const mapStateToProps = function (state) {
  return {
      list: state.todos,
      loaderShown: state.loader.isShown
  };
};
const mapDispatchToProps = {
    loadList
};

export const appConnector = function(component) {
  return connect(mapStateToProps, mapDispatchToProps)(component);
};











