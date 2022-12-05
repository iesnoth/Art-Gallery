import React from "react";
import { clearData, fetchData, incrementId, decrementId } from '../features/dataSlice'
import {useDispatch} from 'react-redux'

function Buttons(){
    const dispatch = useDispatch()
    return(
        <div>
        <button onClick={() => dispatch(fetchData())}>Thunk!</button>
        <button onClick={() => dispatch(clearData())}>Clear</button>
        <button onClick={() => dispatch(incrementId())}>Next</button>
        <button onClick={() => dispatch(decrementId())}>Back</button>
      </div>
    )
}

export default Buttons