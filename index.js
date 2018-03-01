document.getElementById("botaoCam").onmouseenter = function() {camFunction()};
function camFunction() {
document.getElementById("camdown").classList.toggle("show");
}

document.getElementById("botaoRec").onmouseenter = function() {recFunction2()};
function recFunction2() {
document.getElementById("recdown").classList.toggle("show2");
}

//functions das camareiras
function camSegFunction() {
    document.getElementById("imprimir").innerHTML = "ralos, balcões brancos, balcão pia";
}

function camTerFunction() {
    document.getElementById("imprimir").innerHTML = " vidros, teto";
}

function camQuaFunction() {
    document.getElementById("imprimir").innerHTML = "ralos, vidros, piso";
}

function camQuiFunction() {
    document.getElementById("imprimir").innerHTML = "frigobar, lavanderia, cortinas";
}

function camSexFunction() {
    document.getElementById("imprimir").innerHTML = "louças, produtos, edredons";
}

function camSabFunction() {
    document.getElementById("imprimir").innerHTML = "Rotina!";
}

function camDomFunction() {
    document.getElementById("imprimir").innerHTML = "Rotina!";
}

//functions da recepção

function recSegFunction() {
    document.getElementById("imprimir").innerHTML = "conferencia, salão café, luzes, flores";
}