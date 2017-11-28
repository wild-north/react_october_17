import { connect } from 'react-redux';

const mapStateToProps = function (state) {
    return {
        visibleItems: state.loader.get('visibleItems').toJS()
    };
};

export const connector = component =>
    connect(mapStateToProps)(component);











