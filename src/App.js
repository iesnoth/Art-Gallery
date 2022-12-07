import './App.css';
import { useSelector, useDispatch, connect } from 'react-redux'
import { fetchData, inputId } from './features/dataSlice'
import { useEffect } from 'react';
import Buttons from './components/buttons';

function App(props) {
  const dispatch = useDispatch()
  //gives the UI access to state variables
  const data = useSelector((state) => state.data)

  const renderImg = () => {
    if(data.apiData) {
      return <img style={{'width': '100vw'}} src={data.apiData.primaryImage} alt={data.apiData.title} />
    } else {
      return <p>image here</p>
    }
  }

  useEffect(() => {
    //in order to trigger API call and dispatch fetchData thunk on rerender
    dispatch(fetchData())
  }, [props.objectId, dispatch])


  return (
    <div className="App">
      <Buttons/>
      <input value={ data.objectId } onChange={(e) => {
        dispatch(inputId(Number(e.target.value)))
      }} />
      <div>
        {data.objectId}
        {renderImg()}
      </div>
    </div>
  );
}


const mapStateToProps = (state, ownProps) => ({ objectId: state.data.objectId })

export default connect(mapStateToProps)(App);