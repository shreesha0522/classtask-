"use client";
//user interactivity/states
import {useEffect, useState} from "react";
export default function Page() {
    
    const [count, setCount] = useState(0);
    //state hooks
    //[value,setter func]
    //state is variable that causes component to re-render when changed
    //when count changes,component using "count" re-renders

    const handlePlus =()=>{
        setCount(count + 1);

    }
    // dependency check/watch
    useEffect(()=>{
        alert("Component mounted");
    },[]);
    useEffect(()=>{
        if(count == 0){
            alert("Count is zero");

        }
    },[count]);// every time count changes,this function run
    //[count,var2,...] multiplie dependencies can be watched
    
  

    

    return (
        //re-render when state changes
        <div>
        <div>Count: {count}</div>
        <button onClick={handlePlus} className="border p-2 bg-blue-500 text-white rounded">
        Plus</button>
        <button onClick={()=>setCount(count -1)}//update with arrow function
        className="border p-2 bg-red-500 text-white rounded ml-2">
        Minus</button>
     
        </div>
    );
}