function vaciar(fname) {
    let contaa = 0;
    let contab = 0;

    if (contaa == 0 & fname.name == "fname") {
        fname.value = '';
        contaa = 1;
    }
    if (contab == 0 & fname.name == "lname") {
        fname.value = '';
        contab = 1;
    }
    if (contaa == 0 & fname.name == "uname") {
        fname.value = '';
        contaa = 1;
    }
}
var alertShown = false;

function verificarEntrada(fname) {
    if (fname.value == '' && !alertShown) {
        alert('The Name field cannot be left empty');
        alertShown = true;
    } else {
        var x = fname.value;
        fname.value = x.toUpperCase();
    }
}
var alertShown2 = false;

function verificarEntrada2(lname) {
    if (lname.value == ''&& !alertShown2) {
        if (!alertShown2) { 
            alert('The Last Name field cannot be left empty.');
            alertShown2 = true; 
        }
    } else {
        var y = lname.value;
        lname.value = y.toUpperCase();
    }
}
var alertShown3 = false;

function verificarEntrada3(uname) {
    if (uname.value == '' && !alertShown3) {
        alert('The User field cannot be left empty.');
        alertShown3 = true;
    } else {
        var t = uname.value;
        uname.value = t.toUpperCase();
    }
}
    function init() {
        verificarEntrada(document.getElementById('fname'));
        verificarEntrada2(document.getElementById('lname'));
        verificarEntrada3(document.getElementById('uname'));
    }