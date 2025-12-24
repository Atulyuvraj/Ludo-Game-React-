
import { useState } from "react"
export default function Ludo(){
    let [move,setmove]=useState({blue:0,yellow:0,green:0,red:0})

    function Countb(){
        move.blue +=1;
        setmove({...move})
    }

    function County(){
        move.yellow +=1;
        setmove({...move})
    }

    function Countg(){
        move.green +=1;
        setmove({...move})
    }

    function Countr(){
        move.red +=1;
        setmove({...move})
    }
    return(
        <div>
            <div className="Board"> 
                <p>Blue move={move.blue}</p>
                <button onClick={Countb} style={{backgroundColor:"blue"}} >+1</button>

                <p>Yellow move={move.yellow} </p>
                <button onClick={County} style={{backgroundColor:"yellow"}}>+1</button>

                <p>Green move={move.green} 
                </p>
                <button onClick={Countg} style={{backgroundColor:"green"}}>+1</button>

                <p>Red move={move.red}</p>
                <button onClick={Countr} style={{backgroundColor:"red"}}>+1</button>

            </div>
        </div>
    )
}