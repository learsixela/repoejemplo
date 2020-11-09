function repetirValores(array) {
    let nuevoarray = [];
    for (let i = 0; i < array.length; i++) {
        nuevoarray.push(array[i]);
        nuevoarray.push(array[i]);
    }
    return nuevoarray;

}

describe("repetirValores", function() {
    it("cuando pase repetirValores([4,”Ulysses”, 42, false]), debe retornar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false]", function() {
        expect(repetirValores([4, "Ulysses", 42, false])).toEqual([4, 4, "Ulysses", "Ulysses", 42, 42, false, false]);
    });

});