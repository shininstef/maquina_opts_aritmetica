function estadoQ0(simbolo) {
    return /^[0-9]$/.test(simbolo) ? 'q1' : false;
}

function estadoQ1(simbolo) {
    if (/^[0-9]$/.test(simbolo)) return 'q1';
    if (simbolo === '.') return 'q2';
    if (/^[+*/-]$/.test(simbolo)) return 'q5';
    return false;
}

function estadoQ2(simbolo) {
    if (/^[0-9]$/.test(simbolo)) return 'q2';
    if (/^[+*/-]$/.test(simbolo)) return 'q3';
    return false;
}

function estadoQ3(simbolo) {
    if (/^[0-9]$/.test(simbolo)) return 'q3';
    if (simbolo === '.') return 'q4';
    if (/^[+*/-]$/.test(simbolo)) return 'q5';
    return false;
}

function estadoQ4(simbolo){
    if (/^[0-9]$/.test(simbolo)) return 'q4';
    if (/^[+*/-]$/.test(simbolo)) return 'q5';
    return false;
}

function estadoQ5 (simbolo){
    return /^[0-9]$/.test(simbolo) ? 'q3' : false;
}


function cadenaTexto (cadena){
    const estadosAceptacion = ['q3', 'q4'];
    let estadoActual = 'q0';

    for (let i = 0; i < cadena.length; i++){
        const simbolo = cadena[i];
        
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
            default:
                return false;
        }

        if (estadoActual === false) {
            return false;
        }
    }
    return (estadosAceptacion.includes(estadoActual));
    
}


const entrada1 = "1+1";
const entrada2 = "96+3.24//85";
const entrada3 = "045+5.5/85.2-";
const entrada4 = "85.5205*495222-5/85.2-2";
const entrada5 = "766*63.21-3.1416+75/777";

console.log("Cadena 1:", cadenaTexto(entrada1));
console.log("Cadena 2:", cadenaTexto(entrada2));
console.log("Cadena 3:", cadenaTexto(entrada3));
console.log("Cadena 4:", cadenaTexto(entrada4));
console.log("Cadena 5:", cadenaTexto(entrada5));

