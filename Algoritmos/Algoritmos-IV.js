/*1.- Dados un array y un valor Y, 
cuenta e imprime (print) el número de valores del array que sean mayores que Y.*/

function ejercicio1(arreglo, y) { //arreglo =[6,4,2,3,7,1]; y= 4;arreglo.length=6
    var cantidad = 0; //1>2>
    //var arraux=[]//[6,7]
    for (var i = 0; i < arreglo.length; i++) { //i=0>1>2>3>4>5>6
        if (arreglo[i] > y) {
            cantidad = cantidad + 1;
            //arraux.push(arreglo[i]);
        }
    }

    return cantidad //return arraux.length;

}

b = ejercicio1([6, 4, 2, 3, 7, 1], 4); //b= 2
console.log(b); //2

var array = [3, 5, 1, 7];
var y = 4;
var qty = 0;

function printHigher(x) {

    for (i = 0; i < x.length; i++) {
        if (x[i] > y) {
            qty = qty + 1;
        }
    }
    return qty;
}
console.log(printHigher(array));



/*Dado un array, imprime los valores máximos (max), 
mínimos (min) y promedio (average) para el array. */
var arreglo1 = [3, 4, 5];
const pi = 3,
    1415;

function maxMinProm(array) {
    if (array.length >= 1) {
        let max = array[0];
        let min = array[0];
        let promedio = array[0];

        if (array.length > 1) {
            let suma = 0;
            for (let i = 0; i < array.length; i++) {
                if (max < array[i]) {
                    max = array[i];
                }
                if (min > array[i]) {
                    min = array[i];
                }
                suma = suma + array[i];
            }
            promedio = suma / array.length;
        }
        console.log(max, min, promedio);
    }
}
e = maxMinProm([9]);
var arreglo2 = [4, 3, 1];
c = maxMinProm(arreglo1);
d = maxMinProm(arreglo2);


/*
Dado un array de números, crea una función que dé como resultado un nuevo array 
donde los valores negativos se reemplacen por el texto (string) ‘Dojo’. 
Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].*/

function reemplazarNegativos(arreglo) {
    let newArray = [];
    for (let i = 0; i < arreglo.length; i++) { //++i i++ --i i-- i+=2 -> i=i +2
        if (arreglo[i] < 0) {
            arreglo[i] = "Dojo";
            newArray.push("Dojo")
        } else {
            newArray.push(arreglo[i]);
        }
    }
    return arreglo;
}
f = reemplazarNegativos([1, 2, -3, -5, 5]);
console.log(f);

/**
 * Dado un array y su respectivo índice, 
remueve los valores en el rango del índice dado( acortando el array). 
Por ejemplo, removerRango([20,30,40,50,60,70],2,4) debiera devolver [20,30,70].
*/


function removerRango(arreglo, rangoInicio, rangoFin) {
    let newArray = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (i < rangoInicio || i > rangoFin) {
            newArray.push(arreglo[i]);
        }
    }
    return newArray;
}

g = removerRango([20, 30, 40, 50, 60, 70], 2, 4);
console.log(g);

/*
<html lang = "en" >
    <
    script >
    function removerRango(arre, ranginic, rangfin) {
        if (ranginic <= rangfin && rangfin > 0 && ranginic >= 0 && ranginic <= arre.length && rangfin < arre.length) {
            let newarray = [];
            for (i = 0; i < arre.length; i++) {
                if (i < ranginic || i > rangfin) {
                    newarray.push(arre[i]);

                }
            }
            return newarray;
        }
        return "Revisar datos";

    }
g = removerRango([20, 30, 40, 50, 60, 70], 0, 1);
console.log(g); <
/script>

</html>
*/