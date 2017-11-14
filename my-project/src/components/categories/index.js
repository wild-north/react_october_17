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

    return (
        <li>
            { name }
            {
                shouldRenderChildren && (
                    <List tree={ getSubTree(sub, source) } source={ source } parentId={ id }/>
                )
            }
        </li>
    );
};

function getSubTree(sub, source) {
    return sub.map(sub_id =>
        source.find(val => val.id === sub_id))
}














function getById(source, id) {
    for (let i = 0; i < source.length; i++) {
        if (source[i].id === id) {
            return source[i];
        }
    }
}











