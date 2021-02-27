import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';
import { messageText } from '../../data/messageText.js';

const NEXT_URL = 'new-product.html';

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
            window.location.href = '/login.html?mensaje=missingLogin&next='+NEXT_URL;
        } else {
            this.publish(this.events.FINISH_LOADING);
        }
    }

  
    focusInDescription() { 
        debugger;      
        const description = this.element.querySelector("input[name='description']");
        description.focus();
    }

    attachEventListeners() {
       // a medida que el usuario escribe, comprobamos si el formulario es válido para habiltiar o no el botón de enviar
       this.element.querySelectorAll("input").forEach((input) => {
        const button = this.element.querySelector("button");
        input.addEventListener("keyup", (event) => {
          // si el input es OK lo marco en verde, si no, en rojo
          if (input.validity.valid) {
            input.classList.add("is-success");
            input.classList.remove("is-danger");
          } else {
            input.classList.remove("is-success");
            input.classList.add("is-danger");
          }
  
          // valido si todo el formulario es OK para habilitar o deshabilitar el botón
          if (this.element.checkValidity()) {
            button.removeAttribute("disabled");
            
          } else {
            button.setAttribute("disabled", true);
          }
        });
      });
        

        // check whem the form is sended
        this.element.addEventListener('submit', async event => {

            event.preventDefault();          

            const product = {
                name: this.element.elements.description.value,
                price: this.element.elements.price.value,
                picture: this.element.elements.picture.files[0],
                sale: this.element.elements.status.value,
                tags: []
            }
            
            const options = this.element.elements.tags.options;
            for (let i = 0; i < options.length ; i++) {
                if (options[i].selected) 
                {
                    product.tags.push(options[i].value);
                }
            }
            
            this.publish(this.events.START_LOADING);
            try {
                await dataService.saveProduct(product);
                window.location.href = '/?mensaje=productOK'
            } catch (error) {
                const message = this.getMessageError(error, NEXT_URL);       
                this.publish(this.events.ERROR, message);
            } finally {
                this.publish(this.events.FINISH_LOADING);
            }
        });
    }       
}
