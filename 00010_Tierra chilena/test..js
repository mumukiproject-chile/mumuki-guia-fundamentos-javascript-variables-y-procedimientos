describe('versos', function () {
    it('deberia imprimir los versos', function () {
        versosTierraChilena();
        assert.equal(fakeConsole.toString(), 'Danzamos en tierra chilena,\nmás bella que Lía y Raquel;\nla tierra que amasa a los hombres\nde labios y pecho sin hiel...\n');
    });
    it('deberia retornar 0', function () {
        assert.equal(versosTierraChilena(), 0);
    });
});