function estadoQ0(cadena) {
    if (/^[ \n]*$/.test(cadena)) return 'q0';
    if (/^l$/.test(cadena)) return 'q1';
    return false; 
}

function estadoQ1(cadena) {
    return /^e$/.test(cadena) ? 'q2' : false; 
}

function estadoQ2(cadena) {
    return /^t$/.test(cadena) ? 'q3' : false;
}

function estadoQ3(cadena) {
    return /^[ \n]*$/.test(cadena) ? 'q4' : false;
}

function estadoQ4(cadena){
    if ( /^[ \n]*$/.test(cadena)) return 'q4';
    if ( /^[a-zA-Z]$/.test(cadena)) return 'q5';
    return false;

}

function estadoQ5(cadena){
    if (/^[a-zA-Z0-9]$/.test(cadena)) return 'q5';
    if (/^ $/.test(cadena)) return 'q6';
    if (cadena === '=') return 'q7';
    return false; 
}

function estadoQ6(cadena){
    if (/^ $/.test(cadena)) return 'q6';
    if (cadena === '=') return 'q7';
    return false; 
}


function estadoQ7(cadena){

    //looking for any space after '=' 
    if (/^ $/.test(cadena)) return 'q7';

    //in case we want to begin with our numbers
    if (/^[0-9]$/.test(cadena)) return 'q8';
    return false; 
}

//this one allows to increase our number, generate a float, being an operation or end
function estadoQ8(cadena){
    if (/^[0-9]$/.test(cadena)) return 'q8';
    if (cadena === '.') return 'q9';
    if(cadena === '+' || cadena === '/' || cadena === '*' || cadena === '-') return 'q11';
    if (cadena === ';') return 'estadoFinal';
    return false
}

//we add numbers to our float number
function estadoQ9 (cadena){
    if (/^[0-9]$/.test(cadena)) return 'q10';
}

//only for operations coming from loat numbers
function estadoQ10 (cadena) {
    //can add more numbers into float number
    if (/^[0-9]$/.test(cadena)) return 'q10';

    //begin an operation
    if(cadena === '+' || cadena === '/' || cadena === '*' || cadena === '-') return 'q11';
    
    //end with a float number
    if (cadena === ';') return 'estadoFinal';
    return false;
}


//begin our new operation
function estadoQ11 (cadena) {
    if (/^[0-9]$/.test(cadena)) return 'q8';
}

function estadoQ12 (cadena) {
    if (/^[ \n]*$/.test(cadena)) return 'q0';
    if (/^l$/.test(cadena)) return 'q1';
    return false; 
}

function cadenaTexto (cadena){
    const estadosAceptacion = ['estadoFinal'];
    let estadoActual = 'q0';
    
    
    for (let i = 0; i < cadena.length; i++){
        const simbolo = cadena[i];
        //console.log(estadoActual);
        //console.log(simbolo);
        
        switch (estadoActual) {
            case 'q0':
                estadoActual = estadoQ0(simbolo);
                break;
            case 'q1':
                estadoActual = estadoQ1(simbolo);
                break;
            case 'q2':
                estadoActual = estadoQ2(simbolo);
                break;
            case 'q3':
                estadoActual = estadoQ3(simbolo);
                break;
            case 'q4':
                estadoActual = estadoQ4(simbolo);
                break;
            case 'q5':
                estadoActual = estadoQ5(simbolo);
                break;
            case 'q6':
                estadoActual = estadoQ6(simbolo);
                break;
            case 'q7':
                estadoActual = estadoQ7(simbolo);
                break;
            case 'q8':
                estadoActual = estadoQ8(simbolo);
                break;
            case 'q9':
                estadoActual = estadoQ9(simbolo);
                break;
            case 'q10':
                estadoActual = estadoQ10(simbolo);
                break;
            case 'q11':
                estadoActual = estadoQ11(simbolo);
                break;
            case 'estadoFinal':
                estadoActual = estadoQ12(simbolo);
                break; 
            default:
                return false;
        }
        //console.log(estadoActual);

        if (estadoActual === false) {
            return false;
        }
    }
    return (estadosAceptacion.includes(estadoActual));
    
}

 
const entrada1 = "let cinco = 5;let numeros56letras1=45+43.5;";
const entrada2 = "let a245A0= 9.21*22.441+1;\nlet numero57 = 57;\nlet miOperacion=10+99-3;";
const entrada3 = " let    A = 9.5+9.5;";

console.log("Cadena 1",entrada1, " : ", cadenaTexto(entrada1));
console.log("Cadena 2",entrada2, " : ", cadenaTexto(entrada2));
console.log("Cadena 3",entrada3, " : ", cadenaTexto(entrada3));

