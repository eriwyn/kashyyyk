import React  from 'react';

import '../../css/creation/tab.scss';

export default function Tab(props) {
    console.log(props.activeTab)
    if (props.activeTab == props.text) {
        return <button className={"tab tab-active"} onClick={props.action}>{props.text}</button>
    } else {
        return <button className={"tab"} onClick={props.action}>{props.text}</button>
    }
}
