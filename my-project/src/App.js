import React, { Component } from 'react';

const Item = ({ id, name, desc, deleteItem }) => (
    <li key={ id }>
        <strong>{ name }</strong>
        <div>{ desc }</div>
        <button onClick={ () => deleteItem(id) }>X</button>
    </li>
);

const List = ({ list, deleteItem }) => (
    <ul>
        {
            list.map(data => <Item key={ data.id } { ...data } deleteItem={ deleteItem }/>)
        }
    </ul>
);

class TodoApp extends Component {
    constructor(...args) {
        super(...args);

        console.log(this.props);

        this.state = {
            list: [
                {id: '100', name: 'таск 1', desc: 'сделать все хоршо'},
                {id: '101', name: 'таск 2', desc: 'сделать все еще лучше'},
                {id: '102', name: 'таск 3', desc: 'сделать все ништяк'},
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem(id) {
        const { list } = this.state;

        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id) {
                const copy = this.state.list.slice();
                copy.splice(i, 1);
                this.setState({
                    list: copy
                });
            }
        }
    }

    render() {
        return (
            <div>
                <h1>Todo List:</h1>
                <List list={ this.state.list } deleteItem={ this.deleteItem }/>
            </div>
        );
    }
};
const TodoDetails = ({ item }) => <h4>{ item.description }</h4>;

export default TodoApp;
















