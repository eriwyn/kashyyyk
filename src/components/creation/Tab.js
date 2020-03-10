import React  from 'react';

import '../../css/creation/tab.scss';

export default function Tab(props) {
    if (props.active) {
        return <button className={"tab-" +  props.active} onClick={props.action}>{props.text}</button>
    } else {
        return <button className={"tab"} onClick={props.action}>{props.text}</button>
    }
}
