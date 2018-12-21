import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import gql from "graphql-tag";
import { graphql } from 'react-apollo';
import Paper from '@material-ui/core/Paper';

const TodosQuery = gql`
{
  todos {
    id
    text
    complete
  }
}
`;

class App extends Component {
  render() {
    const {data: {loading, todos}} = this.props;
    if (loading) {
      return null;
    }
    return (
      <div style={{ display: "flex"}}>
       <div style={{ margin: "auto", width: 400}}>
       <Paper elevation={1}>
        {todos.map(todo => <div key={`${todo.id}-todo-item`}>{todo.text}</div>)}
        </Paper>
       </div>
      </div>
    );
  }
}

export default graphql(TodosQuery)(App);

