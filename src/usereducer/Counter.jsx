import { useReducer } from "react";

const initialState={count:0}
function reducer(state1,action){
    switch(action.type){
        case "INCREMENT" :
            return {...state1,count:state1.count+action.payload}
        case "DECREMENT" :
            return {...state1,count:state1.count-1}
        case "RESET" :
            return {...state1,count:initialState.count}
        
        
    }
}
export default function Counter(){
    const[state1,dispatch1]=useReducer(reducer,initialState)
    const[state2,dispatch2]=useReducer(reducer,initialState)

    function increment1(){
        dispatch1({type:"INCREMENT",payload:10})
    }
    function decrement1(){
        dispatch1({type:"DECREMENT"})
    }
    function increment2(){
        dispatch2({type:"INCREMENT",payload:20})
    }
    function decrement2(){
        dispatch2({type:"DECREMENT"})
    }
    function reset(){
        dispatch({type:"RESET"})
    }
 return(
    <>
     <h1>{state1.count}</h1>
     <h1>{state2.count}</h1>
     <button onClick={increment1} className="btn btn-warning mx-2">Increment-1</button>
     <button onClick={decrement1} disabled={state1.count<=0?true:false} className="btn btn-warning mx-2">Decrement-1</button>
     
     <button onClick={increment2} className="btn btn-warning mx-2">Increment-2</button>
     
     <button onClick={decrement2} className="btn btn-warning mx-2">Decrement-2</button>
     <button onClick={reset} className="btn btn-warning">Reset</button>

    </>
 )
}