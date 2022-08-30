import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { setData, fetchData, incrementId, decrementId, changeId, reset } from './features/dataSlice'

function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

  const renderImg = () => {
    if (data.apiData) {
      return <img style={{ 'width': '100vw' }} src={data.apiData.primaryImage} alt={data.apiData.Title} />
    } else {
      return <p>image here</p>
    }
  }

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

export default App;
