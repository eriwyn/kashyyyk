import React  , {useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import Modal from '../Modal';
import { trackPromise } from 'react-promise-tracker';

import "../../css/pages/myCreations.scss"

export default function MyCreations(props){
    const [creation, setCreation]=useState([]);
    const [show,setShow]=useState(false);
    const [idToDelete,setIdToDelete]=useState('');
    const [created_at,setCreated_at]=useState([]);
    const [opacityModal,setOpacityModal]=useState(1);
    const showModal=(event,id)=>{
        setShow(!show);
        setIdToDelete(id)
        console.log(id)
        if(!show){
            setOpacityModal(0.1);
        }
        else{
            setOpacityModal(1);
        }

    }
    useEffect(() => { trackPromise(axios.get("https://kashyyyk.stark.mmi-unistra.fr/mescreations").then(response => {
          setCreation(response.data) 
          console.log(response)     
      }));
    }, []);

    return <main className="mainPage" >
        <h1 style={{opacity:opacityModal}}>Mes créations</h1>
        <table style={{opacity:opacityModal}}>
            <thead>
                <tr>
                    <th>Type de création</th>
                    <th>Nom du projet</th>
                    <th>Créé le: </th>
                    <th>Dernière modification</th>
                    <th>Modification</th>
                    <th>Suppression</th>
                </tr>
            </thead>
            <tbody>
                {creation.map(function(creation){
                    console.log(creation.id)
                    const date=new Date(creation.created_at).toLocaleString();
                    var type;
                    if(creation.type=="1"){
                         type="Formulaire";
                    }
                    else if(creation.type==2){
                         type="Tableau";
                    }
                    if(creation.updated_at=="0000-00-00 00:00:00"){
                        creation.updated_at=date;
                    }
                    const id=creation.id;
                    return (
                        <tr key={id}>
                            <td data-label="Type de création">{type}</td>
                            <td data-label="Nom du projet">{creation.name}</td>
                            <td data-label="créé le ">{date}</td>
                            <td data-label="Dernière modification">{creation.updated_at}</td>
                            <td data-label="Modification"><Link to={"/creation-"+type } params={{"id":creation.id}} className="iconeWhite"><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Link></td>
                            <td data-label="Suppression"><span  onClick={event=>showModal(event,id)} className="iconeRed"><FontAwesomeIcon  icon={faTrash}></FontAwesomeIcon></span></td>
                        </tr>
                    )

                })}
            </tbody>
        </table>

        <Modal className="modal" onClose={showModal} show={show} idDelete={idToDelete}>
            Voulez vous vraiment supprimer votre création ?
        </Modal>
    </main>




};
