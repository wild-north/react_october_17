import { connect } from 'react-redux';

const mapStateToProps = function (state) {
    return {
        visibleItems: state.loader.visibleItems
    };
};

export const connector = component =>
    connect(mapStateToProps)(component)











