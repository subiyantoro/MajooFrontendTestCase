import { useState } from "react"
import { connect, useDispatch } from "react-redux"
import { addTodo } from "../actions/todo"
import { ADD_TODO } from "../configs/types"

const InputTodo = (props) => {
    const {total, addNewTodo} = props
    const [title, setTitle] = useState("")
    const _addNewTodo = () => {
        const today = new Date();
        const month = today.getMonth()+1
        let payload = [{
            id: total + 1,
            title: title,
            description: "",
            status: 0,
            createdAt: today.getFullYear() + '-' + month + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes()
        }]
        addNewTodo(payload)
        setTitle("")
    }
    return (
        <div className="inputField">
            <input type="text" placeholder="Add your new todo" onChange={(event) => setTitle(event.target.value)} required value={title}/>
            <button onClick={_addNewTodo} disabled={title === ""}><i className="fa fa-plus"></i></button>
        </div>
    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        addNewTodo: (data) => dispatch(addTodo(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTodo)