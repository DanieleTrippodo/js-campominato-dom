Esercizio di oggi: Griglia Campo Minato

nome repo: js-campominato-grid

Come strutturare la consegna
1. Inizializziamo la repo con git e github come sempre.

2. Aggiungiamo un file readme.md e ci incolliamo il testo della traccia dell'esercizio, poi facciamo il commit e il primo push su github
3. Creiamo lo scaffolding di base, per avere la struttura che segue:
    > js/script.js
    > css/style.css
    > index.html
    > readme.md
Poi facciamo il commit e il secondo push

4. Nel file readme.md scomponiamo il problema in passaggi semplici
descritti in italiano. Poi facciamo il commit e il terzo push.
5. Procediamo a svolgere l'esercizio in javascript,  facendo un adeguato numero di commit e push.

Consegna:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.



# Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno:
 - Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
    Ad esempio: Di cosa ho bisogno per generare i numeri?
    Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti. Le validazioni e i controlli possiamo farli anche in un secondo momento.





# Svolgimento

> creiamo la pagina HTML e CSS che contenga un header un main e un footer
    - IMPORTANTE il main deve essere centrato


> creiamo uno script JS che crei un quadratino dentro il quadrato più grande già presente dentro l'HTML
    > selezioniamo il ''play'' button in modo che sia pronto a ricevere un click

> creiamo una funzione per il nostro JS che generi un quadratino dentro l'elemento già presente nell'HTML, per farlo...
    > dichiariamo il quadrato principale (quello dentro l'HTML) dentro la funzione im modo che possiamo inserire elementi al suo interno e richiamarla dentro la funzione
    > siccome ci devono essere massimo 100 quadratini, creiamo dentro la funzione un ciclo for che crei un quadrato per ogni ciclo
    > ogni volta che crei un quadrato prendi il valore di ''i'' e inseriscilo dentro il quadrato, così da numerarli tutti in ordine
    > usare appendchild per inseire i quadratini dentro a quello più grande

