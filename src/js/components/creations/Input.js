import React from "react";
import '../../../css/Input.scss';

export default function Input(props) {
  return <div>
    <label for={props.id}>{props.text}</label> <input  id={props.id} className={props.className} type={props.type} placeHolder={props.placeholder}/>
  </div>
}
