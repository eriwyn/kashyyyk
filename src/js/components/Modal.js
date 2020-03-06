import React from "react";
import axios from 'axios';
import "./../../css/Modal.scss";
import PropTypes from "prop-types";

export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  suppr=e=>{
    var id=this.props.idToDelete;
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
        <h2>Attention la suppression est définitive :0</h2>
        <div className="content">{this.props.children}</div>
        <div className="actions">
          <button className="btnSuppression" onClick={this.suppr}>Supprimer </button>
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