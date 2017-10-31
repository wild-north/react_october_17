import React from 'react';
import { List } from '../todos';

const TodoApp = ({ list, deleteItem }) => {
    return (
        <div>
            {
                list.length
                    ? [<h1 key="list-header">List:</h1>, <List key="list-body" list={ list } deleteItem={ deleteItem }/>]
                    : <h1>There is no data</h1>
            }
        </div>
    );
};

export default TodoApp;
















