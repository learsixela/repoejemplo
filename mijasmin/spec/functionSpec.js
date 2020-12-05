function a(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] > 5) {
            x[i] = "Coding";
        } else if (x[i] < 0) {
            x[i] = "Dojo";
        }    
    }    
    return x;
}
//console.log(a([5, 7, -1, 4]))

describe("funcion a->", function() {


    it("tercer comentario, envio [6, 7, 6, 6] y retorno [Coding,Coding,Coding,Coding]", function() {
        expect(a([6, 7, 6, 6])).toEqual(["Coding", "Coding", "Coding", "Coding"]);
    });
});