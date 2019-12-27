import React, { Component } from 'react'

export default class ListComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: "",
            editAbleIndex: 0,
            edit: false
        }
        this.editAble = this.editAble.bind(this);
        this.enterInput = this.enterInput.bind(this);
        this.completedTodo = this.completedTodo.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    enterInput(e) {
        this.setState({text: e.target.value});
    }

    editAble(e) {
        this.setState({editAbleIndex: e.target.id});
        this.props.editActive(e.target.id);
    }

    updateItem(){
        this.props.updateTodointoList(this.state); 
    }
    completedTodo(e) {        
        if(e.target.value == 'on') {
            this.props.completedTodo(e.target.id);
        }
    }
    render() {
        const todos = this.props.rowData;
        return (
            <table cellSpacing="10">
                <tbody>
                    {  
                        todos.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <input type="checkbox" id={i} onChange={this.completedTodo} />
                                </td>
                                    {
                                        !item.edit ? (
                                            <React.Fragment>
                                                <td width="30%">
                                                    <label htmlFor={i}>{item.text}</label>
                                                </td>
                                                <td>
                                                    <button type="button" id={i} onClick={this.editAble}>Edit</button>
                                                </td>
                                            </React.Fragment>
                                        )
                                        :
                                        ""
                                    }
                                    {
                                    item.edit ?  ( 
                                        <React.Fragment>
                                            <td>
                                                <input type="text" placeholder="" defaultValue={item.text} onChange={this.enterInput} />                                        
                                            </td>
                                            <td>                                        
                                                <button type="button" id={i} onClick={this.updateItem}>Save</button>
                                            </td>
                                        </React.Fragment>
                                        )
                                        :
                                        ''
                                    }
                                
                                <td>
                                    <button type="button" onClick={()=> this.props.deleteTodo(i)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }                   
                </tbody>
            </table>
        )
    }
}
