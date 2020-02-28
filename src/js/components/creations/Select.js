import React, {useState} from "react";

export default function Select(props){
  var val=JSON.parse("["+props.values+"]");
  var texts=JSON.parse("["+props.texts+"]");
  const [value, setValue]=useState(val[0])

  const changeSelect=(event)=>{
    setValue(event.target.value)
  }
  var codeSelect=[];
  //codeSelect.push(<div><select id={props.id} className={props.className} value={value} onChange={changeSelect}>)
  for(var i=0; i<val.length ; i++){
      var valu=val[i];
      var txt=texts[i]
      codeSelect.push(<option value={valu}>{txt} </option>)
    }

  return <div>
    <select id={props.id} className={props.className} value={value} onChange={changeSelect}>
      {codeSelect}
    </select></div>;

}
