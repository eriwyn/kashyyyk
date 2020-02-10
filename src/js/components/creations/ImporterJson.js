import React from "react";


export default class ImporterJson extends React.Component {
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
         content= JSON.parse(reader.result);
         console.log(content)
         if(content.elements!=null){
           switch (window.location.href){
             case "/formulaire":
              console.log('on est la')
               for(var i=0;i<content.elements.length;i++){
                 var elem=content.elements[i];
                 console.log(elem)
                 switch(elem.genre){
                  case "input":
                     htmlViaJson.push(<div><label for="input'+ i +'">{elem.libelle}</label><input id="input'+ i +'\" type={elem.type}></input></div>)
                     break;
                   case "select":
                     var optSelect=[];
                     for(var j=0;j<elem.options.length;j++){
                       var valu=elem.options[j];
                       optSelect.push(<option value={valu}>{valu} </option>)
                     }
                     htmlViaJson.push(<div><label for="select'+i+'">{elem.libelle}</label><select id="select'+i+'">{optSelect}</select></div>)
                     break;
                   case "radio":
                     var valRadio=[];
                     for(var j=0;j<elem.values.length;j++){
                       var valu=elem.values[j];
                       valRadio.push(<div><input type="radio" id="radio'+i+'" name="radio'+i+'"></input><label htmlFor="radio'+i+'">{valu}</label></div>)
                     }
                     htmlViaJson.push(<div>{valRadio}</div>)
                     break;
                 }
               }
                    break;
                  case "/tableau":
                    var hLigne=[];
                    var lignes=[];
                    var fLigne=[];
                    for(var i=0;i<content.elements.length;i++){
                      var elem=content.elements[i];
                      if(elem.thead!=undefined){
                        console.log(elem.thead)
                        var thead=[];
                        for(var j=0;j<elem.thead.length;j++){
                          var th=elem.thead[j];
                          thead.push(<th>{th}</th>)
                        }
                        hLigne.push(<thead>{thead}</thead>)
                      }
                      else{
                        if(elem.ligne!=undefined){
                        var tr=[];
                        for(var j=0;j<elem.ligne.length;j++){
                          var td=elem.ligne[j];
                          tr.push(<td>{td}</td>)
                        }
                        lignes.push(<tr>{tr}</tr>);
                      }
                      else{
                        if(elem.tfoot!=undefined){
                          lignes.push(<tbody>{lignes}</tbody>)
                          var tfoot=[];
                          for(var j=0;j<elem.tfoot.length;j++){
                            var th=elem.tfoot[j];
                            tfoot.push(<td>{th}</td>)
                          }
                          fLigne.push(<tfoot>{tfoot}</tfoot>)
                        }
                      }
                    }
                  }
                  console.log(lignes)
                  htmlViaJson.push(<table>{hLigne}{lignes}{fLigne}</table>);
                  console.log(htmlViaJson)
                  break;
                  case "/menu":
                    var menu=[];
                    for(var i=0;i<content.elements.length;i++){
                      var elem=content.elements[i];
                      var li=elem.libelle;
                      if(elem.sousMenu.length>1){
                        var sousMenu=[];
                        for(var j=0;j<elem.sousMenu.length;j++){
                          var liSousMenu=elem.sousMenu[j].libelle;
                          sousMenu.push(<li>{liSousMenu}</li>);
                        }
                        menu.push(<li>{li}<ul>{liSousMenu}</ul></li>);
                      }
                      else{ menu.push(<li>{li}</li>);}
                    }
                    htmlViaJson.push(<nav><ul>{menu}</ul></nav>)
         }
           console.log(htmlViaJson)
           return htmlViaJson;
         }

       };
      reader.readAsText(file);

    }


  render() {
    return <form onSubmit={this.handleSubmit}>
      <label for="json">Importer votre json</label>
      <input type="file"
      id="json" name="importJson"
      accept=".json" ref={this.fileInput}></input>
    <button type="submit">Générer le code</button>
  </form>
  }
}
