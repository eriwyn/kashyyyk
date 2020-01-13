import React from "react";


export default function ImporterJson(props){

  return <div>
    <label for={props.id}>{props.text}</label>
    <input type="file"
    id={props.id} name={props.name}
    accept=".json"></input>
  </div>
}
