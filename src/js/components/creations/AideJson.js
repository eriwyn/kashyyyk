import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import '../../../css/Json.scss';
export default function AideJson(props){

  return <div className="tooltip">
    <FontAwesomeIcon icon={faQuestionCircle} />
    <span className="tooltiptext">{props.text}</span>
  </div>
}
