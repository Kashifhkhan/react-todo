import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FormComponent from './components/form.component';
import ListComponent from './components/list.components';
import CompletedList from './components/completed.list';

class App extends Component {
  constructor(props){
    super(props);  
    this.getTodo = this.getTodo.bind(this);
    this.deleteTodoFromRow = this.deleteTodoFromRow.bind(this);
    this.completedTodo = this.completedTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.editActive = this.editActive.bind(this);
    this.state = {
      row : [],
      completedRow: []
    }
  }
  getTodo(val) {
    let obj = {
      text: val,
      edit: false
    }
    this.setState(state => {
      const list = state.row.push(obj);
      return list;
    });
  }
  updateTodo(cstate) {
    this.setState(state => {
      const obj = state.row[cstate.editAbleIndex];
      obj.text = cstate.text;
      obj.edit = cstate.edit;
      return obj;
    });
  }
  deleteTodoFromRow (selfIndex) {
    this.setState(state => {
      const list = state.row.splice(selfIndex,1);
      return list;
    });
  }
  completedTodo(selfIndex) {
    this.setState(state => {
      const list = state.row.splice(selfIndex, 1);
      const removelist = state.completedRow.push(list[0]);
      return removelist
    });
  }

  editActive(selfIndex) {
    this.setState(state => {
      const obj = state.row[selfIndex];
      obj.edit = true;
      return obj;
    });
  }

  render() {
    return (
      <div className="App">
          <div className="top-section page-sec">
            <div className="container">              
              <FormComponent addTodointoList={this.getTodo} />
            </div>
          </div>
          <div className="bottom-section page-sec">
            <div className="container">
              <div className="row">
                <div className="col-6">
                    <ListComponent updateTodointoList={this.updateTodo} rowData={this.state.row} deleteTodo={this.deleteTodoFromRow} completedTodo={this.completedTodo} editActive={this.editActive} />
                </div>
                <div className="col-6">
                    <CompletedList rowData={this.state.completedRow} />
                </div>
              </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
