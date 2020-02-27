import React from "react";
import "./../../css/Modal.scss";
import PropTypes from "prop-types";

export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  suppr=e=>{
    //rajouter le code axios delete pour venir supprimer l'enregistrement sur lequel on a cliqué
  }
   
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal" id="modal">
        <h2>Attention la suppression est définitive :O</h2>
        <div className="content">{this.props.children}</div>
        <div className="actions">
          <button className="btnSuppresssion" onClick={this.suppr}>Supprimer </button>
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