'use strict';

class Storage {

    constructor() {
        this.input = document.querySelector('input');
        this.buttons = document.querySelectorAll('button');
        this.span = document.querySelector('span');
        this.assignEvents();
    }

    assignEvents() {
        this.buttons.forEach((elem, index) => {
            elem.addEventListener('click', () => {
                switch(index) {
                    case 0:
                        this.addStorage();
                        break;
                    case 1:
                        this.getStorage();
                        break;
                    case 2:
                        this.removeStorage();
                        break;
                    default:
                        console.error('nieznana akcja');
                }
            });
        });
    }

    addStorage() {
        console.log(this.input.value);
        localStorage.setItem('test', this.input.value);
    }

    getStorage() {
        console.log('pobranie');
        this.span.innerText = localStorage.getItem('test');
    }

    removeStorage() {
        console.log('usuwanie');
        const conf = confirm('Czy na pewno usunąć dany wpis?');

        if(conf) {
            localStorage.removeItem('test');
        }
    }
}

new Storage;