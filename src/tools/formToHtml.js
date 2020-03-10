import beautify_html  from 'html';
import slugify from './slugify';

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
            '<textarea id="' + element.id + '" name="' + element.id + '" placeholder="' + element.texte + '"></textarea>' +
        '</div>';

    return inputHtml;
}

function createSelectHtml(element) {
    let inputHtml = 
        '<div>' +
            '<label for="' + element.id + '">' + element.libelle + '</label>' +
            '<select id="' + element.id + '" name="' + element.id + '">';
            
    element.valeurs.forEach(value => {
        inputHtml += 
            '<option value="' + slugify(value) + '">' + value + '</option>';
    });
     
    inputHtml += 
            '</select>' +
        '</div>';

    return inputHtml;
}

function createRadioHtml(element) {
    let inputHtml = "";
        
    element.valeurs.forEach(value => {
        inputHtml += 
        '<div>'+
            '<input type="radio" id="' + element.id + '_' + slugify(value) + '" name="' + element.id + '" value="' + slugify(value) + '">' +
            '<label for="' + element.id + '_' + slugify(value) + '">' + value + '</label>' +
        '</div>';
    });

    return inputHtml;
}

function createCheckBoxHtml(element) {
    let inputHtml = "";
        
    element.valeurs.forEach(value => {
        inputHtml += 
        '<div>'+
            '<input type="checkbox" id="' + element.id + '_' + slugify(value) + '" name="' + element.id + '_' + slugify(value) + '">' +
            '<label for="' + element.id + '_' + slugify(value) + '">' + value + '</label>' +
        '</div>';
    });

    return inputHtml;
}

export default function formToHtml(array) {
    let contentHtml = '<form>';

    array.forEach(element => {
        switch (element.type) {
            case "champ_texte":
                contentHtml += createInputTextHtml(element);
                break;

            case "zone_texte":
                contentHtml += createTextAreaHtml(element);
                break;

            case "select":
                contentHtml += createSelectHtml(element);
                break;

            case "radio":
                contentHtml += createRadioHtml(element);
                break;

            case "checkbox":
                contentHtml += createCheckBoxHtml(element);
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