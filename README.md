# Dibuja la cruz

1. Al hacer clic en el recuerdro, debe pintarse una '+'
2. La función para pintar la '+' en las coordenadas X,Y ya está implementada y no hace falta modificar nada, tan solo usarla
3. Recuerda que el objeto event dispone de propiedades interesantes respecto al tipo de evento que se ha producido
4. Implementa directamente en app.js si quieres un reto, o echa un vistazo a app-ayuda si no sabes como empezar.

[Demo de la app](https://omiras.github.io/where-is-clicked/)

## Ayudas

1. Ejemplo de clase del evento click - [enlace](https://github.com/omiras/ejemplosHTMLCursoFemXa/blob/main/DOM/ejemplo-objeto-event-click.html)

## Ayuda paso a paso

Sigue estos pasos sin copiar una solución completa. La idea es descubrir qué información entrega el navegador y conectarla con la función que ya existe.

### 1. Identifica el elemento que recibe el clic

1. Abre `index.html` y localiza el elemento que representa el mapa.
2. Observa que tiene la clase `map`. Esa clase es el selector que debes utilizar desde JavaScript.
3. En `app.js`, crea una variable que guarde una referencia a ese elemento usando un selector del DOM.

Puedes comprobar que el selector es correcto escribiendo la variable en la consola del navegador. Debe mostrar el elemento del mapa y no `null`.

### 2. Escucha el evento

1. Añade un listener para el evento `click` sobre el mapa.
2. Usa una función como callback. Esa función recibirá automáticamente un objeto con los datos del clic.
3. Mientras investigas, muestra ese objeto en la consola.

Abre las herramientas de desarrollador del navegador, ve a la pestaña **Console** y haz clic varias veces sobre el mapa. Expande el objeto que aparece y observa sus propiedades.

### 3. Encuentra las coordenadas adecuadas

El evento contiene varias parejas de coordenadas. No todas describen lo mismo: algunas se refieren a la ventana del navegador, otras a la pantalla completa y otras pueden estar relacionadas con el elemento que recibió el evento.

1. Identifica la pareja que usa el mismo sistema de referencia que necesita `drawCross`.
2. Haz clic cerca de la esquina superior izquierda y después cerca de la esquina inferior derecha. Compara los valores para comprobar que aumentan en la dirección esperada.
3. Si la cruz aparece desplazada, revisa el sistema de referencia antes de cambiar la función de dibujo. NO debes cambiar la función drawCross

### 4. Conecta los datos con la función existente

Dentro del callback del clic:

1. Conserva el objeto del evento en un parámetro con un nombre claro.
2. Extrae de él las dos coordenadas que acabas de identificar.
3. Pasa esas dos coordenadas a `drawCross`, respetando el orden `X` e `Y` que indica la firma de la función.
4. No modifiques la función `drawCross` ni el código que aparece después del aviso de no modificar.

Primero puedes guardar cada coordenada en una variable para leer mejor el código. Cuando funcione, decide si quieres mantener esas variables o simplificarlo.

### 5. Comprueba el resultado

1. Recarga la página y haz clic en varios puntos del mapa.
2. Verifica que se dibuja una cruz en cada clic.
3. Comprueba que las cruces conservan su posición aunque hagas clic en puntos distintos.
4. Prueba también los bordes y las esquinas para detectar desplazamientos.
5. Revisa la consola: no debería haber errores de selector, de listener ni de variables sin definir.

### 6. Si no funciona

- Si la consola muestra `null`, revisa el selector y asegúrate de que el script se ejecuta después de que exista el elemento en el HTML.
- Si no aparece ningún registro al hacer clic, comprueba que el listener está asociado al mapa y que has recargado la página correcta.
- Si se dibuja la cruz pero queda desplazada, compara de nuevo el origen de las coordenadas del evento con el origen usado por el posicionamiento absoluto.
- Si aparece un error indicando que `drawCross` no existe, revisa que no hayas borrado o renombrado la función proporcionada.
- Si X e Y están intercambiadas, revisa el orden de los argumentos al hacer la llamada.



