import beautify_html  from 'html';

function createInputTextHtml(element) {
    let inputHtml = 
        '<div>' +
            '<label for="' + element.id + '">' + element.libelle + '</label>' +
            '<input type="text" id="' + element.id + '" name="' + element.id + '" placeholder="' + element.texte + '">' +
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

function createTextAreaHtml(element) {
    let inputHtml = 
        '<div>' +
            '<label for="' + element.id + '">' + element.libelle + '</label>' +
            '<textarea id="' + element.id + '" name="' + element.id + '" placeholder="' + element.texte + '">' +
        '</div>';

    return inputHtml;
}

//     {"type": "zone_texte", "libelle" : "Zone de texte", "texte": "Entrez du texte"}

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

            case "zone_texte":
                contentHtml += createTextAreaHtml(element);
                break;
         
             default:
                 break;
         }   
    });

    contentHtml += '</form>';
    
    contentHtml = beautify_html.prettyPrint(contentHtml);

    return contentHtml;
}