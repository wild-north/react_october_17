import React, { Component } from 'react';

class TodoListApp extends Component {
  constructor(args) {
    super(args);
    this.state = {
      list: []
    };
    this.addNewTask = this.addNewTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }
  addNewTask(text) {
    this.setState({
      list: [...this.state.list, text]
    })
  }
  removeTask(id) {
    const copy = this.state.list.slice();
    copy.splice(id, 1);
    this.setState({
      list: copy
    })
  }


  render() {
  const { list } = this.state;

    return (
      <div>
        <Form addNewTask={ this.addNewTask }/>
        <FormWithRefs addNewTask={ this.addNewTask }/>
        <List list={ list } onRemove={ this.removeTask }/>
      </div>
    );
  }
}

class Form extends Component{
  constructor(args) {
    super(args);
    this.state = {
      text: 'Привет, я - форма.'
    };

    this.inputChange = this.inputChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  inputChange(ev) {
    this.setState({
      text: ev.target.value
    })
  }
  formSubmit(ev) {
    ev.preventDefault();
    this.setState({
      text: ''
    })
    this.props.addNewTask(this.state.text);
  }

  render() {
    return (
      <form onSubmit={ this.formSubmit }>
        <input type="text"
          value={ this.state.text }
          onChange={ this.inputChange }
          />
      </form>
    );
  }
}

class FormWithRefs extends Component{
  constructor(args) {
    super(args);

    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(ev) {
    ev.preventDefault();

    this.props.addNewTask(this.myInput.value);
    this.myInput.value = '';
  }

  render() {
    return (
      <form onSubmit={ this.formSubmit }>
        <input type="text" ref={ (element) => {
          this.myInput = element;
        } }/>
      </form>
    );
  }
}

const List = ({ list, onRemove }) => (
  <ul>
    {
      list.map((item, index) => (
        <li key={ index } onClick={ () => onRemove(index) }>
          { item }
        </li>
      ))
    }
  </ul>
)

export default TodoListApp;