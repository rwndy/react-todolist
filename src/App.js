import React, { Component } from 'react';
import TodosItem from './components/TodosItem';


class App extends Component {
  state = { 
    todoItem: '',
    items: []
  }

  OnAddSubmit = (e) => {
    e.preventDefault()
    this.setState({
      items: [...this.state.items, this.state.todoItem],
      todoItem: ''
    })
  }

  onInputChange = (e) => {
    this.setState({ todoItem: e.target.value })
  }

    render() { 
      return ( 
        <div className="ui container">
          <h1>To Do List</h1>
          <form className="ui form" onSubmit={this.OnAddSubmit}>
            <div className="field">
              <input
              type="text"
              value={this.state.todoItem}
              placeholder="Search Image.." onChange={ this.onInputChange }/>
              <button className="fluid ui blue button" style={{marginTop: '15px'}}>
              Add
              </button>
            </div>
          </form>
          <TodosItem items={this.state.items} />
        </div>
       );
    }
  }

export default App;
