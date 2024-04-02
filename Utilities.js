function rowsToHTMLTable (rows) {
    let html = '<table border="1">';
    // Assuming rows[0] exists and has all the keys
    html += '<tr>';
    for (let key in rows[0]) {
        html += `<th>${key}</th>`;
    }
    html += '</tr>';

    rows.forEach(row => {
        html += '<tr>';
        for (let key in row) {
            html += `<td>${row[key]}</td>`;
        }
        html += '</tr>';
    });

    html += '</table>';

    return html;
}

function append(dcdc){
    document.getElementById('divforget').appendChild=dcdc;
    
}



module.exports = {
    rowsToHTMLTable:rowsToHTMLTable,
    append:append
};