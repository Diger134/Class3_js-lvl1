import React, {Component} from 'react'
import Task from './Task'
import shortid from 'shortid'

class TaskList extends Component {
    
    render() {
        const {tasks} = this.props;
        const taskList = tasks.map((task, i) => 
                <Task togleEditInput = {this.props.togleEditInput} removeTask = {this.props.removeTask} key = {shortid.generate()} task = {task} index = {i} />,
    )

        return (
        <ol className="todo_list-content">
            {taskList}
        </ol>
    )   
    }

}



export default TaskList;