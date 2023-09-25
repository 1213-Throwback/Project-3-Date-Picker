//Class Declaration
class TableTemplate {
    static fillIn(id, dictionary, columnName ){

        //Variable Declaration and Initialization
        const table = document.getElementById(id);
        const headerRow = table.rows[0];
        let  columnIndex = -1;

        for(let i = 0;i < headerRow.cells.length; i++ ){
            //Examine header row and replace properties
            let cell = headerRow.cells[i];
            cell.textContent = this.replaceProperty(cell.textContent, dictionary);
            if (cell.textContent === columnName) {
                columnIndex = i;
            }

        }

        for(let i = 1; i < table.rows.length; i++){
            if(//Column index is not specified){
                //Process entire table
            }
            else{//columnName is not matched,
                //Return without replacing the text in the columns
            }
        }


    static replaceProperty(text, dictionary) {
        return text.replace(/{{(.*?)}}/g, (match, spot) => {
            if (dictionary[spot]) {
                return dictionary[spot];
            } else {
                return match;
            }
        });
    }




}











































