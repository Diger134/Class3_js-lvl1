import React, {Component} from 'react'

class Task extends Component {
    constructor(props) {
        super(props)

        this.state = {
            completeStatus: this.props.task.completeStatus
        }

    }

    render() {
        const {task} = this.props
        const {index} = this.props
        return (
            <li className = "todo_list-task">
                <p onClick = {this.changeStatus} className = {'todo_list-task-text ' + (this.state.completeStatus ? 'todo_list-task-text_complete': '')}>{task.value}</p>
                <i data-id = {index} onClick = {this.props.togleEditInput} className="fa fa-edit btn_edit"></i>
                <i data-id = {index} onClick = {this.props.removeTask} className="fa fa-trash btn_remove"></i>
            </li>   
        )
    }

    changeStatus = () => {
        const {task} = this.props
            task.completeStatus = !task.completeStatus
        this.setState({
            completeStatus: task.completeStatus

        })
        console.log(task)
    }

}



export default Task;