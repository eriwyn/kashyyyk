import React, {useState} from "react";

export default function RadioButton(props){
  var codeRadioBtn=[]
  var values=JSON.parse("["+props.values+"]")
  for(var i=0;i<values.length;i++){
    var id=props.id+i
    var value=values[i];
    codeRadioBtn.push(<div><input type="radio" id={id} name={props.name}></input><label htmlFor={id}>{value}</label></div>)
  }
    return codeRadioBtn;
}