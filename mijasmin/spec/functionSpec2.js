/*Array: “N” último: Devuelve el elemento “N” último. 
Dado ([5,2,3,6,4,9,7],3) , devuelve 4. Si el array es muy pequeño, devuelve null.
    */

function nUltimo(arreglo, n) { //arreglo=[5,2,3,6,4,9,7]
    //arreglo.length = 7; arreglo[0]=5; arreglo[arreglo.length-1](ultimo dato del arreglo) 
    //arreglo[arreglo.length-n]->arreglo[7-3]->arreglo[4]= 4

    //
    if (arreglo.length - 1 < n) {
        return null;
    } else {
        return arreglo[arreglo.length - n];
    }

}

b = nUltimo([5, 2, 3, 6, 4, 9, 7], 7);