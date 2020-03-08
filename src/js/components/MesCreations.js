import React  , {useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import Modal from './Modal';
import "./../../css/MesCreations.scss"
import { trackPromise } from 'react-promise-tracker';

export default function MesCreations(props){
    const [creation, setCreation]=useState([]);
    const [show,setShow]=useState(false);
    const [idToDelete,setIdToDelete]=useState('');
    const [created_at,setCreated_at]=useState([]);
    const id=1;
    const showModal=(e)=>{
        setShow(!show);
        setIdToDelete(e.target.key);
    }
    useEffect(() => { axios.get("https://kashyyyk.stark.mmi-unistra.fr/mescreations").then(response => {
          setCreation(response.data) 
          console.log(response) 
          console.log(created_at)      
      });
    }, []);

    return <main className="main">
        <h1>Mes créations</h1>
        <table>
            <caption>Mes différents projets :</caption>
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
                         type="formulaire";
                    }
                    else if(creation.type==2){
                         type="tableau";
                    }
                    if(creation.updated_at==undefined){//cas où le projet n'a pas été modifié
                        creation.updated_at=date;
                    }
                    const id=creation.id;
                    return (
                        <tr key={id}>
                            <td>{type}</td>
                            <td>{creation.name}</td>
                            <td>{date}</td>
                            <td>{creation.updated_at}</td>
                            <td ><Link to={"/"+type } params={{"id":creation.id}} className="iconeWhite"><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Link></td>
                            <td ><span onClick={e=>showModal(e)} className="iconeRed"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></span></td>
                        </tr>
                    )

                })}
            </tbody>
        </table>

        <Modal onClose={showModal} show={show}>
            Voulez vous vraiment supprimer votre création ?
        </Modal>
    </main>




};
