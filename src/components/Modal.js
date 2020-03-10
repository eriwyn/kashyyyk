import React from "react";
import axios from 'axios';
<<<<<<< HEAD:src/js/components/Modal.js
import "./../../css/Modal.scss";
=======
import "../css/components/modal.scss";
>>>>>>> 79025c8c1b9540ce7653017e1197642e4e4c24ed:src/components/Modal.js
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  suppr=e=>{
    var id=this.props.idDelete;
    console.log("id="+id)
    var deleted=1;
    axios.delete("https://kashyyyk.stark.mmi-unistra.fr",id).then(() => {  
      this.props.onClose && this.props.onClose(e);
    })  
  }
   
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal" id="modal">
        <h2><FontAwesomeIcon  icon={faExclamationTriangle}></FontAwesomeIcon> Attention la suppression est définitive </h2>
        <div className="content">{this.props.children}</div>
        <div className="actions">
          <button className="btnSuppression" onClick={this.suppr}>Supprimer</button>
          <button className="toggle-button" onClick={this.onClose}>
            Annuler
          </button>
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};