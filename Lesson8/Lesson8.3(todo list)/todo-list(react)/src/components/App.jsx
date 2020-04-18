import React, {Component} from 'react'
import TaskList from './TaskList'
import EditInput from './EditInput'
import DateComponent from './Date'
import {url} from '../consts'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: '',
            editInputText: '',
            tasksData: tasks,
            visibleEditInput: false,
            locationEditInput: 0,
            editInputIndex: 0,
            date: new Date().toLocaleString('ru', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
    }
    }
    
    componentDidMount = () => {
        
        console.log('тут должен быть запрос на сервер' + url)


    }

    onInputTextChange = (event, ) => this.setState({ 
            inputText: event.target.value
    })

    onEditInputTextChange = (event) => this.setState({ 
        editInputText: event.target.value
})

    clearInputValue = (event) => {
        event.target.value = ''
}

    addTaskByPressEnter = (event) => {
        if (event.key === 'Enter' && event.target.value !== '') {
            const changedTasksData = this.state.tasksData
            changedTasksData.push({
                value: this.state.inputText, 
                completeStatus: false
            })
            event.target.value = ''
            this.setState({
                tasksData: changedTasksData,
                inputText: event.target.value
            })
            console.log(this.state.tasksData)
        }
    }

    addTaskByClickBtn = (event) => {
        if (this.state.editInputText) {
            const changedTasksData = this.state.tasksData
          changedTasksData[+event.target.dataset.index].value = this.state.editInputText
          let changedEditInputText = ''
          this.setState({
              tasksData: changedTasksData,
              visibleEditInput: false,
              editInputText: changedEditInputText
          })
        }
        let changedInputText = this.state.inputText
        if (changedInputText !== '') {
        const changedTasksData = this.state.tasksData
        changedTasksData.push({
            value: this.state.inputText, 
            completeStatus: false
        })
        changedInputText = ''
        this.setState({
            tasksData: changedTasksData,
            inputText: changedInputText
        })
        
        console.log(this.state.tasksData)
        }
        
    }

    focusEditText = (event) => {
        event.target.select()
    }

    removeTask = (event) => {
            const changedTasksData = this.state.tasksData
            changedTasksData.splice(event.target.dataset.id, 1)
            this.setState({
                tasksData: changedTasksData
            })
            console.log(this.state.tasksData)
        }


    clearTasksList = () => {
        if (this.state.tasksData.length !== 0) {
            const clearedTaskdList = this.state.tasksData
            clearedTaskdList.length = 0
            this.setState({
            tasksData: clearedTaskdList
        })
        console.log(this.state.tasksData)
        }
        
    }

    togleEditInput = (event) =>{
        let changedLocationEditInput  = event.clientY - 45
        let changedEditInputIndex = +event.target.dataset.id
        let changedEditInputText = this.state.tasksData[+event.target.dataset.id].value
        this.setState({
            editInputText: changedEditInputText,
            visibleEditInput: !this.state.visibleEditInput,
            locationEditInput: changedLocationEditInput,
            editInputIndex: changedEditInputIndex
        })
    }

    editTaskByPressEnter = (event) => {
        if (event.key === 'Enter' && event.target.value !== '') {
          const changedTasksData = this.state.tasksData
          changedTasksData[event.target.dataset.index].value = event.target.value
          this.setState({
              tasksData: changedTasksData,
              visibleEditInput: false
          })
        }
    }

    hideEditInput = () => {
        this.setState({
            visibleEditInput: false
        })
    }

    render() {
        return (
            <div className="todo_list-wrapper">
                <div className="todo_list-header">
                    <h1 className="todo_list-title">Мой список дел</h1>
                    <DateComponent date = {this.state.date} />
                </div>
                    <EditInput  onEditInputTextChange = {this.onEditInputTextChange} editTaskByPressEnter = {this.editTaskByPressEnter} focusEditText = {this.focusEditText} hideEditInput = {this.hideEditInput} style = {{top: `${this.state.locationEditInput}px`}} visibleEditInput = {this.state.visibleEditInput} value = {this.state.editInputText} editInputIndex = {this.state.editInputIndex} />
                    <input   onBlur = {this.clearInputValue} onChange = {this.onInputTextChange} onKeyPress = {this.addTaskByPressEnter}  type="text" className="todo_list-input-text" />
                    <TaskList  togleEditInput = {this.togleEditInput} removeTask = {this.removeTask} tasks = {this.state.tasksData} />
                <div className="todo_list-button-container">
                    <button data-index = {this.state.editInputIndex} onClick = {this.addTaskByClickBtn} className="todo_list-button add-task">Добавить</button>
                    <button  onClick = {this.clearTasksList} className="todo_list-button clear-todo-list">Очистить</button>
                </div>
            </div>

            )
    }

}

export default App;