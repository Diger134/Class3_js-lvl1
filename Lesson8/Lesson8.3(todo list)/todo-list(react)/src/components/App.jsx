import React, {Component} from 'react'
import TaskList from './TaskList'
import EditInput from './EditInput'
import DateComponent from './Date'
// import {url} from '../consts'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: '',
            editInputText: '',
            tasksData: [],
            visibleEditInput: false,
            locationEditInput: 0,
            editInputIndex: 0,
            date: new Date().toLocaleString('ru', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
    }
    this.inputValue = React.createRef();
    }
    
    componentDidMount = () => {

        if (JSON.parse(localStorage.getItem('tasks')) !== null) {
            this.setState({
                tasksData: JSON.parse(localStorage.getItem('tasks'))
            })

        }
        // fetch(url)
        //     .then(data => data.json())
        //     .then(data => {
        //         this.setState({
        //             tasksData: data
        //         })
        //         console.log(this.state.tasksData)
        //             })


    }

    onInputTextChange = (event, ) => this.setState({ 
            inputText: event.target.value
    })

    onEditInputTextChange = (event) => this.setState({ 
        editInputText: event.target.value
})

    addTaskByPressEnter = (event) => {
        if (event.key === 'Enter' && event.target.value !== '') {
            const changedTasksData = [...this.state.tasksData];
            changedTasksData.push({
                value: this.state.inputText, 
                completeStatus: false,
                date: 'Добавленно: ' + this.state.date
            })
            event.target.value = '';
            this.setState({
                tasksData: changedTasksData,
                inputText: event.target.value
            }, () => localStorage.setItem('tasks', JSON.stringify(this.state.tasksData)))           
        }
    }

    addTaskByClickBtn = (event) => {
        if (this.state.editInputText) {
            const changedTasksData = [...this.state.tasksData]
          changedTasksData[+event.target.dataset.index].value = this.state.editInputText;
          changedTasksData[event.target.dataset.index].date = 'Измененно: ' + this.state.date;
          let changedEditInputText = '';
          this.setState({
              tasksData: changedTasksData,
              visibleEditInput: false,
              editInputText: changedEditInputText
          }, () => localStorage.setItem('tasks', JSON.stringify(this.state.tasksData)))
        }
        let changedInputText = this.state.inputText;
        if (changedInputText !== '') {
        const changedTasksData = [...this.state.tasksData]
        changedTasksData.push({
            value: this.state.inputText, 
            completeStatus: false,
            date: 'Добавленно: ' + this.state.date
        })
        changedInputText = '';
        this.inputValue.current.value = '';
        this.setState({
            tasksData: changedTasksData,
            inputText: changedInputText
        }, () => localStorage.setItem('tasks', JSON.stringify(this.state.tasksData)))
        }
        
    }

    focusEditText = (event) => {
        event.target.select()
    }

    removeTask = (event) => {
            const changedTasksData = [...this.state.tasksData];
            changedTasksData.splice(event.target.dataset.id, 1)
            this.setState({
                tasksData: changedTasksData
            }, () => localStorage.setItem('tasks', JSON.stringify(this.state.tasksData)))
        }


    clearTasksList = () => {
        if (this.state.tasksData.length !== 0) {
            const clearedTaskdList = [...this.state.tasksData]
            clearedTaskdList.length = 0
            this.setState({
            tasksData: clearedTaskdList
        }, () => localStorage.setItem('tasks', JSON.stringify(this.state.tasksData)))
        }
        
    }

    togleEditInput = (event) =>{
        let changedLocationEditInput  = event.clientY - 45;
        let changedEditInputIndex = +event.target.dataset.id;
        let changedEditInputText = this.state.tasksData[+event.target.dataset.id].value;
        this.setState({
            editInputText: changedEditInputText,
            visibleEditInput: !this.state.visibleEditInput,
            locationEditInput: changedLocationEditInput,
            editInputIndex: changedEditInputIndex
        })
    }

    editTaskByPressEnter = (event) => {
        if (event.key === 'Enter' && event.target.value !== '') {
          const changedTasksData = [...this.state.tasksData];
          changedTasksData[event.target.dataset.index].value = event.target.value;
          changedTasksData[event.target.dataset.index].date = 'Измененно: ' + this.state.date
          this.setState({
              tasksData: changedTasksData,
              visibleEditInput: false,
          }, () => localStorage.setItem('tasks', JSON.stringify(this.state.tasksData)))
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
                    <input ref = { this.inputValue } onChange = {this.onInputTextChange} onKeyPress = {this.addTaskByPressEnter}  type="text" className="todo_list-input-text" />
                    <TaskList  togleEditInput = {this.togleEditInput} removeTask = {this.removeTask} tasks = {this.state.tasksData} date = {this.state.date} />
                <div className="todo_list-button-container">
                    <button data-index = {this.state.editInputIndex} onClick = {this.addTaskByClickBtn} className="todo_list-button add-task">Добавить</button>
                    <button  onClick = {this.clearTasksList} className="todo_list-button clear-todo-list">Очистить</button>
                </div>
            </div>

            )
    }

}

export default App;