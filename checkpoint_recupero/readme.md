Crea una classe con un metodo che si occupa di creare dinamicamente dei div e assegnargli un attributo che si occuperà di dare un colore di background.
Crea poi una funzione asincrona che fa un fetch a questo indirizzo: https://my-json-server.typicode.com/ndrx02/fakeRestAPI/colori e una volta ottenuti i dati, farà
una nuova istanza della classe a cui passeremo un dato random tra quello che abbiamo ottenuto.
Infine, creare un listener di eventi associato al bottone, che quando cliccato richiama la nostra funzione.
Suggerimento: un metodo che puoi usare per ottenere valori random è questo: 
Math.floor(Math.random() * 5) dove 5 è il numero massimo che possiamo ottenere