import beautify_html  from 'html';

export default function tableToHtml(object) {
    let contentHtml = '<table>';

    if (object.head.length > 0) {
        contentHtml += '<thead>';
        object.head.forEach(row => {
            contentHtml += '<tr>';
            row.forEach(cell => {
                contentHtml += '<th>' + cell.replace('\n', '<br>') + '</th>'
            });
            contentHtml += '</tr>';
        });
        contentHtml += '</thead>';
    }

    if (object.body.length > 0) {
        contentHtml += '<tbody>';
        object.body.forEach(row => {
            contentHtml += '<tr>';
            row.forEach(cell => {
                contentHtml += '<td>' + cell.replace(/\n/g, '<br>') + '</td>'
            });
            contentHtml += '</tr>';
        });
        contentHtml += '</tbody>';
    }

    if (object.foot.length > 0) {
        contentHtml += '<tfoot>';
        object.foot.forEach(row => {
            contentHtml += '<tr>';
            row.forEach(cell => {
                contentHtml += '<td>' + cell.replace('\n', '<br>') + '</td>'
            });
            contentHtml += '</tr>';
        });
        contentHtml += '</tfoot>';
    }

    contentHtml += '</table>';
    
    contentHtml = beautify_html.prettyPrint(contentHtml);

    return contentHtml;
}