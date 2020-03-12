import React  from 'react';

import PreviewForm from '../creation/form/PreviewForm.js';
import ToolBoxForm from '../creation/form/ToolBoxForm.js';

import PreviewTable from '../creation/table/PreviewTable.js';
import ToolBoxTable from '../creation/table/ToolBoxTable.js';

import ElementList from '../creation/form/ElementList.js'
import ImportForm from '../creation/form/ImportForm.js'

export default function FenetreCreation(props) {

    const CreateForm = () => {
        return <div className="fenetreCreation">
            <div>
                <ToolBoxForm />
                <PreviewForm />
            </div>
            <ElementList type="formulaire" />
            <ImportForm />
        </div>
    }

    const CreateTable = () => {
        return <div className="fenetreCreation">
            <div>
                <ToolBoxTable />
                <PreviewTable type="tableau" />
            </div>
        </div>
    }

    switch (props.type) {
        case "formulaire":
            return <CreateForm />
        case "tableau":
            return <CreateTable />
    
        default:
            return <div></div>
    }
}
