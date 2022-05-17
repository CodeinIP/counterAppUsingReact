import React from "react";
const Counter = ({initialValue})=>{

    // hooks are set of inbuild react function in used to interact with VDOM.

    //hooks use usestate;
    // use state is a hook in react 
    // which is used to inform VDOM of the changes that you needs to be rendered on main dom
    // it return 2 things in an array
    // variable and a function to update that variable

    // state 
    // state is a info that is changing on DOM;;

    const [count, setCount] = React.useState(initialValue);
    // const incrementCount = ()=>{
    //     setCount(count+1);
    // };
    // const decrementCount = ()=>{
    //     setCount(count-1);
    // };
    let h1Color;
    if(count%2===0){
        h1Color = 'green';
    }
    else{
        h1Color = 'red';
    }
    
    return (
            <div>
            <h1 className={h1Color}>Counter App: {count}</h1>
            <button className="btn" onClick={()=> setCount(count+1)}>Increment</button>
            <button className="btn" onClick={()=> {
                if(count>0){
                    setCount(count-1)
                }
            }}>Decrement</button>
            <button className="btn" onClick={()=> setCount(count*2)}>Double</button>
            <button className="btn" onClick={()=> setCount(0)}>Set to Zero</button>
        </div>
    )
}
export default Counter;