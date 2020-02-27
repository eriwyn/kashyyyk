import beautify_html  from 'html';

function createInputTextHtml(element) {
    let inputHtml = 
        '<div>' +
            '<label for="' + element.id + '">' + element.libelle + '</label>' +
            '<input type="text" id="' + element.id + '" name="' + element.id + '">' +
        '</div>';

    return inputHtml;
}

function createButtonHtml(element) {
    let inputHtml = 
        '<div>' +
            '<button id="' + element.id + '" name="' + element.id + '">' + element.texte + '</button>' +
        '</div>';

    return inputHtml;
}

export default function jsonToHtml(array) {
    let contentHtml = '<form>';

    array.forEach(element => {
        switch (element.type) {
            case "champ_texte":
                contentHtml += createInputTextHtml(element);
                break;

            case "bouton":
                contentHtml += createButtonHtml(element);
                break;
         
             default:
                 break;
         }   
    });

    contentHtml += '</form>';
    
    contentHtml = beautify_html.prettyPrint(contentHtml);

    return contentHtml;
}