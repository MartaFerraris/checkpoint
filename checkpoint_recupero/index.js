// classe metodo
// funz async fetch
// nuova istanza
// div dinamico
// listener button

class randomFloor {
    constructor(floor) {
        this.floor = floor;
    }

    randomGen() {
        return Math.floor(Math.random() * 5);
    }
}

async function fetchRandom() {
    try {
        const resp = await fetch('https://my-json-server.typicode.com/ndrx02/fakeRestAPI/colori');
        const data = await resp.json();
        /* console.log(data); */

        const container = document.getElementById('container');

        

        data.forEach(el => {
            const newClass = new randomFloor();
            const classFloor = newClass.randomGen(el.data[i]);
            const div = document.createElement('div');
            div.innerHTML = `<div>Floor: ${classFloor}</div>`;
            div.style.backgroundColor = `${classFloor}`
            container.appendChild()
        });        
    } catch (error) {
        console.log('Error', error);
    };
}

const bth = document.getElementById('btn').addEventListener('click', fetchRandom);