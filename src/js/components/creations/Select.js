import React, {useState} from "react";

export default function Select(props){

  const [value, setValue]=useState(props.val1)

  const changeSelect=(event)=>{
    setValue(event.target.value)
  }

  return <div>
          <select id={props.id} className={props.className} value={value} onChange={changeSelect}>
            <option value={props.val1}>{props.txt1}</option>
            <option value={props.val2}>{props.txt2}</option>
            <option value={props.val3}>{props.txt3}</option>
          </select>
  </div>
}
