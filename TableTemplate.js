'use strict'
//Class Declaration
class TableTemplate {

    static fillIn(id, dictionary, columnName) {

        //Variable Declaration and Initialization
        const table = document.getElementById(id);
        const headerRow = table.rows[0];
        let columnIndex = -1;
        let processingindex = null;



        for (let i = 1; i < table.rows.length; i++) {
            const row = table.rows[i];

            if (columnName === undefined) {
                const templateProcessor = new templateProcessor(table.innerHTML);
                table.innerHTML = templateProcessor.fillIn(dictionary);

            }else {
                let templateProcessor = new templateProcessor(headerRow.innerHTML);
                headerRow.innerHTML = templateProcessor.fillIn(dictionary);
                for (let i = 0; i < headerRow.cells.length; i++) {
                    if (headerRow.cells[i].innerHTML === columnName) {
                        processingindex = i;
                        break;
                    }
                }
                if(processingindex != null){
                    for(let a = 1; a < table.rows.length; a++){
                        const row = table.rows[a];
                        for(let b = 0; b < row.cells.length; b++){
                            if(b === processingindex){
                                const cell = row.cells[a];
                                templateProcessor = new templateProcessor(headerRow.innerHTML);
                                cell.innetHTML = templateProcessor.fillIn(dictionary);
                            }
                        }
                    }
                }
            }
        }
        table.style.visibility = "visible";
    }
}