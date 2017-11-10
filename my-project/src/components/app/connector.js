import { connect } from 'react-redux';

const mapStateToProps = function (state) {
  return {
      list: state.todos
  };
};

export const appConnector = component => connect(mapStateToProps)(component);