Las variables no serían tan interesantes si no se pudieran modificar. Afortunadamente, JavaScript nos da nuevamente el gusto y nos lo permite:

```javascript
function pasarUnDiaNormal() {
  diasSinAccidentesConVelociraptores = diasSinAccidentesConVelociraptores + 1
}

function tenerAccidenteConVelociraptores() {
  diasSinAccidentesConVelociraptores = 0;
}
```

> ¡Ahora vamos a ganar algo de dinero :moneybag:!
> 
> Escribe un procedimiento `aumentarFortuna` que duplique el valor de la variable global `pesosEnMiBilletera`. No declares la variable; ya lo hicimos nosotros por ti (con una cantidad secreta de dinero :wink:). 
