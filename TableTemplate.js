//Class Declaration
class TableTemplate {

    static replaceProperty(text, dictionary) {
        return text.replace(/{{(.*?)}}/g, (match, spot) => {
            if (dictionary[spot]) {
                return dictionary[spot];
            } else {
                return match;
            }
        });
    }

    static fillIn(id, dictionary, columnName ) {

        //Variable Declaration and Initialization
        const table = document.getElementById(id);
        const headerRow = table.rows[0];
        let columnIndex = -1;

        for (let i = 0; i < headerRow.cells.length; i++) {
            let cell = headerRow.cells[i];
            cell.textContent = this.replaceProperty(cell.textContent, dictionary);

            if (cell.textContent === columnName) {
                columnIndex = i;
            }
        }

        const templateProcessor = new TemplateProcessor();

        // Make table visible (it was invisible)
        table.style.visibility = "visible";

        for (let i = 1; i < table.rows.length; i++) {
            let row = table.rows[i];

            if (columnIndex === -1) {
                for (let j = 0; j < row.cells.length; j++) {
                    let cell = row.cells[j];
                    templateProcessor.template = cell.textContent;
                    cell.innerHTML = templateProcessor.fillIn(dictionary);
                }
            } else {
                let cell = row.cells[columnIndex];
                cell.textContent = templateProcessor.fillIn(dictionary);
            }
        }
    }

}











































