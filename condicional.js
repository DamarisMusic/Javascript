/*el operador == es para comparar 2 elementos y ver si son iguales o no*/
if(estaLloviendo == true)
{
    alert('No voy a la plaza')
}else{
    alert('si voy')
}
/*ejemplo de un condicional con booleang*/

/*cuando en un condicional hay varias de condiciones se la llama compuesta, sino (esta compuesta por 1) se la llama simoke*/
/* esto: != , significa distinto o diferente de igual*/


let Edad = 2023 - 1994
if (Edad >= 18) /*esta condición tiene 2 valores: true or false*/
/*true*/{
    alert('Si podés tener una casa')
}/*false*/else{
    alert('No tenés edad para estar en la lista del sorteo de casas')
}

let cantidadCasas = 0
let trabajoFormal = true

let cantidadHijos = 2
if(cantidadHijos > 0)
{
    alert('Tenés prioridad en el sorteo de casas del estado')
}else{
    alert('Vas a estar al final de la lista (no tenés prioridad en la lista)')
}

/*¿como hacer una condicion compuesta*/
if ((Edad >= 18) && (trabajoFormal == true) && (cantidadCasas > 0))  /*el "&&" significa la "y" que ambas condiciones deben cumplirse para ser verdaderas, sino son falsas*/
{
    alert('Podés entrar al sorteo')
}else{
    alert('No podés entrar al sorteo')
}/*esta es una funcion condicional de 3 condiciones con y*/

if (Edad >= 18) || (trabajoFormal)

/*20/10/2023*/

function paroimpar(num)
let par
if{
    par = = true
}else{
    par = = false
}
return par
