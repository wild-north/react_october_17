import React from 'react';
import PropTypes from 'prop-types';
import { connector } from './connector';

const Loader = ({ observedAction, visibleItems }) => {
    const isShown =  visibleItems.some(val => val === observedAction);

    return (
        <span>
          {
              isShown && (
                  <span>Loading...</span>
              )
          }
        </span>
    );
};

Loader.displayName = 'Loader';
Loader.propTypes = {
    observedAction: PropTypes.string.isRequired,
    visibleItems: PropTypes.array.isRequired
};

export default connector(Loader);
