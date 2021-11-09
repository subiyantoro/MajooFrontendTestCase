import { useEffect, useState } from 'react'
import { Button, FormControl, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { removeTodoData, updateDoneTodo, updateTodo, updateUndoneTodo } from '../actions/todo'

const ModalDetails = (props) => {
    const {
        data,
        showModal,
        onHideModal,
        deleteTodo,
        updateDoneTodoData,
        updateUndoneTodoData,
        index,
        done
    } = props

    let [title, setTitle] = useState("")
    let [description, setDescription] = useState("")

    const _updateData = () => {
        let payload = {
            id: data.id,
            title: title === "" ? data.title : title,
            description: description === "" ? data.description : description,
            status: 0,
            created_at: data.created_at
        }
        done ? updateDoneTodoData(payload) : updateUndoneTodoData(payload)
        onHideModal()
    }

    return (
        <Modal show={showModal} onHide={onHideModal} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    <FormControl
                        className="inputTitle"
                        defaultValue={data.title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormControl
                    placeholder="No Description Todo Here"
                    className="inputTitle"
                    defaultValue={data.description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={_updateData}>Save Changes</Button>
                {
                    done ? null : <Button variant="danger" onClick={() => {deleteTodo(index); onHideModal()}}>Delete Todo</Button>
                }
            </Modal.Footer>
        </Modal>
    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        deleteTodo: (index) => dispatch(removeTodoData(index)),
        updateUndoneTodoData: (data) => dispatch(updateUndoneTodo(data)),
        updateDoneTodoData: (data) => dispatch(updateDoneTodo(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalDetails)