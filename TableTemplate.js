//Class Declaration
class TableTemplate {
    static fillIn(id, dictionary, columnName ){

        //Variable Declaration and Initialization
        const table = document.getElementById(id);
        const headerRow = table.rows[0];

        for(let i = 0;i < headerRow.cells.length; i++ ){
            //Examine header row and replace properties
        }

        for(let i = 1; i < table.rows.length; i++){
            if(//Column index is not specified){
                //Process entire table
            }
            else{//columnName is not matched,
                //Return without replacing the text in the columns
            }
        }


    }

}
