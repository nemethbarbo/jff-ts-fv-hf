# TypeScript függvény, eljárás gyakorló feladator - Házi feladat - Code Challange
> Klónozást követően mindenki a saját branchébe dolgozzon (a main le van tiltva)! Az eredmény megjelenítését azonosító alapú eléréssel a html oldalon is jelenítsük meg. Ehhez használhatunk segédeljárásokat is pld. feladat01Megjelenit(). Az esztétikus megjelenítéshez alkalmazzunk Bootstrap keretrendszert!

> ## Feladat01:  Hozzunk létre függvényt, amely három paraméter alapján legenerál egy céges emailcímet! A keresztnév, vezetéknév az első két paraméter, utolsó a domain! Pld. Teszt, Elek, > cegnev.com - tesztelek@cegnev.com   
> **Függvény neve**: *emailGeneral(szöveg, szöveg, szöveg):szöveg*  
> **Paraméterek(ek)**: *vezetekNev:szöveg, keresztNev:szöveg, domain:szöveg*  
> **Visszatérési értéke**: *szöveg* 
--- 

> ## Feladat02: Hozzunk létre függvényt, amelynek két bemenő paramétere lesz: két egész szám! Vizsgjuk meg, hogy osztói -e egymásnak!  
> **Függvény neve**: *szamokOszthatosagVizsgal(szám, szám):logikai*    
> **Paraméterek(ek)**: *szám, szám*  
> **Visszatérési értéke**: *logikai*
--- 

> ## Feladat03: Hozzunk létre függvényt, amelynek két bemenő paramétere lesz: egyik a számokat tartalmazó tömb, másik egy szám, amit megvizsgálunk, hogy benne van -e!  
> **Függvény neve**: *tombVizsgal(tomb(szám), szám):logikai*   
> **Paraméterek(ek)**: *tomb(szám), szám*  
> **Visszatérési értéke**: *logikai*  
--- 

> ## Feladat04: Hozzunk létre függvényt, amely egy teljes év lehetséges ötöslottó számait legenerálja! Visszatérése tömb, amely számokat tartalmaz.  
> **Függvény neve**: *otoslottoGeneral():tomb(szám)*  
> **Paraméterek(ek)**: -  
> **Visszatérési értéke**: *szám tömb*  
---

> ## Feladat05: Hozzunk létre függvényt, amely egy bemenő paraméter alapján eldönti egy leltárszámról, hogy helyes -e! Helyes a leltárszám ebben a formáumban: FGTP-123456-20230510
> 4 db angol nagybetű kötőjel 6 db szám kötőjel aktuális dátumegyben  
> **Függvény neve**: *leltarSzamEllenoriz(szöveg):logikai*  
> **Paraméterek(ek)**: *leltarSzam:szöveg tipus*  
> **Visszatérési értéke**: *logikai*  
---

> ## Feladat06: Hozzunk létre eljárást, amely kiirja egy bemenő születési dátum alapján, hogy a hét melyik napja volt (hétfő.. vasárnap)!  
> **Függvény neve**: *hetnapjaKiir()*  
> **Paraméterek(ek)**: szuletesiDatum:szöveg  
> **Visszatérési értéke**: -
