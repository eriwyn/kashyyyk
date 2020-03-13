import React  from 'react';
import Tab from './Tab.js';
import CreateTab from './CreateTab.js';
import CodeTab from './CodeTab.js';


export default function Creation(props) {
    const [fenetre, setFenetre] = React.useState("Création");

    function getActiveTab() {
        if (Tab === "creation" && fenetre === <CreateTab type={props.type} />)  {
            return "Création";
        } else if ((Tab === "code" && fenetre === <CodeTab type={props.type} />)) {
            return "Code";
        }
        return "";
    }

    return <div className="creation">
        <Tab text="Création" activeTab={fenetre} action={() => setFenetre("Création")} />
        <Tab text="Code" activeTab={fenetre} action={() => setFenetre("Code")} />

        {(() => {
            switch (fenetre) {
                case "Création":   return <CreateTab type={props.type} />;
                case "Code": return <CodeTab type={props.type}/>;
            }
        })()}

    </div>
}
