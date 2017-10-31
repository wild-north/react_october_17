import React from 'react';
import { List } from '../todos';
import PropTypes from 'prop-types';

const TodoApp = (props) => {
    const { list } = props;

    return (
        <div>
            {
                list.length
                    ? [
                        <h1 key="list-header">List:</h1>,
                        <List key="list-body" list={ list }/>
                    ]
                    : <h1>There is no data</h1>
            }
        </div>
    );
};

TodoApp.propTypes = {
    list: PropTypes.array.isRequired
};

export default TodoApp;
















