import React  , {useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

export default function MesCreations(props){

    const [creation, setCreation]=useState('');
    const [show,setShow]=useState(false);

    const showModal=(e)=>{
        setShow(!show)
    }
//manque l'adresse de la bdd pour pouvoir récupérer les différents enregistrements
//     useEffect(() => { axios.get()).then(response => {
//          setCreation(response.data.creations)          
//      });
//    }, []);

    return <main>
        <h1>Mes créations</h1>
        <table>
            <thead>
                <tr>
                    <th>Type de création</th>
                    <th>Créé le: </th>
                    <th>Dernière modification</th>
                    <th>Modification</th>
                    <th>Suppression</th>
                </tr>
            </thead>
            <tbody>
                {creation.map(function(creation){
                    const id=creation.id;
                    return (
                        <tr key={id}>
                            <td>{creation.type}</td>
                            <td>{creation.createdAt}</td>
                            <td>{creation.updatedAt}</td>
                            <td><Link to={"/"+creation.type } params={{"id":creation.id}}><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Link></td>
                            <td><button onClick={e=>showModal(e)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button></td>
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
