import React from 'react'

export default function EditInput({visibleEditInput, style, hideEditInput, value, focusEditText, editTaskByPressEnter, editInputIndex, onEditInputTextChange}) {
    return(
        visibleEditInput && <input data-index = {editInputIndex}  onChange = {onEditInputTextChange} onKeyPress = {editTaskByPressEnter} onBlur = {hideEditInput} style = {style} type="text" className="todo_list-edit-text" defaultValue = {value} autoFocus onFocus ={focusEditText} />
    )   
}