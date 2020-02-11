import React from "react";


export default class ImporterCsv extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

 

  render() {
    return <form onSubmit={this.handleSubmit}>
      <label for="csv">Importer votre csv</label>
      <input type="file"
      id="csv" name="importCsv"
      accept=".csv" ref={this.fileInput}></input>
    <button type="submit">Générer le code</button>
  </form>
  }
}
