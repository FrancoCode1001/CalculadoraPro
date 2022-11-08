// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

window.onload = mostrar;

function mostrar(){
    var btnSum = document.getElementById('btnSum');
    var btnRes = document.getElementById('btnRes');
    var btnMul = document.getElementById('btnMul');
    var btnDiv = document.getElementById('btnDiv');
    btnSum.addEventListener('click', sumar);
    btnRes.addEventListener('click', restar);
    btnMul.addEventListener('click', multiplicar);
    btnDiv.addEventListener('click', dividir);    
}
function sumar(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var resul = parseInt(num1) + parseInt(num2);
    var resultado = document.getElementById('resultado');
    resultado.innerHTML=('Resultado: '+resul);
}
function restar(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var resul = parseInt(num1) - parseInt(num2);
    var resultado = document.getElementById('resultado');
    resultado.innerHTML=('Resultado: '+resul);
}
function multiplicar(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var resul = parseInt(num1) * parseInt(num2);
    var resultado = document.getElementById('resultado');
    resultado.innerHTML=('Resultado: '+resul);
}
function dividir(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var resul = parseInt(num1) / parseInt(num2);
    var resultado = document.getElementById('resultado');
    resultado.innerHTML=('Resultado: '+resul);
}