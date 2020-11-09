function nUltimo(arreglo, n) {
    if (arreglo.length < n) {
        return null;
    } else {
        return arreglo[arreglo.length - n];
    }
}

describe("nUltimo", function() {
    it("cuando pase ([5,2,3,6,4,9,7],3), debe retornar 4", function() {
        expect(nUltimo([5, 2, 3, 6, 4, 9, 7], 5)).toEqual(3);
    });
    it("cuando pase ([5,2,3,6,4,9,7],7), debe retornar 5", function() {
        expect(nUltimo([5, 2, 3, 6, 4, 9, 7], 7)).toEqual(2);
    });
});