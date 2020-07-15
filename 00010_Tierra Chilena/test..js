describe('versos', function () {
    it('deberia imprimir los versos', function () {
        versosTierraChilena();
        assert.equal(fakeConsole.toString(), 'Aquí me pongo a cantar\nAl compás de la vigüela;\nQue el hombre que lo desvela\nUna pena extraordinaria\n');
    });
    it('deberia retornar 0', function () {
        assert.equal(versosTierraChilena(), 0);
    });
});