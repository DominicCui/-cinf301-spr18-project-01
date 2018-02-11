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

    newGame();
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

function newGame() {
    const random = Array();
    const button = document.querySelector('button');
    const table = document.querySelector('table');

    button.addEventListener('click', (event) => {
        rand = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
        let emptyR = rand;
        rand = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
        let emptyC = rand;

        for (var a = [ 1, 2, 3, 4, 5, 6, 7, 8], i = a.length;  i--; ) {
            var rand = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
            random[i] = rand;
        }

        let num = 0;

        for(let t = 0; t <= 2; t++){
            for(let k = 0; k <= 2; k++){
                if(t == emptyR && k == emptyC){
                    table.rows[t].cells[k].innerHTML = null;
                }else{
                    table.rows[t].cells[k].innerHTML = random[num].toString();
                    num++;
                }
            }
        }
    })
}