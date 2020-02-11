import React from "react";


export default class ImporterCsv extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event){
    var htmlViaJson=[];
      event.preventDefault();
      var file=this.fileInput.current.files[0];
      var reader = new FileReader();
      var content;
      reader.onload = function(event) {
        content=reader.result;
        content=contentsplit('\n');
        var htmlViaCsv=[];
        var hLigne=[];
        var lignes=[];
        var ligne1=content[0];

        ligne1=ligne1.split(';');//première ligne du tableau
        for(var j=0;j<ligne1.length;j++){
            hLigne.push(<th>{ligne1[j]}</th>)
        }
        hLigne=<tr>{hLigne}</tr>

        for(var i=1;i<content.length;i++){//tbody
            let tr=[];
            let ligne=content[i];
            ligne=ligne.split(';')
            for(var k=0;k<ligne.length;k++){
                tr.push(<td>{ligne[k]}</td>)
            }
            lignes.push(<tr>{tr}</tr>)
        }
        //création du tableau à envoyer
        htmlViaCsv.push(<thead>{hLigne}</thead>)
        htmlViaCsv.push(<tbody>{lignes}</tbody>)
        htmlViaCsv=<table>{htmlViaCsv}</table>
        return htmlViaCsv;
      }
         
      reader.readAsText(file);

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
