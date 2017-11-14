import React from 'react';
import './index.css';

export const List = ({ tree, source, parentId = null }) => {
    return (
        <ol>
            {
                tree.map(category =>
                    category.parentId === parentId
                        ? <Item key={ category.id }
                                { ...category }
                                source={ source } />
                        : null
                )
            }
        </ol>
    );
};

const Item = ({ id, name, sub, source }) => {
    const shouldRenderChildren = !!sub.length;

    const subTree = sub.map(sub_id => getById(source, sub_id, id));

    return (
        <li>
            { name }
            {
                shouldRenderChildren && (
                    <List tree={ subTree } source={ source } parentId={ id }/>
                )
            }
        </li>
    );
};


function getById(source, id, parentId = null) {
    for (let i = 0; i < source.length; i++) {
        if (source[i].id === id && source[i].parentId === parentId) {
            return source[i];
        }
    }
}











