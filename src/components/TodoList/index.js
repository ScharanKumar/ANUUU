import {Component} from 'react'

import TodoItem from "../TodoItem"

import "./index.css"

class TodoList extends Component{
    state={list:""}
    render(){
         const {list} = this.state
        return(
            <div className='container2'>
            <h1 className='head2'>TodoList</h1>
            {/* <ul>
              {
                list.map(every=>(
                    <TodoItem details={every} key={every.id}/>
                ))
              }
            </ul> */}
            <button className='but' onClick={this.fun}>ADD </button>
        </div>
        )
    }
}

export default TodoList