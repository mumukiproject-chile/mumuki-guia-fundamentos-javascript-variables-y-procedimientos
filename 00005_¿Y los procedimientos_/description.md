En el ejercicio anterior, construiste una `function` que se ejecutaba con el solo fin de imprimir por pantalla. Y por ello, tuvimos que devolver un valor cualquiera. ¿No te huele mal?

Además, hagamos memoria: cuando queremos reutilizar código, podemos declarar:

* _funciones_, que siempre devuelven algo y no producen ningún efecto
* _procedimientos_, que no devuelven nada y producen efectos

Entonces, `versosTierraChilena` no es una función... ¡sino un procedimiento! ¿Cómo se declaran procedimientos en JavaScript?

¡De la misma forma que las funciones!: usando la palabra clave `function`.

```javascript
function versosTierraChilena() {
    imprimir("Danzamos en tierra chilena,");
    imprimir("más bella que Lía y Raquel;");
    imprimir("la tierra que amasa a los hombres");
    imprimir("de labios y pecho sin hiel...");
}
```

> Envía esta nueva versión de `versosTierraChilena`