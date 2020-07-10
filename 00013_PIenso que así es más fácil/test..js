describe('', function () {
    it('El perimetro de un circulo de radio 1 es correcto', function () {
        assert.equal(perimetroCirculo(1), 6.28318530717958);
    });
    it('El perimetro de un circulo de radio 2 es correcto', function () {
        assert.equal(perimetroCirculo(2), 12.56637061435916);
    });
    it('El perimetro de un circulo de radio 0 es correcto', function () {
        assert.equal(perimetroCirculo(0), 0);
    });
    it('El area de un circulo de radio 1 es correcto', function () {
        assert.equal(areaCirculo(1), 3.14159265358979);
    });
    it('El area de un circulo de radio 2 es correcto', function () {
        assert.equal(areaCirculo(2), 12.56637061435916);
    });
    it('El area de un circulo de radio 0 es correcto', function () {
        assert.equal(areaCirculo(0), 0);
    });
});