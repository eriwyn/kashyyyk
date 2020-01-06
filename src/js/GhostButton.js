import React from "react";
import {Link} from "react-router-dom";

export default function GhostButton(props) {
return <Link to={props.lien} className="ghostButton"> {props.text} </Link>
}
