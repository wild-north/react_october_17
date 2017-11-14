import { connect } from 'react-redux';
import { getCategories } from '../../actions';

const mapStateToProps = function (state) {
  return {
      list: state.todos
  };
};
const mapDispatchToProps = {
    getCategories
};

export const appConnector = component =>
    connect(mapStateToProps, mapDispatchToProps)(component);