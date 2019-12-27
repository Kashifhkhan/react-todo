import React, { Component } from 'react'

export default class FormComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ""
        }
        this.sumitTodo = this.sumitTodo.bind(this);
        this.enterInput = this.enterInput.bind(this);
    }

    enterInput(e){
        this.setState({text: e.target.value});
    }

    sumitTodo(e) {
        e.preventDefault();
        if(this.state.text) {            
            this.props.addTodointoList(this.state.text); 
            e.target.reset();  
        }
    }

    render() {
        return (
            <div className="todo-form">
                <h2>Check list</h2>
                <form onSubmit={this.sumitTodo}>
                    <div>
                        <label>Add Todo</label>
                        <input type="text" placeholder="Enter the Todo" value={this.props.value} onChange={this.enterInput} />
                        <button type="submit">Submit</button>
                    </div>                    
                </form>
            </div>
        )
    }
}
