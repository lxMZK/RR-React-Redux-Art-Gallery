import './App.css';
import { useEffect } from 'react'
import { useSelector, useDispatch , connect } from 'react-redux'
import { fetchData, incrementId, decrementId, changeId, reset } from './features/dataSlice'

const mapStateToProps = (state) => ({
  objectId: state.data.objectId
})

function App(props) {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)
  
  const renderImg = () => {
    if (data.apiData.primaryImage) {
      return <img style={{ 'width': '100vw' }} src={data.apiData.primaryImage} alt={data.apiData.Title} />
    } else {
      return <p>image here</p>
    }
  }
  
  useEffect(()=>{
    dispatch(fetchData())
  }, [props.objectId, dispatch])

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(fetchData())}>Trigger Thunk</button>
        <button onClick={() => dispatch(reset())}>Clear</button>
        <button onClick={() => dispatch(incrementId())}>Next</button>
        <button onClick={() => dispatch(decrementId())}>Back</button>
      </div>
      <input onChange={(e) => dispatch(changeId(e.target.value))} />
      <div>
        {data.objectId}
        {renderImg()}
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(App);
