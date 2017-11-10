import React from 'react';
import { PropTypes } from 'prop-types';
import { itemConnector } from './connector';

export const Item = ({ id, name, desc, deleteItem, deleteItemAsync }) => (
    <li key={ id }>
        <strong>{ name }</strong>
        <div>{ desc }</div>
        <a onClick={ () => deleteItem(id) }><span role="img" aria-label="del">✖</span>︎</a>
        <a onClick={ () => deleteItemAsync(id) }><span role="img" aria-label="del-as">❌</span>︎</a>
    </li>
);

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