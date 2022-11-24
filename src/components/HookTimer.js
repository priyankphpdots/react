import React,{useState,useEffect,useRef} from 'react'

function HookTimer() {
    const [prevTimer,setTimer] = useState(0)
    const intervalRef  = useRef()
    useEffect(()=>{
         intervalRef.current = setInterval(()=>{
            setTimer(prevTimer=> prevTimer+1)
        },1000)
        return()=>{
          clearInterval(intervalRef.current)
        }
    },[])
  return (
    <div>
      Hook timer - {prevTimer}
      <button onClick={()=>clearInterval(intervalRef.current )}>Clear Hook Timer</button>
    </div>
  )
}

export default HookTimer
