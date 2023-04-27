// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

window.onload = constructor;

function constructor(){
    let sumar = document.getElementById('eSUMAR');
    let restar = document.getElementById('eRESTAR');
    let multiplicar = document.getElementById('eMULTIPLICAR');
    let dividir = document.getElementById('eDIVIDIR');
    sumar.addEventListener('click', esumar);
    restar.addEventListener('click', erestar);
    multiplicar.addEventListener('click', emultiplicar);
    dividir.addEventListener('click', edividir);
}
function esumar(){
    let V1 = document.getElementById('V1').value;
    let V2 = document.getElementById('V2').value;
    document.getElementById('R').value = parseInt(V1) + parseInt(V2);
}
function erestar(){
    let V1 = document.getElementById('V1').value;
    let V2 = document.getElementById('V2').value;
    document.getElementById('R').value = parseInt(V1) - parseInt(V2);
}
function emultiplicar(){
    let V1 = document.getElementById('V1').value;
    let V2 = document.getElementById('V2').value;
    document.getElementById('R').value = parseInt(V1) * parseInt(V2);
}
function edividir(){
    let V1 = document.getElementById('V1').value;
    let V2 = document.getElementById('V2').value;
    document.getElementById('R').value = parseInt(V1) / parseInt(V2);
}
