import React from 'react';
import { List } from '../todos';
import PropTypes from 'prop-types';
import './index.css';
import { List as Categories } from '../categories';

const categories = [
    {id: 'c-01', name: 'Cat 1', sub: ['c-05'], parentId: null},
    {id: 'c-02', name: 'Cat 2', sub: [], parentId: null},
    {id: 'c-03', name: 'Cat 3', sub: [], parentId: null},
    {id: 'c-04', name: 'Cat 4', sub: [], parentId: null},
    {id: 'c-05', name: 'Sub cat', sub: ['c-06', 'c-07'], parentId: 'c-01'},
    {id: 'c-06', name: 'Sub cat 2', sub: [], parentId: 'c-05'},
    {id: 'c-07', name: 'Sub cat 3', sub: [], parentId: 'c-05'},
];

const TodoApp = (props) => {
    const { list } = props;

    return (
        <div>
            <aside>
                <Categories tree={ categories } source={ categories }/>
            </aside>
            <section>
                {
                    list.length
                        ? [
                            <h1 key="list-header">List:</h1>,
                            <List key="list-body" list={ list }/>
                        ]
                        : <h1>There is no data</h1>
                }
            </section>
        </div>
    );
};

TodoApp.propTypes = {
    list: PropTypes.array.isRequired
};

export default TodoApp;
















