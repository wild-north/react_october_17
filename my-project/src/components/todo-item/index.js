import React from 'react';
import { PropTypes } from 'prop-types';
import { itemConnector } from './connector';


export const Item = ({ id, name, desc, deleteItem }) => {
    const handleClick = (ev) => {
        ev.preventDefault();
        deleteItem(id);
    };
    return (
        <li key={ id }>
            <strong>{ name }</strong>
            <div>{ desc }</div>
            <a href="#" onClick={ handleClick }>X</a>
        </li>
    )
};

Item.propTypes = {
  id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
  ]).isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export const TodoItem = itemConnector(Item);