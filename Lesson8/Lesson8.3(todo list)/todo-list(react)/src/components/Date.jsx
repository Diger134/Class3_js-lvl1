import React from 'react'

export default function Date(props) {
    let date = props.date
    return (
    <div className = "todo_list-date">Текущий день: {date}</div>
    )
    
}