/*Feladat01: Hozzunk létre függvényt, amely három paraméter alapján legenerál egy céges emailcímet!
A keresztnév, vezetéknév az első két paraméter, utolsó a domain!
Pld. Teszt, Elek, > cegnev.com - tesztelek@cegnev.com
Függvény neve: emailGeneral(szöveg, szöveg, szöveg):szöveg
Paraméterek(ek): vezetekNev:szöveg, keresztNev:szöveg, domain:szöveg
Visszatérési értéke: szöveg*/


function emailGeneral(vezetekNev:string, keresztNev:string, domain:string):string{
    let email:string = vezetekNev + keresztNev +"@"+ domain;
    let emailCim:string = email.toLocaleLowerCase();
    console.log(emailCim);
    return emailCim;
}

function emailGeneralKiir():void{
    let vezetekNev = String(prompt("Kérem adja meg a vezetéknevét!"));
    let keresztNev = String(prompt("Kérem adja meg a keresztnevét!"));
    let domain = String(prompt("Kérem adja meg a email szolgáltató nevét pl. gmail.com, cegnev.com stb."));
    document.getElementById("cegesEmail")!.innerHTML="Az Ön céges email címe: "+emailGeneral(vezetekNev, keresztNev, domain);
}

/*Feladat02: Hozzunk létre függvényt, amelynek két bemenő paramétere lesz: két egész szám!
Vizsgáljuk meg, hogy osztói -e egymásnak!
Függvény neve: szamokOszthatosagVizsgal(szám, szám):logikai
Paraméterek(ek): szám, szám
Visszatérési értéke: logikai*/

function szamokOszthatosagVizsgal(szam1: number, szam2: number): boolean {
    let oszthatoE: boolean;
    if (szam1 == 0 || szam2 == 0){
        alert("0-val nem osztunk, kérem adjon meg másik számot!");
    };
    if (szam1 % szam2 == 0) {
        oszthatoE = true;
        console.log(szam2 +" osztója " + szam1+"-nak/nek");
    } else if (szam2 % szam1 == 0) {
        oszthatoE = true;
        console.log(szam1 +" osztója " + szam2+"-nak/nek");
    } else {
        oszthatoE = false;
        console.log("A számok nem egymás osztói!");
    }
    return oszthatoE;
}

function oszthatosagKiir():void {
    let szam1: number = Number(prompt("Kérem adjon meg egy tetszőleges számot: "));
    let szam2: number = Number(prompt("Kérem adjon meg egy másik számot: "));
    document.getElementById("osztoi")!.innerHTML = "A számok egymás osztói: " + szamokOszthatosagVizsgal(szam1, szam2) || szam2 +" osztója " + szam1 +"-nak/nek "+ szamokOszthatosagVizsgal(szam1, szam2);
}

/* Feladat03: Hozzunk létre függvényt, amelynek két bemenő paramétere lesz:
egyik a számokat tartalmazó tömb, másik egy szám, amit megvizsgálunk, hogy benne van -e!
Függvény neve: tombVizsgal(tomb(szám), szám):logikai
Paraméterek(ek): tomb(szám), szám
Visszatérési értéke: logikai*/

function tombVizsgal(tomb: Array<number>, szam:number): boolean {
    let vizsgalat:boolean = false;
    tomb.forEach(elem => {
        if (elem == szam){
            vizsgalat = true;
        } 
    });
    return vizsgalat;
}

function tombVizsgalKiir(): void {
    let tomb : Array<number> = [2, 46, 3, 27, 17, 81, 99, 5];
    let szam:number = Number(prompt("Kérem adjon meg egy tetszőleges számot: "));
    let eredmeny:boolean = tombVizsgal(tomb, szam);
    let htmlKiir: string = "";
    if (eredmeny == true){
        htmlKiir = "A megadott szám megtalálható a tömbben!";
    } else {
        htmlKiir = "A megadott szám nem található meg a tömbben!";
    }
    document.getElementById("tombvizsgal")!.innerHTML = htmlKiir;
}

/*Feladat04: Hozzunk létre függvényt, amely egy teljes év lehetséges ötöslottó számait legenerálja!
Visszatérése tömb, amely számokat tartalmaz.
Függvény neve: otoslottoGeneral():tomb(szám)
Paraméterek(ek): -
Visszatérési értéke: szám tömb*/

function otoslottoGeneral(): Array<number>{
    let hetiSzamok: Array<number> = [];
    while (hetiSzamok.length != 5) {
        let randomszam: number = Math.floor(Math.random() * 90) + 1;
        if (hetiSzamok.indexOf(randomszam) == -1) {
            hetiSzamok.push(randomszam);
        }
    }
    console.log(hetiSzamok);
    return hetiSzamok;
}

function egyEvOtosLottoKiir(): void {
    let lottoSzamok: Array<number> = [];
    for (let i = 1; i <= 52; i++) {
        let lottoSzamok: Array<number> = otoslottoGeneral();
        console.log(lottoSzamok);
        document.getElementById("otoslotto")!.innerHTML += [i]+".heti ötöslottó nyerőszámok: "+ lottoSzamok +"<br>";
    }
}

/*Feladat05: Hozzunk létre függvényt, amely egy bemenő paraméter alapján
eldönti egy leltárszámról, hogy helyes -e!
Helyes a leltárszám ebben a formátumban: FGTP-123456-20230510
4 db angol nagybetű kötőjel 6 db szám kötőjel aktuális dátumegyben
Függvény neve: leltarSzamEllenoriz(szöveg):logikai
Paraméterek(ek): leltarSzam:szöveg tipus
Visszatérési értéke: logikai*/

function leltarSzamEllenoriz(leltarSzam:string):boolean{
    let helyesE: boolean = false;
    let formatum = /^[A-Z]{4}-[0-9]{6}-(19|20)\d\d(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
    let maiDatum = new Date();
    let year: number = Number(leltarSzam.slice(12, 16));
    let month: number = Number(leltarSzam.slice(16, 18));
    let day: number = Number(leltarSzam.slice(18, 20));
    if (formatum.test(leltarSzam) && year == maiDatum.getFullYear() && month == maiDatum.getMonth() + 1 && day == maiDatum.getDate()) {
        helyesE = true;
    }
    return helyesE;
}

function leltarSzamEllenorizKiir():void{
    let leltarSzam:string = <string>prompt("Kérem adja meg a leltárszámot!");
    let leltarSzamHelyesE:boolean = leltarSzamEllenoriz(leltarSzam);
    if (leltarSzamHelyesE){
        document.getElementById("leltarszam")!.innerHTML= "A megadott leltárszám helyes!";
    } else {
        document.getElementById("leltarszam")!.innerHTML= "A megadott leltárszám helytelen, a helyes formátum: FGTP-123456-20230519, vagyis 4 db angol nagybetű kötőjel 6 db szám kötőjel aktuális dátum egyben.";
    }
}

/*Feladat06: Hozzunk létre eljárást, amely kiirja egy bemenő születési dátum alapján,
hogy a hét melyik napja volt (hétfő.. vasárnap)!  
Függvény neve: hetnapjaKiir()
Paraméterek(ek): szuletesiDatum:szöveg
Visszatérési értéke: -
*/
function hetnapjaKiir():void{
    let szuletesiDatum:string = <string>prompt("Kérem adja meg a születési dátumát (formátum: év számmal.hónap számmal.nap számmal pl. 1981.04.19.): ");
    let date = new Date(szuletesiDatum);
    let hetNapja:number = date.getDay();
    const napNeve =["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"];
    document.getElementById("hetnapja")!.innerHTML = "Ön "+napNeve[hetNapja]+"i napon született.";
}
        