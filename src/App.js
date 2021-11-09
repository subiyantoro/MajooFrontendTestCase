import React, {useEffect, useState} from 'react';
import BodyDone from './components/BodyDone';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Todo.css'
import BodyUndone from './components/BodyUndone';
import HeaderApp from './components/HeaderApp';
import { getInitData } from './actions/todo';
import { connect } from 'react-redux';

const App = (props) => { 
  const {
    doneList,
    undoneList,
    loading,
    getInitList
  } = props

  let [doneTodo, setDoneTodo] = useState([])
  let [undoneTodo, setUndoneTodo] = useState([])

  useEffect(() => {
    getInitList()
  }, [])

  return (
    <>
      <HeaderApp />
      <div className="row">
        <div className="col-md-6">
          <BodyUndone loading={loading} data={undoneList} totalList={doneList.length + undoneList.length}/>
        </div>
        <div className="col-md-6">
          <BodyDone loading={loading} data={doneList}/>
        </div>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    doneList: state.todoStore.doneData,
    undoneList: state.todoStore.undoneData,
    loading: state.todoStore.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getInitList: () => dispatch(getInitData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
