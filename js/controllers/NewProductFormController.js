import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';


export default class NewProductController extends BaseController {

    constructor(element, tags) {
        super(element);
        this.tags = tags;
        this.checkIfUserIsLogged();
        this.attachEventListeners();
        this.focusInDescription();
    }

    async checkIfUserIsLogged() {
        const userIsLogged = await dataService.isUserLogged();
        if (!userIsLogged) {
            window.location.href = '/login.html?next=/new-product.html';
        } else {
            this.publish(this.events.FINISH_LOADING);
        }
    }

  
    focusInDescription() {       
        const description = this.element.querySelector("input[name='description']");
        description.focus();
    }

    attachEventListeners() {
        // a medida que el usuario escribe, comprobamos si el formulario es válido para habiltiar o no el botón de enviar
        // const textarea = this.element.querySelector('textarea');
        // textarea.addEventListener('keyup', () => {
        //     const button = this.element.querySelector('button');
        //     if (this.element.checkValidity()) {
        //         button.removeAttribute('disabled');
        //     } else {
        //         button.setAttribute('disabled', true);
        //     }
        // });

        // check whem the form is sended
        this.element.addEventListener('submit', async event => {
            event.preventDefault();  
            const product = {
                description: this.element.elements.message.value,
                price: this.element.elements.price.value,
                image: this.element.elements.image.value,
                status: this.element.elements.status.value,
                tags: []
            }
            if (this.element.elements.tags.length > 0) {

                product.tags = this.element.elements.tags;
            }
            this.publish(this.events.START_LOADING);
            try {
                await dataService.saveProduct(product);
                window.location.href = '/?mensaje=tweetOK'
            } catch (error) {
                this.publish(this.events.ERROR, error)
            } finally {
                this.publish(this.events.FINISH_LOADING)
            }
        });
    }
       
}
