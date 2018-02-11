window.onload = function() {
    const table = document.querySelector('table');
    const rows = document.querySelectorAll('tr');
    const rowsArray = Array.from(rows);

    table.addEventListener('click', (event) => {
        const rowIndex = rowsArray.findIndex(row => row.contains(event.target));
        const columns = Array.from(rowsArray[rowIndex].querySelectorAll('td'));
        const columnIndex = columns.findIndex(column => column == event.target);
        // console.log(rowIndex, columnIndex)
        switch_elems(rowIndex, columnIndex);
    })
}

function switch_elems(i, j) {
    const table = document.querySelector('table');
    const val1 = table.rows[i].cells[j].innerHTML;

    let row = 0;
    let column = 0;

    for(let t = 0; t <= 2; t++){
        for(let k = 0; k <= 2; k++){
            const empty = table.rows[t].cells[k].innerHTML;
            if(empty == 0){
                row = t;
                column = k;
                break;
            }
        }
    }

    if(i == row && j == (column + 1)){
        const val2 = table.rows[row].cells[column].innerHTML;
        table.rows[i].cells[j].innerHTML = val2.toString();
        table.rows[row].cells[column].innerHTML = val1.toString();
    }
    else if(i == row && j == (column - 1)){
        const val2 = table.rows[row].cells[column].innerHTML;
        table.rows[i].cells[j].innerHTML = val2.toString();
        table.rows[row].cells[column].innerHTML = val1.toString();
    }
    else if(i == (row + 1) && j == column){
        const val2 = table.rows[row].cells[column].innerHTML;
        table.rows[i].cells[j].innerHTML = val2.toString();
        table.rows[row].cells[column].innerHTML = val1.toString();
    }
    else if(i == (row - 1) && j == column){
        const val2 = table.rows[row].cells[column].innerHTML;
        table.rows[i].cells[j].innerHTML = val2.toString();
        table.rows[row].cells[column].innerHTML = val1.toString();
    }
}