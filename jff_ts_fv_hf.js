/*Feladat01: Hozzunk létre függvényt, amely három paraméter alapján legenerál egy céges emailcímet!
A keresztnév, vezetéknév az első két paraméter, utolsó a domain!
Pld. Teszt, Elek, > cegnev.com - tesztelek@cegnev.com
Függvény neve: emailGeneral(szöveg, szöveg, szöveg):szöveg
Paraméterek(ek): vezetekNev:szöveg, keresztNev:szöveg, domain:szöveg
Visszatérési értéke: szöveg*/
function emailGeneral(vezetekNev, keresztNev, domain) {
    var email = vezetekNev + keresztNev + "@" + domain;
    var emailCim = email.toLocaleLowerCase();
    console.log(emailCim);
    return emailCim;
}
function emailGeneralKiir() {
    var vezetekNev = String(prompt("Kérem adja meg a vezetéknevét!"));
    var keresztNev = String(prompt("Kérem adja meg a keresztnevét!"));
    var domain = String(prompt("Kérem adja meg a email szolgáltató nevét pl. gmail.com, cegnev.com stb."));
    document.getElementById("cegesEmail").innerHTML = "Az Ön céges email címe: " + emailGeneral(vezetekNev, keresztNev, domain);
}
/*Feladat02: Hozzunk létre függvényt, amelynek két bemenő paramétere lesz: két egész szám!
Vizsgáljuk meg, hogy osztói -e egymásnak!
Függvény neve: szamokOszthatosagVizsgal(szám, szám):logikai
Paraméterek(ek): szám, szám
Visszatérési értéke: logikai*/
function szamokOszthatosagVizsgal(szam1, szam2) {
    var oszthatoE;
    if (szam1 == 0 || szam2 == 0) {
        alert("0-val nem osztunk, kérem adjon meg másik számot!");
    }
    ;
    if (szam1 % szam2 == 0) {
        oszthatoE = true;
        console.log(szam2 + " osztója " + szam1 + "-nak/nek");
    }
    else if (szam2 % szam1 == 0) {
        oszthatoE = true;
        console.log(szam1 + " osztója " + szam2 + "-nak/nek");
    }
    else {
        oszthatoE = false;
        console.log("A számok nem egymás osztói!");
    }
    return oszthatoE;
}
function oszthatosagKiir() {
    var szam1 = Number(prompt("Kérem adjon meg egy tetszőleges számot: "));
    var szam2 = Number(prompt("Kérem adjon meg egy másik számot: "));
    document.getElementById("osztoi").innerHTML = "A számok egymás osztói: " + szamokOszthatosagVizsgal(szam1, szam2) || szam2 + " osztója " + szam1 + "-nak/nek " + szamokOszthatosagVizsgal(szam1, szam2);
}
/* Feladat03: Hozzunk létre függvényt, amelynek két bemenő paramétere lesz:
egyik a számokat tartalmazó tömb, másik egy szám, amit megvizsgálunk, hogy benne van -e!
Függvény neve: tombVizsgal(tomb(szám), szám):logikai
Paraméterek(ek): tomb(szám), szám
Visszatérési értéke: logikai*/
function tombVizsgal(tomb, szam) {
    var vizsgalat = false;
    tomb.forEach(function (elem) {
        if (elem == szam) {
            vizsgalat = true;
        }
    });
    return vizsgalat;
}
function tombVizsgalKiir() {
    var tomb = [2, 46, 3, 27, 17, 81, 99, 5];
    var szam = Number(prompt("Kérem adjon meg egy tetszőleges számot: "));
    var eredmeny = tombVizsgal(tomb, szam);
    var htmlKiir = "";
    if (eredmeny == true) {
        htmlKiir = "A megadott szám megtalálható a tömbben!";
    }
    else {
        htmlKiir = "A megadott szám nem található meg a tömbben!";
    }
    document.getElementById("tombvizsgal").innerHTML = htmlKiir;
}
/*Feladat04: Hozzunk létre függvényt, amely egy teljes év lehetséges ötöslottó számait legenerálja!
Visszatérése tömb, amely számokat tartalmaz.
Függvény neve: otoslottoGeneral():tomb(szám)
Paraméterek(ek): -
Visszatérési értéke: szám tömb*/
function otoslottoGeneral() {
    var hetiSzamok = [];
    while (hetiSzamok.length != 5) {
        var randomszam = Math.floor(Math.random() * 90) + 1;
        if (hetiSzamok.indexOf(randomszam) == -1) {
            hetiSzamok.push(randomszam);
        }
    }
    console.log(hetiSzamok);
    return hetiSzamok;
}
function egyEvOtosLottoKiir() {
    var lottoSzamok = [];
    for (var i = 1; i <= 52; i++) {
        var lottoSzamok_1 = otoslottoGeneral();
        console.log(lottoSzamok_1);
        document.getElementById("otoslotto").innerHTML += [i] + ".heti ötöslottó nyerőszámok: " + lottoSzamok_1 + "<br>";
    }
}
/*Feladat05: Hozzunk létre függvényt, amely egy bemenő paraméter alapján
eldönti egy leltárszámról, hogy helyes -e!
Helyes a leltárszám ebben a formátumban: FGTP-123456-20230510
4 db angol nagybetű kötőjel 6 db szám kötőjel aktuális dátumegyben
Függvény neve: leltarSzamEllenoriz(szöveg):logikai
Paraméterek(ek): leltarSzam:szöveg tipus
Visszatérési értéke: logikai*/
function leltarSzamEllenoriz(leltarSzam) {
    var helyesE = false;
    var formatum = /^[A-Z]{4}-[0-9]{6}-(19|20)\d\d(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
    var maiDatum = new Date();
    var year = Number(leltarSzam.slice(12, 16));
    var month = Number(leltarSzam.slice(16, 18));
    var day = Number(leltarSzam.slice(18, 20));
    if (formatum.test(leltarSzam) && year == maiDatum.getFullYear() && month == maiDatum.getMonth() + 1 && day == maiDatum.getDate()) {
        helyesE = true;
    }
    return helyesE;
}
function leltarSzamEllenorizKiir() {
    var leltarSzam = prompt("Kérem adja meg a leltárszámot!");
    var leltarSzamHelyesE = leltarSzamEllenoriz(leltarSzam);
    if (leltarSzamHelyesE) {
        document.getElementById("leltarszam").innerHTML = "A megadott leltárszám helyes!";
    }
    else {
        document.getElementById("leltarszam").innerHTML = "A megadott leltárszám helytelen, a helyes formátum: FGTP-123456-20230519, vagyis 4 db angol nagybetű kötőjel 6 db szám kötőjel aktuális dátum egyben.";
    }
}
/*Feladat06: Hozzunk létre eljárást, amely kiirja egy bemenő születési dátum alapján,
hogy a hét melyik napja volt (hétfő.. vasárnap)!
Függvény neve: hetnapjaKiir()
Paraméterek(ek): szuletesiDatum:szöveg
Visszatérési értéke: -
*/
function hetnapjaKiir() {
    var szuletesiDatum = prompt("Kérem adja meg a születési dátumát (formátum: év számmal.hónap számmal.nap számmal pl. 1981.04.19.): ");
    var date = new Date(szuletesiDatum);
    var hetNapja = date.getDay();
    var napNeve = ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"];
    document.getElementById("hetnapja").innerHTML = "Ön " + napNeve[hetNapja] + "i napon született.";
}
