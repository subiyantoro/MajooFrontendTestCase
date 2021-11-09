import { useState } from "react"
import { connect, useDispatch } from "react-redux";
import { doneActionTodo, undoneActionTodo } from "../actions/todo";
import { DELETE_TODO } from "../configs/types";
import ModalDetails from "./ModalDetails";

const TaskItem = (props) => {
    const { data, onPressItem, done, index, actionDone, actionUndone } = props
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <li key={data.id}>
            {done ? 
                <span className="icon" onClick={() => actionUndone(index, data)}><i class="fa fa-arrow-left"></i></span> : 
                <span className="icon" onClick={() => actionDone(index, data)}><i class="fa fa-check"></i></span>
            }
                <div onClick={handleShow}>
                    {data.title}
                </div>
            </li>
            <ModalDetails showModal={show} onHideModal={handleClose} data={data} index={index} done={done}/>
        </>
    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        actionDone: (index, data) => dispatch(doneActionTodo(index, data)),
        actionUndone: (index, data) => dispatch(undoneActionTodo(index, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem)