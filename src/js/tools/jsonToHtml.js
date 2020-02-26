import beautify_html  from 'html';

function createInputHtml(element) {
    let inputHtml = 
        '<div>' +
            '<label for="' + element.id + '">' + element.libelle + '</label>' +
            '<input id="' + element.id + '" name="' + element.id + '" type="' + element.type+ '">' +
        '</div>';

    return inputHtml;
}

export default function jsonToHtml(array) {
    let contentHtml = '<form>';

    array.forEach(element => {
         switch (element.genre) {
             case "input":
                 contentHtml += createInputHtml(element);
                 break;
         
             default:
                 break;
         }   
    });

    contentHtml += '</form>';
    
    contentHtml = beautify_html.prettyPrint(contentHtml);

    return contentHtml;
}