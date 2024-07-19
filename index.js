function pattern(line) { 
    var i, j; 
    var output = '';
    
    for (i = 0; i < line; i++) { 
        for (j = 0; j < line; j++) { 
            if ( 
                (j == 1 && i != 0 && i != line - 1) || 
                ((i == 0 || i == line - 1) && j > 1 && j < line - 2) || 
                (i == (line - 1) / 2 && j > 2 && j < line - 1) || 
                (j == line - 2 && i != 0 && i >= (line - 1) / 2 && i != line - 1) 
            ) 
                output += "*"; 
            else 
                output += " ";
        } 
        output += "\n";
    } 
    
    console.log(output); 
} 

var line = 7; 
pattern(line);

