import React from 'react';
import { TodoItem } from '../todo-item';

export const List = ({ list }) => (
    <ul>
        {
            list.map(data => <TodoItem key={ data.id } { ...data }/>)
        }
    </ul>
);