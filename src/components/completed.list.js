import React, { Component } from 'react'

export default class CompletedList extends Component {
    render() {
        const todos = this.props.rowData;
        return (
            <div>
                <ul>
                    {  
                        todos.map((item, i) => (
                            <li key={i}>{item.text}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
