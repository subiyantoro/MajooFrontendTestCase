import React, { useEffect } from 'react'
import TaskItem from './TaskItem'

const BodyDone = (props) => {
    const {
        loading,
        data
    } = props

    const _renderList = () => {
        return data.map((item, idx) => {
            return (
                <TaskItem data={item} index={idx} done={true} />
            )
        })
    }

    return (
        <div className="wrapper">
            <header>Task Done</header>
            {loading ? 
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div> : 
                <ul className="todoList">
                    {_renderList()}
                </ul>
            }
            <div className="footer">
                <span>You have {data.length}<span className="pendingTasks"></span> done tasks</span>
            </div>
        </div>
    )
}

export default BodyDone