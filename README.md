# Semantik Front end test 

I try my best in complete most of the test, saddly it only filters one array with one match only, I used react and some react hooks.
The proyect has a basic structure, src/components/ and in that folder you will find the three components that I create each compponents has its own folder that contains 
the jsx, css and test files.

For the styles i used css and BEM and the corresponding semantic html.

For the data i didnt use fetch ast those files were locally store in the project so I imported them in the data.js file, in that file I got all the json files and map through them in order to get the data at the end I exported an array of that data(this will cause my filter problems)

For unit testing as I run out of time i jsut decided to match test ids

# What i should do better 

I really enjoy using emotion js as I believe it gives projects a little bit more of flexibillity regarding styles and component reusability 
probably would use typescript as it gives more control to the data flow.

Of course I have to improve the filtering functionality and think a little bit more in the data and its managment, if i had more time I probably would use redux and redux observable, also probalby woulkd try to do a express server in order to get the files in aserver and use the fetch api 

testing also have to be improved as jsut rendering is not enough to cover all the code

1. ¿Por qué no debería usar la librería ​JQuery,​ ​si estoy usando ​ReactJS​?

En mi opinion jquery no es igual de potente a React, este ultimo nos da la ventaja de organizar el projyecto de la forma que nosotros queramos y nos da ventajas en cuestion
de la reusabilidad de los componentes que queramos usar, aparte de esto tenemos jsx, hooks y context api que nos permiten tener un flujo de datos y otras cosas un poco mas concistentes. Por otro lado jquery es una libreria que ha perdido terreno frente a las otras herramientas en el ambiente de javascript

2. ¿Porque usarias ​Hooks d​ e las nuevas versiones de ​ReactJS, ​en lugar de ​class component​?
la mayor ventaja es la reuzabilidad del mismo componente si este crece no necesitamos vovlerlo uan clase y lo segundo es que la keyword "this" ya no nos da tanto problemas porque utilizamos arrow functions y nos dan un bind con los metods y propiedas que necesitemos 

3. ¿Que es un archivo ​JSX?​
JSX es un archivo que nos permite utilizar etiquetas html dentro de react. Esto facilita el desarrollo del proyecto porque podemos organziar la estrucutra del componentes y al mismo tiempo la logica asi separando la logica y la presentacion

4. ¿Que diferencia hay entre una ​function ​y una ​arrow function​ de Javascript?
Las arropw function hace bind de la keyword this

5. ¿Qué es ​Redux​ y​ cómo nos ayuda en los proyectos?
Es una libreria que nos permite organizar los datos y estados en una sola fuente de la verdad, tambien es muy util para realizar acciones asincronas y separar aun mas la logica de los componentes

6. ¿Por qué usuarios pruebas unitarias en tu código?
Las pruebas unitarias nos dan una capa mas de documentacion al mismo tiempo que nos permite encontrar errores en el codigo mucho mas rapido, por otro lado en temas de calidad 
las pruebas unitarias dan una capas mas de confiabilidad. 

7. ¿Que nos permite hacer la siguiente declaración?
const ​anyFunction = (​param_1​) => (​param_2​) =>​ ​param_1 ​+​ ​param_2
Creo que es un closure y nos permite encapsular los metdos o argumentos que necesiten un poco mas de 'privacidad'

# commands to run the proyect

yarn start 

to run the proyect locally 

yarn test 

to run the tests
