var nag = document.getElementById("add1");
var pis1 = document.getElementById("add2");
var pis2 = document.getElementById("add3");
var select = document.getElementById("select");

window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("dopobrania");
            console.log(invoice);
            console.log(window);
            var opt = {
                filename: 'pismo.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 1 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}
function add1() {
    var element = document.getElementById("add1");
    nag++;
    element.innerHTML = nag;
    var napis = document.getElementById("select-adress")
    switch (nag) {
        case 1:
            napis.innerHTML = "Ministerstwo Edukacji i Nauki";
            break;
        case 2:
            napis.innerHTML = "Ministerstwo Zdrowia";
            break;
        case 3:
            napis.innerHTML = "Kancelaria Prezesa Rady Ministrów";
            break;
        case 4:
            napis.innerHTML = "Kuratorium Oświaty.";
            break;   
    }
}
function remove1() {
    var element = document.getElementById("add1");
    nag--;
    element.innerHTML = nag;
    var napis = document.getElementById("select-adress")
    switch (nag) {
        case 1:
            napis.innerHTML = "Ministerstwo Edukacji i Nauki";
            break;
        case 2:
            napis.innerHTML = "Ministerstwo Zdrowia";
            break;
        case 3:
            napis.innerHTML = "Kancelaria Prezesa Rady Ministrów";
            break;
        case 4:
            napis.innerHTML = "Kuratorium Oświaty.";
            break;   
    }
}
function add2() {
    var element = document.getElementById("add2");
    pis1++;
    element.innerHTML = pis1;
    var napis = document.getElementById("select-pismo1")
    switch (pis1) {
        case 1:
            napis.innerHTML = "Czy urząd posiada dane /statystyki/badania  jaki wpływ na zdrowie psychiczne ma nauczanie  zdalne.?";
            break;
        case 2:
            napis.innerHTML = "Czy urząd prowadzi / zlecał badania nad wpływem zdalnego nauczania na zdrowie psychiczne dzieci i młodzieży.?";
            break;
        case 3:
            napis.innerHTML = "Czy urząd prowadzi /zlecił/ posiada badania nad wpływem zdalnego nauczania na zdrowie fizyczne dzieci?";
            break;
        case 4:
            napis.innerHTML = "Czy urząd prowadzi / zlecał badania nad wpływem zdalnego nauczania na zdrowie psychiczne dzieci i młodzieży.?";
            break;   
    }
}
function remove2() {
    var element = document.getElementById("add2");
    pis1--;
    element.innerHTML = pis1;
    var napis = document.getElementById("select-pismo1")
    switch (pis1) {
        case 1:
            napis.innerHTML = "Czy urząd posiada dane /statystyki/badania  jaki wpływ na zdrowie psychiczne ma nauczanie  zdalne.?";
            break;
        case 2:
            napis.innerHTML = "Czy urząd prowadzi / zlecał badania nad wpływem zdalnego nauczania na zdrowie psychiczne dzieci i młodzieży.?";
            break;
        case 3:
            napis.innerHTML = "Czy urząd prowadzi /zlecił/ posiada badania nad wpływem zdalnego nauczania na zdrowie fizyczne dzieci?";
            break;
        case 4:
            napis.innerHTML = "Czy urząd prowadzi / zlecał badania nad wpływem zdalnego nauczania na zdrowie psychiczne dzieci i młodzieży.?";
            break;   
    }
}
function add3() {
    var element = document.getElementById("add3");
    pis2++;
    element.innerHTML = pis2;
    var napis = document.getElementById("napis")
    switch (pis2) {
        case 1:
            napis.innerHTML = "Czy urząd posiada dane /statystyki/badania  jaki wpływ na zdrowie psychiczne ma nauczanie  zdalne.?";
            break;
        case 2:
            napis.innerHTML = "Czy urząd prowadzi / zlecał badania nad wpływem zdalnego nauczania na zdrowie psychiczne dzieci i młodzieży.?";
            break;
        case 3:
            napis.innerHTML = "Czy urząd prowadzi /zlecił/ posiada badania nad wpływem zdalnego nauczania na zdrowie fizyczne dzieci?";
            break;
        case 4:
            napis.innerHTML = "Czy urząd prowadzi / zlecał badania nad wpływem zdalnego nauczania na zdrowie psychiczne dzieci i młodzieży.?";
            break;   
    }
    
}
function remove3() {
    var element = document.getElementById("add3");
    pis2--;
    element.innerHTML = pis2;
    var napis = document.getElementById("napis")
    switch (pis2) {
        case 1:
            napis.innerHTML = "Czy urząd posiada dane /statystyki/badania  jaki wpływ na zdrowie psychiczne ma nauczanie  zdalne.?";
            break;
        case 2:
            napis.innerHTML = "Czy urząd prowadzi / zlecał badania nad wpływem zdalnego nauczania na zdrowie psychiczne dzieci i młodzieży.?";
            break;
        case 3:
            napis.innerHTML = "Czy urząd prowadzi /zlecił/ posiada badania nad wpływem zdalnego nauczania na zdrowie fizyczne dzieci?";
            break;
        case 4:
            napis.innerHTML = "Czy urząd prowadzi / zlecał badania nad wpływem zdalnego nauczania na zdrowie psychiczne dzieci i młodzieży.?";
            break;   
    }
}



