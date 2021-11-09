import React, { useEffect, useState } from 'react'
import InputTodo from './InputTodo'
import TaskItem from './TaskItem'
import ModalDetails from './ModalDetails'

const BodyUndone = (props) => {
    const {
        totalList,
        loading,
        data
    } = props

    const [item, setItem] = useState()

    const _renderList = () => {
        if(data.length === 0) {
            return (<p>No Item Todo</p>)
        }else{
            return data.map((item, idx) => {
                return (
                    <TaskItem data={item} index={idx} done={false}/>
                )
            })
        }
    }

    return (
        <div className="wrapper">
            <header>Task</header>
            <InputTodo total={totalList}/>
            {loading ? 
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div> :
                <ul className="todoList">
                    {_renderList()}
                </ul>
            }
            <div className="footer">
                <span>You have {data.length}<span className="pendingTasks"></span> pending tasks</span>
            </div>
        </div>
    )
}

export default BodyUndone