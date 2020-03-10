import React from "react";
import {Link} from "react-router-dom";

import '../css/components/ghostButton.scss';

export default function GhostButton(props) {
    return <Link to={props.lien} className="ghostButton"> {props.text} </Link>
}