import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrementfunction, Incrementfunction } from '../redux/action'

const CounterButtons = () => {
  const {counter}=useSelector((store)=>store.counterReducer)
    const dispatch=useDispatch()
  return (
    <div>
      <button style={{padding:"15px 50px"}} onClick={()=>dispatch(Incrementfunction())}>ADD</button>&nbsp;&nbsp;&nbsp;
      <button style={{padding:"15px 50px"}} onClick={()=>dispatch(Decrementfunction())} disabled={counter==0}>REDUCE</button>
    </div>
  )
}

export default CounterButtons
