import React from 'react';
import PropTypes from 'prop-types';
import { connector } from './connector';

const Loader = ({ id, visibleItems }) => {
    const isShown =  visibleItems.some(val => val === id);

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
    isShown: PropTypes.bool.isRequired
};

export default connector(Loader);













