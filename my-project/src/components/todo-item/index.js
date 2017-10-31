import React from 'react';
import { PropTypes } from 'prop-types';
import { itemConnector } from './connector';

export const Item = ({ id, name, desc, deleteItem }) => (
    <li key={ id }>
        <strong>{ name }</strong>
        <div>{ desc }</div>
        <button onClick={ () => deleteItem(id) }>X</button>
    </li>
);

Item.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export const TodoItem = itemConnector(Item);