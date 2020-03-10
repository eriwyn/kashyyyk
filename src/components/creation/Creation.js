import React  from 'react';
import Tab from './Tab.js';
import CreateTab from './CreateTab.js';
import CodeTab from './CodeTab.js';


export default function Creation(props) {
    const [fenetre, setFenetre] = React.useState(<CreateTab type={props.type} />);

    function isActive(Tab) {
        if ((Tab === "creation" && fenetre === <CreateTab type={props.type} />) || (Tab === "code" && fenetre === <CodeTab type={props.type} />)) {
            return "active";
        }
        return "";
    }

    return <div className="creation">
        <Tab text="Création" active={isActive("creation")} action={() => setFenetre(<CreateTab type={props.type} />)} />
        <Tab text="Code" active={isActive("code")} action={() => setFenetre(<CodeTab type={props.type}/>)} />

        {fenetre}

    </div>
}
